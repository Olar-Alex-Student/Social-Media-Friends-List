import { Flex, SegmentedControl } from '@mantine/core'
import { FriendTitle } from '../types/friend.types'
import { useState } from 'react'

export const FilterByTitle = ({setTitle}) => {
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
                onClick={(event) => setTitle(event.currentTarget.value)}
            />
        </Flex>
    )
}