import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home.js"
import ExplorePage from './pages/ExplorePage';
import './css/app.css'
import Dashboard from "./pages/Dashboard";

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

  const [posts, setPost] = useState(samplePost)

  return (
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
            </Routes>
          </main>
      </Router>
    </ApolloProvider>
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
