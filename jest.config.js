module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts|x?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.ts",
    "\\.css$": "<rootDir>/src/__mocks__/styleMock.ts",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/src/__setup__/setupEnzyme.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  collectCoverageFrom: [
    "**/*.ts",
    "**/*.tsx",
    "!**/types.ts",
    "!**/node_modules/**",
  ],
};
