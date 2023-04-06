import { Grid, Card, Image, Text, Badge, Button, Group } from "@mantine/core"
import { getFriendsAPI } from "../api/friend.api"

export const FriendThumbnail = () => {

    const friends = getFriendsAPI();

    return(
        <Grid>
            {friends.map(friend => (
                <Grid.Col p={20} xs={6} sm={4} md={3} key={friend.id}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>

                        <Group mt="md" mb="xs">
                            <Image maw={100} mx="auto" radius="md" src={friend.picture}/>
                            <Group mt="md" mb="xs">
                                <Text color="white">
                                    {friend.firstName + " " + friend.lastName}
                                </Text>
                                <Badge color="orange" variant="light">
                                    <Text color="white">FRIEND</Text>
                                </Badge>
                            </Group>
                        </Group>

                        <Text size="sm" color="grey">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur unde.
                        </Text>

                        <Button variant="light" color="orange" fullWidth mt="md" radius="md">
                            <Text color="white">View Profile</Text>
                        </Button>
                        </Card>
                </Grid.Col>
            ))}
        </Grid>
    )
}