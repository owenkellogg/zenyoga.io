
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

