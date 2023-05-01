import React from 'react';
import Home from '../Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeIcon} from '../../assets/icons';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name=" "
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) => {
            return <HomeIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
