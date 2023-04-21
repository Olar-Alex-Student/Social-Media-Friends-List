import { StrictMode } from 'react'
import './App.css'
import { NavBar } from './features/friends/components/nav-bar'
import { FriendList } from './features/friends/components/friend-list'

function App() {

  return (
    <StrictMode>
      <NavBar/>
      <FriendList/>
    </StrictMode>
  )
}

export default App
