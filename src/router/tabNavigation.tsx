import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CALLS, CAMERA, CHATS, SETTINGS, STATUS, TABNAVIGATOR } from '../utils/routes';
import Status from '../screens/status';
import { Pressable, StyleSheet, Text } from 'react-native';
import Calls from '../screens/calls';
import Chat from '../screens/chat';
import Camera from '../screens/camera';
import Settings from '../screens/settings';
import Chats from '../screens/chat';
import Colors from '../themes/colors';
import TabIcon from '../components/router/tabIcon';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: Colors.GRAY_3,
        },
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon size={size} focused={focused} color={color} route={route} />
        ),
        tabBarActiveTintColor: Colors.BLUE_1,
        tabBarInactiveTintColor: Colors.GRAY_1,
      })}
    >
      <Tab.Screen name={STATUS} component={Status} />
      <Tab.Screen name={CALLS} component={Calls} />
      <Tab.Screen name={CAMERA} component={Camera} />
      <Tab.Screen 
      options={({navigation})  => ({
        headerRight: () => (
          <Pressable style={{marginHorizontal:20}} onPress={()  => navigation.navigate(TABNAVIGATOR) } >
          <Feather color={Colors.BLUE_1} name='edit' size={25} />
          </Pressable>
        ),
        headerLeft: () => (
          <Pressable style={{marginHorizontal:20}} onPress={()  => navigation.navigate(TABNAVIGATOR) } >
            <Text style={{ color: Colors.BLUE_1, fontSize: 18 }}>Edit</Text>
          </Pressable>
        ),
      })}
      
      name={CHATS} component={Chats} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default TabNavigation;
