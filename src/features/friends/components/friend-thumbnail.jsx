import { Grid, Text, Image} from "@mantine/core"
import { getFriendsAPI } from "../api/friend.api"

export const FriendThumbnail = () => {

    const friends = getFriendsAPI();

    return(
        <Grid>
            {friends.map(friend => (
                <Grid.Col span={12} key={friend.id}>
                    <Image maw={100} mx="auto" radius="md" src={friend.picture}></Image>
                    <Text>
                        {friend.firstName + " " + friend.lastName}
                    </Text>
                </Grid.Col>
            ))}
        </Grid>
    )
}