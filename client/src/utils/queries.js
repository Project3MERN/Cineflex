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
  {
    allReviews {
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