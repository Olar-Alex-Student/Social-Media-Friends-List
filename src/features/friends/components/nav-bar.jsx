import { Tabs, Title } from "@mantine/core"
import { Search } from "../hooks/search"
import { FilterByTitle } from "../hooks/filter-by-title"

export const NavBar = () => {
    return(
    <Tabs m={10} p={20} color="orange">
      <Tabs.List grow>
        <Tabs.Tab value="search">
          <Title order={4}>Search</Title>
        </Tabs.Tab>
        <Tabs.Tab value="filter">
          <Title order={4}>Filter By Title</Title>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="search" pt="xs">
        <Search/>
      </Tabs.Panel>
      <Tabs.Panel value="filter" pt="xs">
        <FilterByTitle/>
      </Tabs.Panel>
    </Tabs>
    )
}