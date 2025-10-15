import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import defaultStyle from '../../styles/defaultScreenStyle';
import PhoneInput from '../../components/ui/phoneInput';
import { getAuth,  } from '@react-native-firebase/auth';

const PhoneNumber: React.FC = () => {
    const [phone,setPhone] = useState("+905349721860")
    async function signInWithPhoneNumber() {
        try {
          const confirmation = await getAuth().signInWithPhoneNumber(phone);
          console.log(confirmation.verificationId);
        } catch (error) {
          console.error('Phone auth error:', error);
        }
      }
  return (
    <SafeAreaView style={defaultStyle.SafeArea}>
      <View style={defaultStyle.container}>
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 20 }}>
          Please confirm your country code and enter your phone number
        </Text>

        <PhoneInput 
        value={phone}
        onChange={value => setPhone (value)} />
      <Button title='Kaydet' onPress={()  => signInWithPhoneNumber() } />
      </View>
    </SafeAreaView>
  );
};

export default PhoneNumber;
