import { getFriendsAPI } from "../api/friend.api"
import { FriendThumbnail } from "./friend-thumbnail"
import { Grid } from '@mantine/core';

export const FriendGrid = () => {

    const friends = getFriendsAPI();

    return (
        <Grid grow gutter="xl">
            {friends.map(friend => (
                <FriendThumbnail key={friend.id} friend={friend} />
            ))}
        </Grid>
    )
}