import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home.js"
import ExplorePage from './pages/ExplorePage';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import './css/app.css'
import Dashboard from "./pages/Dashboard";
import Create from './pages/Create'

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

  const user = true

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
                    <ExplorePage />
                    <Dashboard />
                  </>
                }
              />
              <Route
                path = "/login"
                element = {<Login />}
              />
              <Route
                path = "/signup"
                element = {<Signup />}
              />
              {user && <Route
                path = "/createPost"
                element = {<Create />}
              />}
            </Routes>
          </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;
