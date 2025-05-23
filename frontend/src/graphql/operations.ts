import { gql } from "@apollo/client";

export const GET_ALL_ADS = gql`
  query GetAllAds {
    getAllAds {
      id
      title
      price
      picture
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    getAllCategories {
      id
      title
    }
  }
`;

export const GET_AD = gql`
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

export const DELETE_AD = gql`
  mutation DeleteAd($deleteAdId: Float!) {
    deleteAd(id: $deleteAdId)
  }
`;

export const GET_ALL_CATEGORIES_AND_TAGS = gql`
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

export const CREATE_AD = gql`
  mutation CreateAd($data: AdInput!) {
    createAd(data: $data)
  }
`;

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($data: CategoryInput!) {
    createCategory(data: $data)
  }
`;
