import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type Ad = {
  __typename?: 'Ad';
  category: Category;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  location: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
};

export type AdInput = {
  category: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  location: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  tags: Array<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export type Category = {
  __typename?: 'Category';
  ads: Array<Ad>;
  id: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type CategoryInput = {
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd: Scalars['ID']['output'];
  createCategory: Scalars['ID']['output'];
  createTag: Scalars['ID']['output'];
  deleteAd: Scalars['ID']['output'];
  resetAndSeed?: Maybe<Scalars['ID']['output']>;
  updateAd: Scalars['ID']['output'];
};


export type MutationCreateAdArgs = {
  data: AdInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateTagArgs = {
  data: TagInput;
};


export type MutationDeleteAdArgs = {
  id: Scalars['Float']['input'];
};


export type MutationUpdateAdArgs = {
  data: AdInput;
  id: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAd: Ad;
  getAllAds: Array<Ad>;
  getAllCategories: Array<Category>;
  getAllTags: Array<Tag>;
};


export type QueryGetAdArgs = {
  id: Scalars['Float']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  ads: Array<Ad>;
  id: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type TagInput = {
  title: Scalars['String']['input'];
};

export type GetAllAdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAdsQuery = { __typename?: 'Query', getAllAds: Array<{ __typename?: 'Ad', id: number, title: string, price: number, picture: string }> };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getAllCategories: Array<{ __typename?: 'Category', id: number, title: string }> };

export type GetAdQueryVariables = Exact<{
  getAdId: Scalars['Float']['input'];
}>;


export type GetAdQuery = { __typename?: 'Query', getAd: { __typename?: 'Ad', title: string, description: string, owner: string, price: number, picture: string, location: string, createdAt: any, category: { __typename?: 'Category', title: string, id: number }, tags: Array<{ __typename?: 'Tag', id: number, title: string }> } };

export type DeleteAdMutationVariables = Exact<{
  deleteAdId: Scalars['Float']['input'];
}>;


export type DeleteAdMutation = { __typename?: 'Mutation', deleteAd: string };

export type GetAllCategoriesAndTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesAndTagsQuery = { __typename?: 'Query', getAllCategories: Array<{ __typename?: 'Category', id: number, title: string }>, getAllTags: Array<{ __typename?: 'Tag', id: number, title: string }> };

export type CreateAdMutationVariables = Exact<{
  data: AdInput;
}>;


export type CreateAdMutation = { __typename?: 'Mutation', createAd: string };

export type CreateCategoryMutationVariables = Exact<{
  data: CategoryInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: string };


export const GetAllAdsDocument = gql`
    query GetAllAds {
  getAllAds {
    id
    title
    price
    picture
  }
}
    `;

/**
 * __useGetAllAdsQuery__
 *
 * To run a query within a React component, call `useGetAllAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAdsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAdsQuery, GetAllAdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAdsQuery, GetAllAdsQueryVariables>(GetAllAdsDocument, options);
      }
export function useGetAllAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAdsQuery, GetAllAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAdsQuery, GetAllAdsQueryVariables>(GetAllAdsDocument, options);
        }
export function useGetAllAdsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllAdsQuery, GetAllAdsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllAdsQuery, GetAllAdsQueryVariables>(GetAllAdsDocument, options);
        }
export type GetAllAdsQueryHookResult = ReturnType<typeof useGetAllAdsQuery>;
export type GetAllAdsLazyQueryHookResult = ReturnType<typeof useGetAllAdsLazyQuery>;
export type GetAllAdsSuspenseQueryHookResult = ReturnType<typeof useGetAllAdsSuspenseQuery>;
export type GetAllAdsQueryResult = Apollo.QueryResult<GetAllAdsQuery, GetAllAdsQueryVariables>;
export const GetAllCategoriesDocument = gql`
    query GetAllCategories {
  getAllCategories {
    id
    title
  }
}
    `;

/**
 * __useGetAllCategoriesQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
      }
export function useGetAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
        }
export function useGetAllCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
        }
export type GetAllCategoriesQueryHookResult = ReturnType<typeof useGetAllCategoriesQuery>;
export type GetAllCategoriesLazyQueryHookResult = ReturnType<typeof useGetAllCategoriesLazyQuery>;
export type GetAllCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetAllCategoriesSuspenseQuery>;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetAdDocument = gql`
    query GetAd($getAdId: Float!) {
  getAd(id: $getAdId) {
    title
    description
    owner
    price
    picture
    location
    createdAt
    category {
      title
      id
    }
    tags {
      id
      title
    }
  }
}
    `;

/**
 * __useGetAdQuery__
 *
 * To run a query within a React component, call `useGetAdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdQuery({
 *   variables: {
 *      getAdId: // value for 'getAdId'
 *   },
 * });
 */
export function useGetAdQuery(baseOptions: Apollo.QueryHookOptions<GetAdQuery, GetAdQueryVariables> & ({ variables: GetAdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdQuery, GetAdQueryVariables>(GetAdDocument, options);
      }
export function useGetAdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdQuery, GetAdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdQuery, GetAdQueryVariables>(GetAdDocument, options);
        }
export function useGetAdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdQuery, GetAdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdQuery, GetAdQueryVariables>(GetAdDocument, options);
        }
export type GetAdQueryHookResult = ReturnType<typeof useGetAdQuery>;
export type GetAdLazyQueryHookResult = ReturnType<typeof useGetAdLazyQuery>;
export type GetAdSuspenseQueryHookResult = ReturnType<typeof useGetAdSuspenseQuery>;
export type GetAdQueryResult = Apollo.QueryResult<GetAdQuery, GetAdQueryVariables>;
export const DeleteAdDocument = gql`
    mutation DeleteAd($deleteAdId: Float!) {
  deleteAd(id: $deleteAdId)
}
    `;
export type DeleteAdMutationFn = Apollo.MutationFunction<DeleteAdMutation, DeleteAdMutationVariables>;

/**
 * __useDeleteAdMutation__
 *
 * To run a mutation, you first call `useDeleteAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdMutation, { data, loading, error }] = useDeleteAdMutation({
 *   variables: {
 *      deleteAdId: // value for 'deleteAdId'
 *   },
 * });
 */
export function useDeleteAdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdMutation, DeleteAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdMutation, DeleteAdMutationVariables>(DeleteAdDocument, options);
      }
export type DeleteAdMutationHookResult = ReturnType<typeof useDeleteAdMutation>;
export type DeleteAdMutationResult = Apollo.MutationResult<DeleteAdMutation>;
export type DeleteAdMutationOptions = Apollo.BaseMutationOptions<DeleteAdMutation, DeleteAdMutationVariables>;
export const GetAllCategoriesAndTagsDocument = gql`
    query GetAllCategoriesAndTags {
  getAllCategories {
    id
    title
  }
  getAllTags {
    id
    title
  }
}
    `;

/**
 * __useGetAllCategoriesAndTagsQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesAndTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesAndTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesAndTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoriesAndTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriesAndTagsQuery, GetAllCategoriesAndTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriesAndTagsQuery, GetAllCategoriesAndTagsQueryVariables>(GetAllCategoriesAndTagsDocument, options);
      }
export function useGetAllCategoriesAndTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriesAndTagsQuery, GetAllCategoriesAndTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriesAndTagsQuery, GetAllCategoriesAndTagsQueryVariables>(GetAllCategoriesAndTagsDocument, options);
        }
export function useGetAllCategoriesAndTagsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllCategoriesAndTagsQuery, GetAllCategoriesAndTagsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCategoriesAndTagsQuery, GetAllCategoriesAndTagsQueryVariables>(GetAllCategoriesAndTagsDocument, options);
        }
export type GetAllCategoriesAndTagsQueryHookResult = ReturnType<typeof useGetAllCategoriesAndTagsQuery>;
export type GetAllCategoriesAndTagsLazyQueryHookResult = ReturnType<typeof useGetAllCategoriesAndTagsLazyQuery>;
export type GetAllCategoriesAndTagsSuspenseQueryHookResult = ReturnType<typeof useGetAllCategoriesAndTagsSuspenseQuery>;
export type GetAllCategoriesAndTagsQueryResult = Apollo.QueryResult<GetAllCategoriesAndTagsQuery, GetAllCategoriesAndTagsQueryVariables>;
export const CreateAdDocument = gql`
    mutation CreateAd($data: AdInput!) {
  createAd(data: $data)
}
    `;
export type CreateAdMutationFn = Apollo.MutationFunction<CreateAdMutation, CreateAdMutationVariables>;

/**
 * __useCreateAdMutation__
 *
 * To run a mutation, you first call `useCreateAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdMutation, { data, loading, error }] = useCreateAdMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAdMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdMutation, CreateAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAdMutation, CreateAdMutationVariables>(CreateAdDocument, options);
      }
export type CreateAdMutationHookResult = ReturnType<typeof useCreateAdMutation>;
export type CreateAdMutationResult = Apollo.MutationResult<CreateAdMutation>;
export type CreateAdMutationOptions = Apollo.BaseMutationOptions<CreateAdMutation, CreateAdMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($data: CategoryInput!) {
  createCategory(data: $data)
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;