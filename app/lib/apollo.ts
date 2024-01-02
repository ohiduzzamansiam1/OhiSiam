import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function generateRandomString() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

interface Project {
  __typename: string;
  id: string;
  name: string;
  description: { html: string };
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

interface SingleProjectType {
  project: {
    name: string;
    description: { html: string };
    url: string;
    coverImage: {
      url: string;
    };
  };
}

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: "https://api-ap-south-1.hygraph.com/v2/clqomh6m1rzih01ukcpa43ppt/master",
  cache: new InMemoryCache(),
});

const getHomePageQuery = gql`
  query ${generateRandomString()} {
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

const getProjectsQuery = gql`
  query ${generateRandomString()} {
    projects(orderBy: createdAt_DESC) {
      id
      name
      description {
        html
      }
      slug
      url
      coverImage {
        url
      }
    }
  }
`;

export async function getProjects() {
  const { data }: { data: ProjectType } = await client.query({
    query: getProjectsQuery,
    fetchPolicy: "no-cache",
  });
  return data;
}

export async function getHomePage() {
  const { data }: { data: HomePageType } = await client.query({
    query: getHomePageQuery,
    fetchPolicy: "no-cache",
  });
  return data;
}

export async function getProjectBySlug(slug: string) {
  console.log(slug);
  const { data }: { data: SingleProjectType } = await client.query({
    query: gql`
      query ${generateRandomString()} {
        project(where: { slug: "${slug}" }) {
          name
          description {
            html
          }
          url
          coverImage {
            url
          }
        }
      }
    `,
    fetchPolicy: "no-cache",
  });
  return data;
}
