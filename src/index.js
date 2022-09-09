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
  Login,
  CreatePost,
  SinglePostView
} from './components'
import {
  getPosts,
  getUserDetails
} from './api'

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  console.log(user)

  function logout() {
    window.localStorage.removeItem('token');
    setToken('');
    setUser({});
  }

  async function fetchPosts() {
    const results = await getPosts('token')
    setPosts(results.data.posts)
  }

  async function getMe() {
    const storedToken = window.localStorage.getItem('token');
    if (!token) {
      setToken(storedToken)
      return;
    }
    const results = await getUserDetails(token)
    if (results.success) {setUser(results.data)}
    else {
      console.log(results.error.message)
    }
    
  }

  useEffect(() => {
    fetchPosts()
  }, [token])
  useEffect(() => {
    getMe();
  }, [token])



  return (
    <div>
      <Navbar logout={ logout } token={ token } />
      <Routes>
        {/* new Route setup */}
        <Route path='/' element={<Home />}/>
        <Route path='/posts' element={<Posts posts={ posts } />}/>
        <Route path='/posts/:id' element={<SinglePostView posts={ posts }/>}/>
        <Route path='/profile' element={<Profile user={user}/>}/>
        <Route path='/register' element={<Register setToken={ setToken } navigate={ navigate } token={token}/>}/>
        <Route path='/login' element={<Login setToken={ setToken } navigate={ navigate } token={token}/>} />
        <Route exact path='/posts/create-post' element={<CreatePost token={ token }/>}/>
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