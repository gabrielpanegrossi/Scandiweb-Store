import { client, Query } from '@tilework/opus';

const { REACT_APP_GRAPHQL_URL } = process.env;

const getProductsByCategory = async (categoryName) => {
  client.setEndpoint(REACT_APP_GRAPHQL_URL);

  const query = new Query(
    `category(input:{title:"${categoryName}"}){
			name, 
			products{
				id, 
				name, 
				inStock, 
				attributes{name}, 
				gallery, 
				prices{
					currency{label}, 
					amount
				}
			}
		}`,
    true
  );

  const queryResult = await client.post(query);

  return queryResult;
};

export default getProductsByCategory;
