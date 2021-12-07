
import gql from "graphql-tag";

const getProduct = async (context, params) => {
    // params.id = 38875;

    // params.id = 38848;

    console.log('PROPELLER getProduct params', params);

    let query;

    if (params.id) {
      query = gql`{
        product(id: 38848) {
          name {
            value
            language
          }
          description {
            value
            language
          }
          shortDescription {
            value
            language
          }
          sku
          categoryId
          path
          shortName
          eanCode
          manufacturer
          supplier
          supplierCode
          tag
          taxCode
          status
          originalPrice
          costPrice
          suggestedPrice
          storePrice
          minimumQuantity
          unit
          purchaseUnit
          purchaseMinimumQuantity
          econommicOrderQuantity
          ... on Product {
            name {
              value
              language
            }
            description {
              value
              language
            }
            shortDescription {
              value
              language
            }
            sku
            categoryId
            path
            shortName
            manufacturerCode: eanCode
            manufacturer
            supplier
            supplierCode
            originalPrice
            costPrice
            suggestedPrice
            storePrice
            creditPoints
            minimumQuantity
            unit
            purchaseUnit
            id
            language
            class
            classId
            images(siteId: 1) {
              id
              imageId
              name
              url(fillColor: "white", method: fill, height: 800, width: 800)
              type
              order
            }
            price {
              value
              quantity
              discount {
                discountId
                formula
                type
                quantity
                value
                validFrom
                validTo
                hops
              }
              taxCode
              type
            }
            attributes {
              id
              searchId
              description {
                value
                language
              }
              type
              isSearchable
              isPublic
              isHidden
              enumValue
              intValue
              decimalValue
              dateValue
              textValue {
                values
                language
              }
            }
          }
        }
      }`;
    }
    else {
      query = gql`
        {
          products(categoryId: 227171) {
            items {
              name {
                value
                language
              }
              description {
                value
                language
              }
              shortDescription {
                value
                language
              }
              sku
              categoryId
              path
              ... on Product {
                id
                language
                class
                classId
                name {
                  value
                  language
                }
                description {
                  value
                  language
                }
                shortDescription {
                  value
                  language
                }
                sku
                categoryId
                path
                shortName
                manufacturerCode
                eanCode
                manufacturer
                supplier
                supplierCode
                tag
                taxCode
                status
                package
                packageUnit
                packageUnitQuantity
                originalPrice
                costPrice
                suggestedPrice
                storePrice
                creditPoints
                minimumQuantity
                unit
                purchaseUnit
                purchaseMinimumQuantity
                econommicOrderQuantity
                offers {
                  id
                  price
                  validFrom
                  validTo
                  formula
                }
                category {
                  id
                  categoryId
                  name {
                    value
                    language
                  }
                  description {
                    value
                    language
                  }
                  shortDescription {
                    value
                    language
                  }
                  slug {
                    value
                    language
                  }
                  defaultLanguage
                }
                images(siteId: 1) {
                  id
                  imageId
                  name
                  url(fillColor: "white", method: fill, height: 800, width: 800)
                  type
                  order
                }
                price {
                  value
                  quantity
                  discount {
                    discountId
                    formula
                    type
                    quantity
                    value
                    validFrom
                    validTo
                    hops
                  }
                  taxCode
                  type
                }
                bulkPrices {
                  price
                  from
                  to
                }
                attributes {
                  id
                  searchId
                  description {
                    value
                    language
                  }
                  type
                  isSearchable
                  isPublic
                  isHidden
                  enumValue
                  intValue
                  decimalValue
                  dateValue
                  textValue {
                    values
                    language
                  }
                }
              }
            }
          }
    
        }
      `;
    }
    

    try {
      // TODO: Hacky, create interface
      const data:any = await context.client.query({
          query: query
      });
  
      console.log('PROPELLER data fetched', data);

      return data;
    } catch (error) {
      console.log('PROPELLER Request failed:', error.request); 
      console.log('PROPELLER', error.message); 
    }
}

export default getProduct;