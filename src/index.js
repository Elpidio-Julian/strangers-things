import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import './style.css'
import {
  Navbar,
  Posts,
  Profile,
  Home,
  Register,
  Login
} from './components'
import {
  getPosts,
  getUserDetails
} from './api'

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem('token');
    setToken('');
  }

  async function fetchPosts() {
    const results = await getPosts()
    setPosts(results.data.posts)
  }

  function getMe() {
    const storedToken = window.localStorage.getItem('token');
    if (!token) {
      setToken(storedToken)
    }
    getUserDetails(token)
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  useEffect(() => {
    console.log('token is ', token)
  }, [])



  return (
    <div>
      <Navbar logout={ logout } />
      <Routes>
        {/* new Route setup */}
        <Route path='/' element={<Home />}/>
        <Route path='/posts' element={<Posts posts={ posts } />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/register' element={<Register setToken={ setToken } navigate={ navigate } token={token}/>}/>
        <Route path='/login' element={<Login setToken={ setToken } navigate={ navigate } token={token}/>} />
      </Routes>
    </div>
  )
}

const container = document.querySelector('#app');
const root = ReactDOM.createRoot(container);
root.render(
<BrowserRouter>
  <App />
</BrowserRouter>
);


/*
login
registration
posts
profile
nav-bar
addPost
 */