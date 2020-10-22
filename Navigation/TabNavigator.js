import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainStackNavigator, ContactStackNavigator, ProjectsStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="About" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
        <Tab.Screen name="Projects" component={ProjectsStackNavigator} />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
