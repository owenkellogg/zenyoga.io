
# AndorraYoga.com (soon Yoga.ad / Ioga.ad / HotYoga.ad)

Your yoga practice

## API 

See https://andorrayoga.com/api/docs For Full Reference

#### List of Audio Yoga Lessons

POST https://andorrayoga.com/api/v1/lessons

#### Sign In With Relayx

POST https://andorrayoga.com/api/v1/auth/relayx

#### Buy Lesson Pass

POST https://andorrayoga.com/api/v1/passes

#### List My Lesson Passes

GET https://andorrayoga.com/api/v1/passes

#### Start Yoga Lesson

POST https://andorrayoga.com/api/v1/session/start

#### Pause Yoga Lesson

POST https://andorrayoga.com/api/v1/session/pause

#### End Yoga Lesson

POST https://andorrayoga.com/api/v1/session/stop

#### Add Note About A Session

POST https://andorrayoga.com/api/v1/notes

#### See Notes From Previous Sessions

GET https://andorrayoga.com/api/v1/notes

## Events

Your components may react to the following events:

- lesson.created
- lesson.selected
- lesson.viewed
- lesson.list.viewed

- session.started
- session.paused
- session.completed
- session.stopped

- lesson.notes.created
- lesson.notes.viewed

- account.login

- pass.purchased
- pass.list.viewed
- pass.viewed
- pass.redeemed

This is the documentation website of MUI.

To start the docs site in development mode, from the project root, run:

```sh
yarn && yarn docs:dev
```

If you do not have yarn installed, select your OS and follow the instructions on the [Yarn website](https://yarnpkg.com/lang/en/docs/install/#mac-stable).

_DO NOT USE NPM, use Yarn to install the dependencies._

## How can I add a new demo to the documentation?

[You can follow this guide](https://github.com/mui/material-ui/blob/HEAD/CONTRIBUTING.md)
on how to get started contributing to MUI.

## How do I help to improve the translations?

Please visit https://translate.mui.com/ where you will be able to select a language and edit the translations.
Please don't submit pull requests directly.

#######

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### changelog

v1.0.0
Jul 1, 2021
Initial release

v1.0.1
Aug 5, 2021
Fixed dashboard mobile navigation

v1.1.0
Aug 12, 2021
Added Shop v3

v1.2.0
Aug 25, 2021
Added Shop v4
makeStyles api is completely removed
fixed next/image issue
