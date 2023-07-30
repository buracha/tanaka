import { PageIntroduction } from "../components/pages/who-we-are/page-introduction";
import { ProjectsList } from "../components/pages/who-we-are/projects-list";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";
import { ProjectsPageData } from "../types/page-info";

export const metadata = {
  title: 'Projetos',
}


const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}


export default async function Projects() {
  const { projects } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  )
}