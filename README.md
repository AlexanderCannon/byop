# ⚛︎ React London


Welcome to my App, I hope you enjoyed my talk, and that you're hear to play with all the cool technology I demoed.


## 🏃‍♀️ Running


If you want to play with this app yourself, the app can run in dev mode for fast iteration, and properly dockerised for accurate testing 🎉

### 🌶 Start in developer mode for hot reloading

```bash

$ yarn dev

```



### 🐳 Start in Docker

```bash

$ docker run -it -p 8882:8882 --init byop

```



## 🛎 Testing Your React

Testing doesn't just encompass the traditional notion of unit tests, there are lots of ways you can ensure the validity of your code, and make sure your users always get a great experience.

### 🙌 Types

I can't overstate the value of types for finding and preventing bugs.

I am a huge fan of [TypeScript](https://www.typescriptlang.org/). It's easy to upgrade to from JavaScript, no need for a big bang and it only slows you down when you are solving new problems. Once you're up and running it allows you to go faster, by giving you confidence in your code.

Whatever your argument against TypeScript is, I will counter with: You're already _transpile_ your code, losing some control over the source so you can `()=>` and so you can `import CoolKids from 'babel'`. Why not use this step to catch bugs, and target specific runtimes!

If you're unfamiliar with TypeScript, check out my config in [tsconfig.json](/.tsconfig.json), which is a good jumping off point.

👩‍💻 Pro tip: alway use `noImplicitAny`.

### 🔍 Static analysis

#### 🐜 Application Linting
Everyone should be using a linter. No exceptions!

In the JavaScript world, you get [JSHint](https://jshint.com/about/) and [ESLint](https://eslint.org/). In TypeScript we can use [TSLint](https://palantir.github.io/tslint/) to the same effect.

A good linting config should always be able to help prevent bugs. Depending on the team, it can also be used to enforce a strict coding style.

Both ESLint and TSLint come with lots of handy plugins, for a variety of frameworks. From understanding React best practises to enforcing [A11Y](https://a11yproject.com/) html standards in your JSX.

By picking a popular set of rules you can remove egos from the discussion of rules. No more `tabs` v `spaces`. I asked [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) what their preference is, and do that. This is key in making maintainable code, helping build discipline. You can too, with their ES/TSLint plugin.

Check my [tslint.json](tslint.json) file for my config, and to see what plugins I'm using.


#### 🕴Coding standards
I have outsourced most of my opinions, that way I can always throw them away and get better ones, if they come along. [Prettier](https://prettier.io/) is an opinionated code formatter. It works with a lot of IDEs, and it goes _great_ with [Visual Studio code](https://code.visualstudio.com/), my editor of choice.

Don't love all of Prettier's choices? Find they sometimes clash with your linting config? don't stress! Fix it for your whole team in one go, by committing a .prettierrc file, with your own custom rules. You can check my one out [here](/.prettierrc).

### 🎨 Styles
#### 🤖Modern CSS

Your CSS code is as important as your JavaScript code. Un-refactorable CSS is usually a big factor in the quality of your developers lives. The markup in the HTML and the code that generates it effects how things get done, and how hard it is to make changes.

For modern CSS best practises don't use SASS or any other CSS compilers, you are already probably doing a _transpile_ step at build time, so just write modern CSS. You have all the cool stuff you want in modern browsers, without extra mental load.

Try and keep your CSS flat, this keeps it portable. If you heavily nest things, it means that sub-components can't be split out with their styles intact. Use [BEM](http://getbem.com/) naming conventions, to keep your CSS absolutely awesome and easily maintainable.

#### 🖼Style Linting
What? You can lint your styles too! Often overlooked, disparaged as _"not real code"_ CSS gets a hard time from people who should know better. The same people who spent years defending weird old JavaScript now turn around and complain about CSS. Well no longer!

There is a growing professional community around CSS. The best tool I've found for static analysis is [stylelint](https://stylelint.io/); which is an amazing, pluggable linter. Even if your setup isn't running something you can use as a pluggable build step, you can add a style linting job and run it on CI.

You can check out my linting config in my [.stylelintrc](/.stylelintrc) file.

### 🤞 NodeJS
For local development we have a tool for managing multiple versions of node, [NVM](https://github.com/nvm-sh/nvm) the node version manager.

Using NVM you can pick the version of node to use in your project locally, as defined in your [.nvmrc](/.nvmrc) file. This is helpful for fast iterative development, but before you push you should also test it a production-like environment.

Your production build should be using a docker image, that you can also run locally. This should have been configured to use the exact version of node you expect in production. No ifs, no buts, this is _essential_ for any modern app.

### 🔧 Traditional Testing

Before I say anything about how I test things, I want to say that if you only take away one thing from this document it's that **Developers Should Write Tests™️**. I strongly believe that the best person to test something is the person who designed and built it.

Does that mean there is no room for testers? Absolutely not, but your testers should also be engineers. I strongly believe that you should have people who specialise in breaking apps, in the same way you should have InfoSec engineers, and DevOps engineers.

Testers should focus on industrially breaking things. Verifying behaviour should be done by the developer who created functionality and the PO who asked for it. As an organisation you should be doing user testing, A/B testing and everything else in your power to verify the correctness of your designs.

If you find that this isn't being done, it's usually a cultural problem, unrealistic expectations and deadlines often result in useless unit tests and code thrown over the fence to let someone else find bugs.

This is often the case in scrum; developers need to finish a piece of work by an arbitrary deadline. Instead of finishing it properly they can just mark it as ready for test and push it. This buys time for the bug fix in the next sprint, and management is happy; to the detriment of your codebase and team's morale.

#### 👷‍♀️Testing as a developer
It's easy to become dogmatic about testing. If you've ever been asked to hit 100% unit test coverage, you'll probably ask yourself, _why_.

It's very easy to write [misleading tests that "prove" coverage but don't actually fix anything](https://www.theregister.co.uk/2019/04/23/hertz_accenture_lawsuit/).

That said, testing is extremely important.

Rough rules of thumb for things that **must** be tested:
- Anything important (core business logic, heavily used code)
- Anything complex (that 9 layer deep nested ternary you wrote in a fever dream)
- Anything that exposes an API (the classic "don't test private methods")
- Fragile things (hello CSS)
- Places where users are likely to interact with your code.

It's essential to do contract testing for external dependencies, and I would argue, to get a good picture of the overall application.

Integration tests, or _"testing the app as it is used"_ is a great way to ensure the application is still going to work for users.

So what am I using to test my application?

#### 🛡Unit testing

The type of testing that everyone should be familiar with, and also arguably the least valuable. Unit testing allows you to ensure that an individual function works is as you expect it.

I'm running all of my tests with Jest, which has a big pile of configuration allowing it to run all your tests. You can see the config I am running in my [Jest config](/jest.config.js).

For unit tests, Jest will happily run without any configuration. In this app the only place they particularly useful to me is in my [utils](/src/utils/index.ts). If I had a complex state or was using a lot of functions outside of my React they would definitely have an important place in component testing. To see samples of my unit tests you can check the [test file]([utils](/src/utils/__test__/index.spec.ts)) for my utils.

You might also spot that all of my tests live in folders called `__tests__`, this is personal preference, and there is no right or wrong place to put them, just move stuff around till you feel comfortable.

#### 🚀Integration testing

This is where the magic happens. In recent years there has been a shift towards testing applications as they actually work. For my money the best in the business in the React world is still [enzyme](https://airbnb.io/enzyme/).

There is a number of new challengers in that space, I have had good expeirence with both [cypress](https://www.cypress.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro), but in production I find myself gravitating to Enzyme.
I have some examples of testing with both react-testing-library and enzyme in my tests, like [this](/src/app/components/Counter/__tests__/index.spec.tsx) and [that](/src/app/components/Speaker/__tests__/index.spec.tsx).

#### 📸 Snapshot Testing

Snapshot testing is a great way to ensure that you can refactor safely. If done right you can catch changes in the markup that users won't spot, as well as the big ones they will spot.

For markup snapshots, Jest comes to the rescue again. The current trend is to split everything into individual atomic libraries, so to use snapshots with Jest you will need Facebook's [react test renderer](https://www.npmjs.com/package/react-test-renderer), which is maintained by the core react team.

The snapshots it creates can be peer reviewed during a pull request, and ensure that if you changed the markup it was because you meant them to. You can see [examples](src/app/components/Counter/__tests__/__snapshots__/index.spec.tsx.snap) of the snapshots it generates in my codebase.

#### 🏝Visual Snapshots
The brilliant Chrome team at Google gave us [Puppeteer](https://pptr.dev/), a tool for headless browser testing that JavaScript developers have no excuse not to use. This can replace and augment some of the selenium testing that you might have traditionally carried out, but with no need to learn selenium.

Puppeteer will allow you to take screenshots of the browser as you interact with it, this is amazingly powerful, especially when combined with packages like [jest-image-snapshot](https://www.npmjs.com/package/jest-image-snapshot). Jest image snapshot allows you to compare new images with old ones. Someone accidentally made the header purple, or broke a link to an image. Traditionally you need a person to verify these sorts of bugs, but with Jest image snapshot you can get a computer to check it at build time!

Using a combination of Puppeteer & Jest image snapshot we can verify behaviour and look simultaneously, in a way that mimics the way users will actually use the site. With enough patience you can even script the journey for users with screen-readers, and know at build time if you've broken your websites accessibility.

You can see my example tests [here](/src/app/components/Counter/__tests__/index.browser.spec.ts) and their outputs[here](/src/app/components/Counter/__tests__/__image_snapshots__).

### CI/CD

You should be also running a host of other tools to verify correctness of your build. As a developer you know the tools you want to use to automate and verify your workflow.

Want to do performance testing? Why not check out [autocannon](https://github.com/mcollina/autocannon).

Want to a final safety net to protect your users? You can add [lighthouse](https://github.com/GoogleChromeLabs/lighthousebot) to your build step!

Want to keep ahead of all those NPM packages you use GitHib can provide you with [security alerts](https://github.com/AlexanderCannon/byop/network/alerts) and [dependabot](https://dependabot.com/) can keep your packages up to date.

There are countless ways to automate countless things. These are just some examples of my favourites. Whatever you pick, get out there and automate things! 🚀
