import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import About from '../screens/About';
import ReviewDetails from '../screens/ReviewDetails';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ReviewDetailsStack = createStackNavigator();

// HomeScreen
// HomeからDetailへnavigateするためにはこちらにroute先componentを追加する
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Gamezone',
      }}
    />
    <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
  </HomeStack.Navigator>
);

const AboutStackScreen = () => (
  <ReviewDetailsStack.Navigator>
    <ReviewDetailsStack.Screen
      name="About"
      component={About}
      options={{
        title: 'About',
      }}
    />
  </ReviewDetailsStack.Navigator>
);

const TabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: 'Gamezone',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="info" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
