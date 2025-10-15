import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  Image,
  View,
} from 'react-native';
import { ChatItemProps } from '../../models/ui/chatItemProps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../themes/colors';

const ChatItem: React.FC<ChatItemProps> = ({ item }) => {
  return (
    <Pressable style={{ flexDirection: 'row', padding: 10 }}>
      <View>
        <Image
          source={{ uri: item.image }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderColor: Colors.GRAY_4,
          paddingHorizontal: 10,
          flex: 1,
          minHeight: 85,
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: '500' }}>
              {item.name + '' + item.surname}
            </Text>
            <Text style={{ fontSize: 16, color: Colors.GRAY_2 }}>
              {item.date}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Ionicons
              name="checkmark-done-outline"
              size={20}
              color={Colors.BLUE_1}
            />
            <Text
              numberOfLines={1}
              style={{
                fontSize: 16,
                color: Colors.GRAY_2,
                marginHorizontal: 5,
              }}
            >
              {item.lastMessage}
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Feather name="chevron-right" size={25} color={Colors.GRAY_4} />
        </View>
      </View>
    </Pressable>
  );
};

export default ChatItem;
