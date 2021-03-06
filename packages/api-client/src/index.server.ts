import fetch from 'cross-fetch';
import { apiClientFactory } from '@vue-storefront/core';
import type { Setttings, Endpoints } from './types';
import * as api from './api';

import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { setContext } from "apollo-link-context";

function onCreate(settings: Setttings) {
  const httpLink = new HttpLink({
    uri: "https://api.helice.cloud/dev/graphql",
    fetch: fetch
  });

  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so HTTP link can read them
    return {
      headers: {
        apikey: 'k9Lz8AaUvXSronxyAEudIunz2lvaeaEjUb1B25dFeLHvpqU7'
      }
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return {
    config: settings,
    client: client
  };
}

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api
});

export {
  createApiClient
};
