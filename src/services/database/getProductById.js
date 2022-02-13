import { client, Query } from '@tilework/opus';

const { REACT_APP_GRAPHQL_URL } = process.env;

const getProductById = async (categoryId) => {
  client.setEndpoint(REACT_APP_GRAPHQL_URL);

  const query = new Query(
    `product(id:"${categoryId}"){
      name,
      brand,
      description,
      inStock, 
      attributes{
        id,
        name,
        id,
        items{
          displayValue,
          value,
          id,
        }
      }, 
      gallery, 
      prices{
        currency{label}, 
        amount
      }
    }`,
    true
  );

  const queryResult = await client.post(query);

  return queryResult;
};

export default getProductById;
