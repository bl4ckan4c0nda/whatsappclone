import React from "react"
import { View, Text, Image } from "react-native"

import { ChatRoom } from "../../types"
import styles from "./style"

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props

    const user = chatRoom.users[1]
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                {/* Avatar */}
                <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                
                {/* Username & LastMessage */}
                <View style={styles.senderContainer}>
                    <Text style={styles.username}>{ user.name }</Text>
                    <Text style={styles.lastMessage}>{ chatRoom.lastMessage.content }</Text>
                </View>
            </View>

            {/* time */}
            {/* <Text>{ chatRoom.lastMessage.createdAt }</Text> */}
            <Text style={styles.time}>Yesterday</Text>
        </View>
    )
}

export default ChatListItem