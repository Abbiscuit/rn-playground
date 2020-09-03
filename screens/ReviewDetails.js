import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../components/Card';

const ReviewDetails = ({ navigation, route }) => {
  // 受け取り時に必要=routeとroute.params
  const { item } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        <View style={styles.rating}>
          <Text>Gamezon rating: </Text>
          <Image source={images.ratings[item.rating]} />
        </View>
        {/* 戻る時のメソッド */}
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      </Card>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
