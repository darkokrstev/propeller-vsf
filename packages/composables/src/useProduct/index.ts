import {
  Context,
  useProductFactory,
  UseProductFactoryParams
} from '@vue-storefront/core';
import type { Product } from '@vue-storefront/propelvsf-api';
import type {
  UseProductSearchParams as SearchParams
} from '../types';

const params: UseProductFactoryParams<Product, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params) => {
    console.log('Mocked by Propeller: useProduct.productsSearch');

    const data = await context.$propelvsf.api.getProduct(params);

    console.log('composable params', params);
    console.log('composable data', data);
    return { 
      data
    };
  }
};

export const useProduct = useProductFactory<Product, SearchParams>(params);
