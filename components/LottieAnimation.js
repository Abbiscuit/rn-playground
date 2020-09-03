import React from 'react';
import LottieView from 'lottie-react-native';

const LottieAnimation = () => {
  return (
    <LottieView
      source={require('../assets/lottie-programming.json')}
      autoPlay
      speed={1.5}
      onAnimationFinish
    />
  );
};

export default LottieAnimation;
