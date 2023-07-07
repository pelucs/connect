import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cljrr0ukh0spo01t7drv1hzuh/master",
  cache: new InMemoryCache()
})