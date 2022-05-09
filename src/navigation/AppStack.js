import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';

import TabNavigator from './TabNavigator';
import WalletScreen from '../screens/WalletScreen';
import HelpScreen from '../screens/HelpScreen';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#0c5ea3',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Search"
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="search-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Bookings"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="calendar-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Payments"
        component={MomentsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cash-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="wallet-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cog-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons
              name="information-circle-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthStack;
