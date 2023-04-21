import { Card, Avatar, Text, Badge, Button, Group, Grid, Flex } from '@mantine/core';

export const FriendThumbnail = ({friend}) => {
    return(
        <Grid.Col sm={6} lg={4}>
            <Card shadow="sm" padding="sm" radius="md" withBorder>
                <Flex
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Group>
                        <Avatar radius="xl" size="xl" color="orange" src={friend.picture} />
                    </Group>
                </Flex>

                <Flex
                    mih={50}
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Group>
                        <Text>
                            {friend.firstName} {friend.lastName}
                        </Text>
                        <Badge color="orange" variant="light">
                            {friend.title}
                        </Badge>
                    </Group>
                </Flex>
                
                <Flex
                    mih={50}
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Group>
                        <Button
                            variant="gradient"
                            gradient={{ from: 'orange', to: 'red' }}
                            size="sm"
                            radius="xl"
                        >
                            View Profile
                        </Button>
                    </Group>
                </Flex>
            </Card>
        </Grid.Col>
    )
}