import Project from '../components/Project'
import Title from '../components/Title'

const ONE_WEEK_IN_SECONDS = 604800

export interface Project {
  id: number
  name: string
  description: string
  url: string
}

async function getProjects(): Promise<Project[]> {
  const response = await fetch('http://localhost:5000/projects', {
    next: { revalidate: ONE_WEEK_IN_SECONDS },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return await response.json()
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <>
      <Title title="Projects" />
      <div className="flex flex-col">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </>
  )
}
