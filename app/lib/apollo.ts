import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

interface Project {
  __typename: string;
  id: string;
  name: string;
  description: string;
  slug: string;
  url: string;
  coverImage: { url: string };
}

interface ProjectType {
  projects: Project[];
}

interface HomePage {
  id: string;
  name: string;
  aboutMe: { html: string };
  profilePic: { url: string };
}

interface HomePageType {
  homePages: HomePage[];
}

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: "https://api-ap-south-1.hygraph.com/v2/clqomh6m1rzih01ukcpa43ppt/master",
  cache: new InMemoryCache(),
});

const getProjectsQuery = gql`
  query MyQuery {
    projects {
      id
      name
      description
      slug
      url
      coverImage {
        url
      }
    }
  }
`;

const getHomePageQuery = gql`
  query MyQuery {
    homePages {
      id
      name
      aboutMe {
        html
      }
      profilePic {
        url
      }
    }
  }
`;

export async function getProjects() {
  const { data }: { data: ProjectType } = await client.query({
    query: getProjectsQuery,
  });
  return data;
}

export async function getHomePage() {
  const { data }: { data: HomePageType } = await client.query({
    query: getHomePageQuery,
  });
  return data;
}
