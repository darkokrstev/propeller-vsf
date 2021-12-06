
import gql from "graphql-tag";

export default async function getProduct(context, params) {
    // params.id = 38875;

    let query;

    params.id = 38848;


    if (params.id) {
        query = gql`{
            products(id: ${params.id}) {
             
              items {
                id
                classId
                categoryId
                sku
                name {
                  value
                  language
                }
                ... on Product {
                  price {
                    value
                  }
                  costPrice
                  storePrice
                }
                ... on Product {
                  images(siteId: 1) {
                    url(width: 400, height: 400, method: crop)
                  }
                }
               
              }
            }
          }
      `;
    }

    const { data } = await context.client.query({
        query: query
    });

    console.log('data fetched', data);

    return data;
}

// export default getProduct;