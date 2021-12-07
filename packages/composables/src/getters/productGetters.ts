import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import type { Product, ProductFilter } from '@vue-storefront/propelvsf-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getName(product: any): string {
  console.log('product in product getters', product);

  let name = product.name[0].value;

  console.log('product name', name);

  return name;
}

// function getProductName(product: any): string {
//   console.log("this is t")
//   console.log(product)
//   return product.name[0].value || '';
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSlug(product: Product): string {
  return 'slug';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(product: any): AgnosticPrice {
  return {
    regular: product.price.value,
    special: 0
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGallery(product: Product): AgnosticMediaGalleryItem[] {
  return [
    {
      small: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg',
      normal: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg',
      big: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg'
    }
  ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoverImage(product: any): string {
  return product.images[0].url;
  // return 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products, filters: ProductFilter): Product[] {
  console.log('getFiltered products', filters, products);
  // return products;

  console.log('ffff')
  console.log(products.products.items[0])
  return products.products.items[0];

  return [
    {
      _id: 1,
      _description: 'Darko',
      _categoriesRef: [
        '1',
        '2'
      ],
      name: 'Arif',
      sku: 'black-jacket',
      images: [
        'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg'
      ],
      price: {
        original: 12.34,
        current: 10.00
      }
    }
  ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(products: Product[] | Product, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> {
  return {};
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDescription(product: Product): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryIds(product: Product): string[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(product: any): string {
  return product.id;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: Product): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: Product): number {
  return 0;
}

export const getProductFiltered = (products) => {
  // if (!products) {
  //   return [];
  // }

  
 return products;

//  console.log('aasdd')
//  console.log(products)

//  return products.filter((product) => (product as any)._master);

  // return products;
};

export const productGetters: ProductGetters<Product, ProductFilter> = {
  getName, //: getProductName,
  getSlug,
  getPrice,
  getGallery,
  getCoverImage,
  getFiltered,
  getAttributes,
  getDescription,
  getCategoryIds,
  getId,
  getFormattedPrice,
  getTotalReviews,
  getAverageRating
};
