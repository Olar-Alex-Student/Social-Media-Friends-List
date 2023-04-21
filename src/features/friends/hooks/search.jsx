import { Flex, TextInput } from "@mantine/core"

export const Search = ({setName}) => {
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
                onChange={(event) => setName(event.currentTarget.value)}
            />
        </Flex>
    )
}