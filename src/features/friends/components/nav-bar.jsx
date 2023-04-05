import { Tabs } from "@mantine/core"
import { Search } from "../hooks/search"
import { FilterByTitle } from "../hooks/filter-by-title"

export const NavBar = () => {
    return(
    <Tabs defaultValue="search">
      <Tabs.List>
        <Tabs.Tab value="filter" icon>
            Filter By Title
        </Tabs.Tab>
        <Tabs.Tab value="search" icon>
            Search
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="filter" pt="xs">
        <FilterByTitle/>
      </Tabs.Panel>
      <Tabs.Panel value="search" pt="xs">
        <Search/>
      </Tabs.Panel>
    </Tabs>
    )
}