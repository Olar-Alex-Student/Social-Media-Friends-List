import { Text } from "@mantine/core"
import { getFriendsAPI } from "../api/friend.api"

export const FriendList = () => {

    const friends = getFriendsAPI();

    return(
        <Text>
            {friends.map(friend => (
                <Text key={friend.id}>{friend.firstName + " " + friend.lastName}</Text>
            ))}
        </Text>
    )
}