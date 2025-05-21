# HackerNews

## Setup and develop

To run the project, install the dependencies and run the local dev server.

```bash
pnpm install
pnpm run dev
```

## Architectural decisions

I decided to build this small project using Solid Start, a lightweight meta-framework for creating efficient and interactive UIs. Since it is a meta-framework, the initial response from the server is server-side rendered. However, this approach presents a challenge: we make 21 API calls before the entire page can be rendered and sent to the client. An alternative solution could involve displaying a loader and allowing the client to handle the data fetching.

On the index page, I utilized Solid's data-fetching pattern, which enables the framework to pre-fetch data when hovering over a link (e.g., transitioning from the index page to the about page). Since there isn't much content to display, I kept everything on a single page and broke it into small components. For example, the `UserDetail` component progressively fetches additional data as needed.

Additionally, I created a `HackerNewsClient` to define the interface for API calls. While some might argue that this logic could be inlined, this decision involves balancing colocation and abstraction. The same trade-off applies to the use of components in the project.

## Ideas for improvement.

1. Pagination to see se more than just the first 20 stories.
1. Overall styling is horrible
1. Potentially improve initial load by fetching stories on client
1. Potentially navigating to a page instead of expanding the story (allowing for the route based prefetch of user data)
1. skeleton loaders

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

## This project was created with the [Solid CLI](https://solid-cli.netlify.app)
