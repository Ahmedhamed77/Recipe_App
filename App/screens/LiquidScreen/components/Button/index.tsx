import React from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {Vector} from 'react-native-redash';
import Feather from 'react-native-vector-icons/Feather';
import {Dimensions} from 'react-native';

import {Side} from '../Wave';

const {width} = Dimensions.get('screen');
const RADIUS = 25;

interface ButtonProps {
  position: Vector<Animated.SharedValue<number>>;
  side: Side;
  activeSide: Animated.SharedValue<Side>;
}

export const Button: React.FC<ButtonProps> = ({position, side, activeSide}) => {
  const isLeft = side === Side.LEFT;
  const style = useAnimatedStyle(() => ({
    position: 'absolute',
    left: isLeft ? position.x.value - RADIUS * 2 : width - position.x.value,
    top: position.y.value - RADIUS,
    borderRadius: RADIUS,
    width: RADIUS * 2,
    height: RADIUS * 2,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: withTiming(activeSide.value === Side.NONE ? 1 : 0),
  }));
  return (
    <Animated.View style={style}>
      <Feather
        name={`${isLeft ? 'arrow-right' : 'arrow-left'}` as const}
        size={24}
        color="white"
      />
    </Animated.View>
  );
};
