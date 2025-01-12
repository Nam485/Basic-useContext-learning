import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import { UserContextProvider } from './context/userContext';

function App() {
  const [user , setUser] = useState(null);
  return (
    <UserContextProvider value={{user , setUser}}>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
