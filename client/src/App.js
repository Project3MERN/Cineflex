import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Post from './components/Post';

// pending apollo client

function App() {

  const [post, setPost] = useState(samplePost)

  return (
    <Router>  
      <div>
        <Header />
        <Post post={post}/>
      </div>
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
    ratings: 5
  }
]

export default App;
