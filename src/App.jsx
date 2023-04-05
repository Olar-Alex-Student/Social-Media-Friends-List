import { StrictMode } from 'react'
import './App.css'
import { FriendGrid } from './features/friends/components/friend-grid'
import { NavBar } from './features/friends/components/nav-bar'

function App() {

  return (
    <StrictMode>
      <NavBar/>
      <FriendGrid/>
    </StrictMode>
  )
}

export default App
