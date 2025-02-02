import { gql } from "@apollo/client"

export const FAVORITE_QUERY = gql`
  query {
    favorites {
      _id
      sheet {
        _id
        courseTitle
        year
        programme
        sheetFile
        price
        user {
          username
          fullname
        }
        createdAt
      }
      user {
        _id
        username
        fullname
      }
    }
  }
`

export const FAVORITE_BY_USERID_QUERY = gql`
  query Favorites($userId: MongoID!) {
    favorites(filter: { userId: $userId }) {
      _id
      sheet {
        _id
        courseTitle
        year
        programme
        sheetFile
        price
        user {
          username
          fullname
        }
        createdAt
      }
      user {
        _id
        username
        fullname
      }
    }
  }
`
