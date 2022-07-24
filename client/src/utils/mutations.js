import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($movie: String!, $reviewText: String!, $score: String!) {
    addReview(movie: $movie, reviewText: $reviewText, $score: $score) {
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
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($reviewId: ID!, $commentBody: String!) {
    addComment(reviewId: $reviewId, commentBody: $commentBody) {
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
`;

export const REMOVE_REVIEW = gql`
  mutation removeReview($reviewId: ID!) {
    removeReview(reviewId: $reviewId) {
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

export const REMOVE_COMMENT = gql`
  mutation removeComment($commentId: ID!, $reviewId: ID!) {
    removeComment(commentId: $commentId, reviewId: $reviewId) {
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
`;
