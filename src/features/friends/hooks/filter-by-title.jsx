import { Flex, NativeSelect } from '@mantine/core'
import { FriendTitle } from '../types/friend.types'
import { useState, useEffect } from 'react'

export const FilterByTitle = () => {
    const [title,setTitle] = useState("")

    useEffect(() => {
        console.log(title);
    }, [title]);

    return(
        <Flex
            mih={50}
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <NativeSelect
                data={FriendTitle}
                radius="xl"
                size="md"
                onChange={(event) => setTitle(event.currentTarget.value)}
            />
        </Flex>
    )
}