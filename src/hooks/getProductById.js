import { client, Query } from '@tilework/opus';

const getProductById = async (categoryId) => {
	client.setEndpoint('http://localhost:4000');

	const query = new Query(
		`product(id:"${categoryId}"){
      name,
      brand,
      description,
      inStock, 
      attributes{
        name,
        items{
          displayValue,
          value,
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
