[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Version](https://img.shields.io/npm/v/react-native-hinodi-components.svg)](https://www.npmjs.com/package/react-native-hinodi-components)
[![npm](https://img.shields.io/npm/dt/react-native-hinodi-components.svg)](https://www.npmjs.com/package/react-native-hinodi-components)

# react-native-animated-circular-progress

Animated circular progress components for React Native project, with all pure React Native API

## Component API

### [AnimatedCircularProgress]

![](https://media.giphy.com/media/TKk0XIJDVyqxhB3OKQ/giphy.gif)

## AnimatedCircularProgress

```js
import AnimatedCircularProgress from 'react-native-animated-circular-progress';

<AnimatedCircularProgress
    backgroundColor='red'
    color='green'
    startDeg={45}
    endDeg={120}
    radius={60}
    innerRadius={40}
    duration={1000}
/>;
```

## Props

| Name            | Description                                                                                                                      | Type   | Required |                            Default Value                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- | :----- | :------: | :------------------------------------------------------------------: |
| backgroundColor | The background color of CircularProgress                                                                                         | String |          |  ![#eeeeee](https://placehold.it/15/999/000000?text=+) `'#eeeeee'`   |
| color           | The color of CircularProgress                                                                                                    | String |          | ![#1e88e5](https://placehold.it/15/1e88e5/000000?text=+) `'#1e88e5'` |
| startDeg        | Start degree of CircularProgress, where animation start (0-360)                                                                  | Number |          |                                  0                                   |
| endDeg          | End degree of CircularProgress, where animation end (0-360), greater than startDeg                                               | Number |          |                                 360                                  |
| radius          | Radius of outer CircularProgress                                                                                                 | Number |          |                                 100                                  |
| innerRadius     | Radius of inner CircularProgress                                                                                                 | Number |          |                                  80                                  |
| duration        | Time in ms, animation processing during this time. Actually animation time is duration / (endDeg - startDeg) smaller than radius | Number |          |                                 1000                                 |
| children        | The children to render inside this component                                                                                     | Node   |          |                                `null`                                |
| style           | The custom styling which will be applied to the container of the `children`                                                      | Style  |          |                                `null`                                |

## Installation

`yarn add react-native-animated-circular-progress`

or

`npm install react-native-animated-circular-progress`

## Author

[Dinh Huynh](https://www.facebook.com/hinodi1998)

## License

MIT
