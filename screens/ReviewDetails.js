import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

const ReviewDetails = ({ navigation, route }) => {
  // 受け取り時に必要=routeとroute.params
  const { item } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{item.title}</Text>
      <Text>{item.body}</Text>
      <Text>{item.rating}</Text>
      {/* 戻る時のメソッド */}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ReviewDetails;
