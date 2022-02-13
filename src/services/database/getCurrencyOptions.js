import { client, Query } from '@tilework/opus';

const { REACT_APP_GRAPHQL_URL } = process.env;

const getCurrencyOptions = async () => {
  client.setEndpoint(REACT_APP_GRAPHQL_URL);

  const query = new Query('currencies{label, symbol}', true);

  const queryResult = await client.post(query);

  return queryResult;
};

export default getCurrencyOptions;
