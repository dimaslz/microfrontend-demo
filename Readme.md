# Micro-frontend demo with Vite (WIP)

This is a demo testing a possible solution based on microfrontend with Vite + multiple frameworks.

This is very open to feedback, this project does not mean the best solution or the only idea, this is just a test. To make a decision, you need to research and have an agreement with the team, that's the most important part of the project.

Also, I have to admit that I am not a big lover of micro-frontend solution, it is not always the best, but, there might be some specific use cases to use this approach. Before deciding to use micro-frontends in our project, we need to keep in mind that just as many advantages they provide, they also increase the complexity to scale and maintain. We need to be clear on the pros and cons, draw, document and act.

## Stack

All the project base on [ViteJS](https://vitejs.dev) + [Lerna](https://lerna.js.org)

Frameworks

* Vue3
* React
* Preact
* Svelte
* Angular

## How it works

For sure, this is not the best solution to manage a project. I am doing everything in the same repository just for simplify to do not create a lot of repositories. Some parts should be in other repos or maybe, is a good idea to keep all in the same repo but, we should have a good deployment strategy but, that is other story.

### Main commands

* `yarn buid:packages`: Build all packages
* `yarn buid:modules`: Build all modules
* `yarn setup`: Install all packages in all repos (modules and packages)
* `yarn reset`: Remove all `node_modules` in all repos (modules and packages)

If you want to run the project first time, I recommend to run:

* `yarn build:packages && yarn build:modules`
* `yarn dev:module:vue-page`: Module in [http://localhost:2000/vue](http://localhost:2000/vue)
* `yarn dev:module:core`: Module in [http://localhost:4002](http://localhost:4002)

You should see the following page:
![alt text](/application-screenshot.png)

## Folder Structure

```bash
core # main application (react)
modules/ #
├── module-in-x-framework # x-page: module done by vue, react, angular, svelte or preact for example
└── ...
node_modules
packages/
├── components/ # small fraction of a layout: buttons, calendar, inputs...
├────── cross-components # components for any framework, for example some web component
├────── x-framework-components # components in a specific framework
├────── ...
├── layouts/ # a block of a view: login, signup form ...
├────── cross-layouts # layouts for any framwork
├────── x-framework-components # components for an x specific framework
├────── ...
├── utils/ # libraries, api sdk, collection of methods...
└────── ...
lerna.json # lerna config
package.json
Readme.md
yarn.lock
```

## Application idea

![alt text](/micro-frontend-demo.png)

## Author

```json
{
  name: "Dimas López",
  role: "FullStack Software Engineer",
  alias: "dimaslz",
  twitter: "https://twitter.com/dimaslz",
  site: "https://dimaslz.dev",
  linkedin: "https://www.linkedin.com/in/dimaslopezzurita",
  tags: "react, vue, angular, nodejs, mongodb, bootstraping"
}
```

## My other projects

* [https://randomdata.loremapi.io](https://randomdata.loremapi.io): API mock data (no open source)
* [https://svg-icon-2-fw-component.dimaslz.dev](https://svg-icon-2-fw-component.dimaslz.dev): SVG to Framework component (open source soon)
* [https://ng-heroicons.dimaslz.dev](https://ng-heroicons.dimaslz.dev): Use Heroicons.com in you Angular projects (open source)
