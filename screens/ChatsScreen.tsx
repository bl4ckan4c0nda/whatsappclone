import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatListItem from "../components/ChatListItem"

import chatRooms from "../data/chatRooms"
import Colors from '../constants/Colors';

export default function ChatsScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={chatRooms}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ChatListItem chatRoom={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.background
  },
});
