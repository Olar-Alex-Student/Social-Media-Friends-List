import { Flex, SegmentedControl } from '@mantine/core'
import { FriendTitle } from '../types/friend.types'
import { useState, useEffect } from 'react'

export const FilterByTitle = () => {

    const [title, setTitle] = useState("");

    const handleSearch = (event) => {
        setTitle(event.target.value);
    };

    useEffect(() => {
        console.log(title);
    },[title]);

    return(
        <Flex
            mih={50}
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <SegmentedControl
                fullWidth
                data={FriendTitle}
                color="orange"
                size="lg"
                radius="xl"
                onClick={handleSearch}
            />
        </Flex>
    )
}