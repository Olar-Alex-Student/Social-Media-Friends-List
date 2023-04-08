import { Flex, TextInput } from "@mantine/core"
import { useEffect, useState } from "react"

export const Search = () => {
    const [friend, setFirend] = useState("")

    useEffect(() => {
        console.log(friend);
    }, [friend]);

    return(
        <Flex
            mih={50}
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <TextInput placeholder="Search Friend" onChange={(event) => setFirend(event.currentTarget.value)}/>
        </Flex>
    )
}