import ApolloClient, { gql } from 'apollo-boost';
import 'cross-fetch/polyfill';
import 'dotenv/config';

const GET_ORGANIZATION = gql`
  query($organization: String!) {
    organization(login: $organization) {
      name
      url
    }
  }
`;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });
  },
});

client
  .query({
    query: GET_ORGANIZATION,
    variables: { organization: 'the-road-to-learn-react' },
  })
  .then(console.log);
