import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../components/Card';

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
            // 複数のスタイルを当てられる
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          />

          <Text>Hello form the modal :)</Text>
        </View>
      </Modal>

      <MaterialIcons
        style={styles.modalToggle}
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            // 第2パラメータにオブジェクトを渡せる。この場合、itemそのまま渡す
            onPress={() => navigation.navigate('ReviewDetails', { item })}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    padding: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 50,
    marginBottom: 0,
  },
});
