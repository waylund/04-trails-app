# Introduction

Welcome to Boulder React Coding Night's Trail Hazard App, an app to report and track hazards on trails throughout the area.

The app is built with React/Redux using React Boilerplate to create new components, containers, routes, etc. This helps us keep consistency across the project. The backend/data storage design is yet to be decided so we are currently using mock data.

View our current mock-ups of the Trail Hazard App: [Mock-Ups](https://docs.google.com/drawings/d/1WIgBM3Nk-TmnEEfSPlwT2iLMjHFbr_tuZHi_pez7u5M/edit)

# Getting Started

### Important Note - Please Read First:
This project uses **Node**. If you don't have Node on your machine, you will **need** to download - https://nodejs.org/en/.

This projects uses **Yarn** to manage dependencies (https://yarnpkg.com) - to download yarn, `$ npm install yarn -g`. If you don't want to install yarn, use the equivelent npm commands.

### To get started:
1. Fork this repo into your personal github account
2. Clone from your repo onto your local machine
3. Set upstream so you can pull from the master repo
    ```
    // in your project dir
    $ git remote add upstream https://github.com/boulderReactCodingNight/04-trails-app
    $ git pull upstream master
    ```
5. Install dependencies via `$ yarn install`

### Start the app:
```
// The app runs on port 3000
$ yarn start
```

# Issues

All issues are managed in the repo under the issues tab or by using the direct link: https://github.com/boulderReactCodingNight/04-trails-app/issues

If you would like to work on an issue, comment on that issue that you are taking it so we don't have multiple people working on the same thing. One of the maintainers will then add the ~"In Progress"


# Submitting a Pull Request

### Important: Please make sure to add the issue number that you completed in one of your commit messages (i.e., closes #17). This will autoclose the issue.

### Once you have completed your issue, run through this initial checklist:
- Do all tests still pass? (yarn test)
- Did I increase techical debt?
- Can I write tests to cover my code?
- Am I following the repos general code style?

### Submit PR:
- Commit and push all of your code
- If you haven't been commiting as you go:
    - git add <files>
    - git commit -m "commit message here, closes #issueNumber"
    - Please make sure to add the issue number that you completed in one of your commit messages (i.e., closes #17)
- Pull from upstream which should be boulderReactCodingNight/04-trails-app
    - Confirm upstream with git remote -v
    - git pull upstream master
- Handle any merge conflicts
- Push all of your code up to the remote (git push origin <branch>)
    - Make sure your origin is set to your fork (git remote -v)
- Go to your fork on Gitub GUI (i.e., https://github.com/yourUserName/04-trails-app)
- Click Pull Requests on the top left of the window, then click New Pull Request (green button, top right)
- Follow directions in the GUI
    - Base fork: boulderReactCodingNight/04-trails-app
    - Head fork: userName/04-trails-app (this should be the fork you were working on)
    - Specify a branch if you were working on a specific branch.
- Click Create Pull Request
- Maintainers will review the code, request any changes and/or merge the PR

# More about React Boilerplate

## React Quick scaffolding

Automate the creation of components, containers, routes, selectors and sagas -
and their tests - right from the CLI!

Run `npm run generate` in your terminal and choose one of the parts you want
to generate. They'll automatically be imported in the correct places and have
everything set up correctly.

> We use [plop] to generate new components, you can find all the logic and
> templates for the generation in `internals/generators`.

[plop]: https://github.com/amwmedia/plop

## Instant feedback

Enjoy the best DX and code your app at the speed of thought! Your saved changes
to the CSS and JS are reflected instantaneously without refreshing the page.
Preserve application state even when you update something in the underlying code!

## Predictable state management

We use Redux to manage our applications state. We have also added optional
support for the [Chrome Redux DevTools Extension] – if you have it installed,
you can see, play back and change your action history!

[chrome redux devtools extension]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

## Next generation JavaScript

Use ESNext template strings, object destructuring, arrow functions, JSX syntax
and more, today. This is possible thanks to Babel with the `env`, `stage-0`
and `react` presets!

## Next generation CSS

Write composable CSS that's co-located with your components using [`styled-components`]
for complete modularity. Unique generated class names keep the specificity low
while eliminating style clashes. Ship only the styles that are used on the
visible page for the best performance.

[`styled-components`]: ../css/README.md#styled-components

## Industry-standard routing

It's natural to want to add pages (e.g. `/about`) to your application, and
routing makes this possible. Thanks to [react-router] with [connected-react-router],
that's as easy as pie and the url is auto-synced to your application state!

[react-router]: https://github.com/ReactTraining/react-router
[connected-react-router]: https://github.com/supasate/connected-react-router

## Static code analysis

Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.

Read more about linting in our [introduction](./introduction.md) and don't forget to setup your by following [our instructions](./editor.md).

## Optional extras

_Don't like any of these features? [Click here](remove.md)_

## Offline-first

The next frontier in performant web apps: availability without a network
connection from the instant your users load the app. This is done with a
ServiceWorker and a fallback to AppCache, so this feature even works on older
browsers!

> All your files are included automatically. No manual intervention needed
> thanks to Webpack's [`offline-plugin`](https://github.com/NekR/offline-plugin)

### Add To Homescreen

After repeat visits to your site, users will get a prompt to add your application
to their homescreen. Combined with offline caching, this means your web app can
be used exactly like a native application (without the limitations of an app store).

The name and icon to be displayed are set in the `manifest.json` generated by
Webpack's `webpack-pwa-manifest` plugin. Configure the name, colors, and icons
in `webpack.prod.babel.js` and try it!

## Performant Web Font Loading

If you simply use web fonts in your project, the page will stay blank until
these fonts are downloaded. That means a lot of waiting time in which users
could already read the content.

[FontFaceObserver](https://github.com/bramstein/fontfaceobserver) adds a class
to the `body` when the fonts have loaded. (see [`app.js`](../../app/app.js#L26-L36)
and [`App/styles.css`](../../app/containers/App/styles.css))

### Adding a new font

1.  Either add the `@font-face` declaration to `App/styles.css` or add a `<link>`
    tag to the [`index.html`](../../app/index.html). (Don't forget to remove the `<link>`
    for Open Sans from the [`index.html`](../../app/index.html)!)

2.  In `App/styles.css`, specify your initial `font-family` in the `body` tag
    with only web-save fonts. In the `body.jsFontLoaded` tag, specify your
    `font-family` stack with your web font.

3.  In `app.js` add a `<fontName>Observer` for your font.

## Image optimization

Images often represent the majority of bytes downloaded on a web page, so image
optimization can often be a notable performance improvement. Thanks to Webpack's
[`image-loader`](https://github.com/tcoopman/image-webpack-loader), every PNG, JPEG, GIF and SVG images
is optimized.

See [`image-loader`](https://github.com/tcoopman/image-webpack-loader) to customize optimizations options.

## Map

- [**CLI Commands**](commands.md)
- [Setting up your editor](editor.md)
- [Tool Configuration](files.md)
- [Server Configurations](server-configs.md)
- [Deployment](deployment.md) _(currently Heroku specific)_
- [FAQ](faq.md)
- [Gotchas](gotchas.md)

