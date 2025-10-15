import React from 'react';
import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native';
import Colors from '../../themes/colors';
import Feather from 'react-native-vector-icons/Feather';
const PhoneInput: React.FC<Props> = ({ onChange, value }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.selectCountry}>
        <Text style={styles.country}>United States</Text>
        <Feather name="chevron-right" size={25} color={Colors.GRAY_4} />
      </Pressable>

      <View style={styles.inputContainer}>
        <View
          style={{
            borderRightWidth: 0.5,
            paddingHorizontal: 10,
          }}
        >
          <Text style={styles.countryCode}>+1</Text>
        </View>
        <TextInput
          value={value}
          onChangeText={value => onChange(value)}
          keyboardType="number-pad"
          style={styles.input}
          placeholder="phone number"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    fontSize: 24,
    backgroundColor: Colors.WHITE,
    padding: 10,
  },
  selectCountry: {
    padding: 10,
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderColor: Colors.GRAY_2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  country: {
    fontSize: 18,
    color: Colors.BLUE_1,
  },
  countryCode: {
    fontSize: 24,
    color: Colors.GRAY_1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PhoneInput;
