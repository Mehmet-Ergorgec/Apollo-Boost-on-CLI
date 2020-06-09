import ApolloClient from 'apollo-boost';
import 'cross-fetch/polyfill';
import 'dotenv/config';

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

const userCredentials = { firstname: 'Mehmet' };
const userDetails = { nationality: 'E.' };

const user = {
  ...userCredentials,
  ...userDetails,
};

console.log(user);

console.log(client);
