import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
     <div>
      <h1>Student Auth System</h1>
      <Register />
      <Login />
    </div>
 
    </>
  )
}

export default App
