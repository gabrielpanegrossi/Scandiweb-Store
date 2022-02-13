import { client, Query } from '@tilework/opus';

const { REACT_APP_GRAPHQL_URL } = process.env;

const getMenuOptions = async () => {
  client.setEndpoint(REACT_APP_GRAPHQL_URL);

  const query = new Query('categories{name}', true);

  const queryResult = await client.post(query);

  return queryResult;
};

export default getMenuOptions;
