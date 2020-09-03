import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import LottieAnimation from '../components/LottieAnimation';

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text>About</Text>
      <LottieAnimation />
    </View>
  );
};

export default About;
