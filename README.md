# NotificationCenter

NotificationCenter for vue2.x which is base on publish-subcribe pattern and Vue emitter

# Installation

```js
npm i @litt1e-p/notification-center --save
```

# Usage

```js
import { NotificationCenter } from '@litt1e-p/notification-center'

// 1. add observer
NotificationCenter.$addObserver('noticeName', cb)

// 2. post a message
NotificationCenter.$post('noticeName', someMessage)

// 3. remove an observer when destroy
NotificationCenter.$removeObserver('noticeName', cb)


function cb (msg) {
  console.info(msg)
}
/////
```
[for more usage](https://vuejs.org/)