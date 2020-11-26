import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartXLabel,
  ChartYLabel,
  monotoneCubicInterpolation,
} from '@rainbow-me/animated-charts';

const {width: SIZE} = Dimensions.get('window');

const data = [
  {x: 1453075200, y: 1.47},
  {x: 1453161600, y: 1.37},
  {x: 1453248000, y: 1.53},
  {x: 1453334400, y: 1.54},
  {x: 1453420800, y: 1.52},
  {x: 1453507200, y: 2.03},
  {x: 1453593600, y: 2.1},
  {x: 1453680000, y: 2.5},
  {x: 1453766400, y: 2.3},
  {x: 1453852800, y: 2.42},
  {x: 1453939200, y: 2.55},
  {x: 1454025600, y: 2.41},
  {x: 1454112000, y: 2.43},
  {x: 1454198400, y: 2.2},
];

const points = monotoneCubicInterpolation({data, range: 40});

const getX = (value) => {
  'worklet';
  return `X - ${value}`;
};

const getY = (value) => {
  'worklet';
  return `Y - ${value}`;
};

const Invest = () => {
  return (
    <View style={styles.container}>
      <ChartPathProvider
        data={{
          points,
          // smoothingStrategy: 'bezier',
        }}>
        <ChartPath
          height={SIZE / 2}
          stroke={'blue'}
          width={SIZE}
          selectedStrokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.5}
          hitSlop={30}
          longPressGestureHandlerProps={{
            minDurationMs: 60,
          }}
          smoothingWhileTransitioningEnabled={false}
        />
        <ChartDot style={styles.dot} />
        <ChartXLabel format={getX} />
        <ChartYLabel format={getY} />
      </ChartPathProvider>
    </View>
  );
};

export default Invest;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: 'white',
    flex: 1,
  },
  dot: {backgroundColor: 'blue'},
  center: {alignSelf: 'center'},
});
