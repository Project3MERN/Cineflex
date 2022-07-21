import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import ExplorePage from './pages/ExplorePage';
import './css/app.css'
import Dashboard from "./pages/Dashboard";
import { v4 as uuidv4 } from 'uuid'
import Post from "./components/Post";

export const PostContext = React.createContext()

// pending apollo client

function App() {

  const [posts, setPosts] = useState(samplePost)

  const postContextValue = {
    setPosts,
    posts
  }

  // function handlePostAdd(e) {
  //   const newPost = {
  //     id: uuidv4(),
  //     title: '',
  //     review: '',
  //     rating: '',
  //   }

  //   setPost([...posts, newPost])
  // }

  return (
    <Router>
      <PostContext.Provider value={postContextValue}>
        <Header />
        <ExplorePage posts={posts} />
        <Dashboard 
          posts={posts}
          setPosts={setPosts} />
      </PostContext.Provider>
    </Router>
  );
}

const samplePost = [
  {
    id: 1,
    title: 'Shrek the Third',
    review: 'Shrek the Third is so good. Top 10 movie all time. Come on.',
    rating: 5
  },
  {
    id: 2,
    title: 'Thor: Love and Thunder',
    review: 'Damn good movie. Funny as they get.',
    rating: 5
  }
]

export default App;
