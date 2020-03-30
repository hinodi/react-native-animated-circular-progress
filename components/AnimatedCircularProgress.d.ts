declare module 'react-native-circular-progress' {
    import React from 'react';
    import ReactNative from 'react-native';

    export interface AnimatedCircularProgressProps {
        /**
         * BackgroundColor of CircularProgress
         * Defaults to #eeeeee
         */
        backgroundColor?: string;
        /**
         * Color of CircularProgress
         * Defaults to #1e88e5
         */
        color?: string;
        /**
         * Start degree of CircularProgress, where animation start (0-360)
         * Defaults to 0
         */
        startDeg?: number;
        /**
         * End degree of CircularProgress, where animation end (0-360) greater than startDeg
         * Defaults to 360
         */
        endDeg?: number;
        /**
         * Radius of outer CircularProgress
         * Defaults to 100
         */
        radius?: number;
        /**
         * Radius of inner CircularProgress
         * Defaults to 80
         */
        innerRadius?: number;
        /**
         * Time in ms, animation processing during this time
         * Actually animation time is duration / (endDeg - startDeg) smaller than radius
         * Defaults to 1000
         */
        duration?: number;
        children?: React.ReactNode;
        style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
    }

    export default class AnimatedCircularProgress extends React.Component<
        AnimatedCircularProgressProps,
        any
    > {
        render(): JSX.Element;
    }
}
