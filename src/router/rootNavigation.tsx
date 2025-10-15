import React from 'react';
import { PHONENUMBER, VERIFYCODE, TABNAVIGATOR, FIRESTORE_TEST } from '../utils/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './tabNavigation';
import PhoneNumber from '../screens/contact/phoneNumber';
import FirestoreTestScreen from '../screens/test/FirestoreTestScreen';
import { Pressable, Text } from 'react-native';
import Colors from '../themes/colors';

const RootNavigation: React.FC = ({}) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation})  => ({
          headerRight: () => (
            <Pressable  onPress={()  => navigation.navigate(TABNAVIGATOR) } >
              <Text style={{ color: Colors.BLUE_1, fontSize: 18 }}>Done</Text>
            </Pressable>
          ),
        })}
        name={PHONENUMBER}
        component={PhoneNumber}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TABNAVIGATOR}
        component={TabNavigation}
      />

      <Stack.Screen
        options={{
          title: 'Firebase Firestore Test',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name={FIRESTORE_TEST}
        component={FirestoreTestScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
