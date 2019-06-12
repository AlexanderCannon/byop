FROM node:lts-alpine as deps

COPY package.json yarn.lock ./

RUN yarn && \
  yarn install --production --modules-folder node_modules_prod

# Test
# FROM node:10-alpine as test

# RUN mkdir /reflect

# WORKDIR /reflect

# COPY --from=deps node_modules node_modules
# COPY ./ ./

# RUN yarn test

# Build
FROM node:lts-alpine as builder

RUN mkdir /byop

WORKDIR /unicord

COPY --from=deps node_modules node_modules
COPY ./ ./

RUN PARCEL_WORKERS=1 yarn build

# prod build
FROM node:lts-alpine

RUN mkdir /byop

WORKDIR /unicord

COPY --from=builder /unicord/dist ./dist
COPY --from=deps node_modules_prod ./node_modules

# Run as non root user
USER node

EXPOSE 8882

ENTRYPOINT ["node", "dist/server"]
