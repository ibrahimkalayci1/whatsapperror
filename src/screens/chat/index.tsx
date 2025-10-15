import React from 'react';
import { SafeAreaView, Text, View, FlatList, Pressable } from 'react-native';
import defaultStyle from '../../styles/defaultScreenStyle';
import { chats } from '../../utils/mockData';
import ChatItem from '../../components/chat/chatItem';

const Chats: React.FC = () => {
  return (
    <SafeAreaView style={defaultStyle.SafeArea}>
      <View style={defaultStyle.container}>
        <FlatList
          data={chats}
          renderItem={({ item }) => <ChatItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chats;
