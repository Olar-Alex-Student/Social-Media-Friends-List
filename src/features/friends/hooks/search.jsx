import { Flex, TextInput, Button } from "@mantine/core"
import { getFriendsAPI } from "../api/friend.api"
import React, { useState, useEffect } from 'react';

export const Search = () => {

    const friends = getFriendsAPI();

    const [name, setName] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    const handleSearch = () => {
        const result = friends.find(item => item.name === setName);
        setSearchResult(result);
    }

    useEffect(() => {
        console.log(name);
    },[name]);

    return(
        <Flex
            mih={50}
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <TextInput
                placeholder="Search"
                radius="xl"
                size="lg"
                onChange={event => setName(event.target.value)}
            />
            <Button 
                variant="gradient"
                gradient={{ from: 'orange', to: 'red' }}
                size="lg"
                radius="xl"
                onClick={handleSearch}
            >
                Search
            </Button>
        </Flex>
    )
}