import {
  FacetsGetters,
  FacetSearchResult,
  AgnosticCategoryTree,
  AgnosticGroupedFacet,
  AgnosticPagination,
  AgnosticSort,
  AgnosticBreadcrumb,
  AgnosticFacet
} from '@vue-storefront/core';
import type { Facet, FacetSearchCriteria } from '@vue-storefront/propelvsf-api';
import { getProductFiltered } from './productGetters';
// import { useProduct } from './'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAll(params: FacetSearchResult<Facet>, criteria?: FacetSearchCriteria): AgnosticFacet[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGrouped(params: FacetSearchResult<Facet>, criteria?: FacetSearchCriteria): AgnosticGroupedFacet[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSortOptions(params: FacetSearchResult<Facet>): AgnosticSort {
  return {
    options: [],
    selected: ''
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryTree(params: FacetSearchResult<Facet>): AgnosticCategoryTree {
  return {
    label: '',
    slug: '',
    items: null,
    isCurrent: false,
    count: 0
  };
}

const getProducts = (searchData) => {
  // TODO: implement filters
  console.log('000000000000000000009999');
  console.log(searchData.data)
  return getProductFiltered(searchData.data);
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
// async function getProducts(params: FacetSearchResult<Facet>): any {
//   console.log('PROPELLER getProducts facade', params);
  
  
//   let prods = await getProductFiltered(params);

//   console.log('PROPELLER getProducts filtered in facade', prods);

//   return [
//     {
//       _id: 1,
//       _description: 'Jeroen',
//       _categoriesRef: [
//         '1',
//         '2'
//       ],
//       name: 'Jans',
//       sku: 'black-jacket',
//       images: [
//         'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg'
//       ],
//       price: {
//         original: 12.34,
//         current: 10.00
//       }
//     }
//   ];
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPagination(params: FacetSearchResult<Facet>): AgnosticPagination {
  return {
    currentPage: 1,
    totalPages: 1,
    totalItems: 1,
    itemsPerPage: 10,
    pageOptions: []
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBreadcrumbs(params: FacetSearchResult<Facet>): AgnosticBreadcrumb[] {
  return [];
}

export const facetGetters: FacetsGetters<Facet, FacetSearchCriteria> = {
  getSortOptions,
  getGrouped,
  getAll,
  getProducts,
  getCategoryTree,
  getBreadcrumbs,
  getPagination
};
