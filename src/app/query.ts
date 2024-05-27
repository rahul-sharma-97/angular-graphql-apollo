import {gql} from 'apollo-angular'

const GET_BOOKS = gql`
  query {
    {
        book {
            title
            author {
              name
            }
        }
        books{
            title
            author {
              name
            }
        }
      }
  }
`