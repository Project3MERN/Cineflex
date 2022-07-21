import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home.js"
import ExplorePage from './pages/ExplorePage';
import Login from "./pages/Login";
import './css/app.css'
import Dashboard from "./pages/Dashboard";
import { v4 as uuidv4 } from 'uuid'
import Post from "./components/Post";

export const PostContext = React.createContext()

const httpLink = createHttpLink({
  uri: '/graphql',
});

// adding headers to context to be able to use tokens
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

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
<<<<<<< HEAD
    <Router>
      <PostContext.Provider value={postContextValue}>
        <Header />
        <ExplorePage posts={posts} />
        <Dashboard 
          posts={posts}
          setPosts={setPosts} />
      </PostContext.Provider>
    </Router>
=======
    <ApolloProvider client={client}>
      <Router>  
          <Header />
          <main>
            <Routes>
              <Route
                path = "/"
                element = {<Home />}
              />
              <Route
                path="/explore"
                element = {
                  <>
                    <ExplorePage posts={posts} />
                    <Dashboard />
                  </>
                }
              />
              <Route
                path = "/login"
                element = {<Login />}
              />
            </Routes>
          </main>
      </Router>
    </ApolloProvider>
>>>>>>> 1ac95e5a8ad64897bd1ca5c31eebdf6aa334f310
  );
}

const samplePost = [
  {
    id: 1,
    title: 'Shrek the Third',
    review: 'Shrek the Third is so good. Top 10 movie all time. Come on.',
    rating: 5,
    user: "joey"
  },
  {
    id: 2,
    title: 'Thor: Love and Thunder',
    review: 'Damn good movie. Funny as they get.',
    rating: 5,
    user: "charanvir"
  }
]

export default App;
