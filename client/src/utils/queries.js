import { gql } from '@apollo/client';

export const GET_ALLUSERS = gql`
  {
    allusers {
      _id
      username
      email
      reviews{
        _id
        movie{
          _id
          name
          reviews
          averageScore
        }
        reviewText
        createdAt
        score
        comments{
          _id
          commentBody
          createdAt
          username
        }
      }
      favorites{
         _id
          name
          reviews
          averageScore
      }
      watchedList{
          _id
          name
          reviews
          averageScore
      }
      wishList{
          _id
          name
          reviews
          averageScore
      }
    }
  }
`;

export const GET_ALLMOVIES = gql`
  {
    allMovies {
      _id
      name
      reviews
      averageScore
    }
  }
`;

export const GET_ALLREVIEWS = gql`
  query reviews {
    allReviews {
        _id
        movie{
          _id
          name
        }
        username
        reviewText
        createdAt
        score
        comments{
          _id
          commentBody
          createdAt
          username
        }
    }
  }
`;

export const SINGLE_MOVIE = gql`
  query movie($name: String!) {
    movie(name: $name) {
      _id
      name
      reviews {
        movie
        reviewText
        score
        username
      }
      averageScore
    }
  }
`

export const SINGLE_REVIEW = gql`
  query review($id: ID!) {
    review(_id: $id) {
      _id
      movie{
        name
        averageScore
      }
      reviewText
      createdAt
      score
      comments{
        commentBody
        username
        createdAt
      }
    }
  }
`

export const SINGLE_USER = gql`
  query user($username: String!){
    user(username: $username){
      _id
      username
      email
      reviews: {
        _id
        movie{
          name
        }
        reviewText
        score
        createdAt
      }
    }
  }
`

export const LOGGED_IN_USER = gql`
  {
    loggedInUser{
      _id
      username
      email
      reviews{
        _id
        movie{
          name
        }
        reviewText
        createdAt
        Score
      }
    }
  }
`