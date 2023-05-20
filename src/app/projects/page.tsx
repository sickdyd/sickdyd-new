import Link from 'next/link'
import Title from '../components/Title'
import projects from '../data/projects'

export default function Projects() {
  return (
    <>
      <Title title="Projects" />
      <div className="flex">
        {projects.map(({ id, name }) => (
          <Link key={id} href={`projects/${id}`} title={name}>
            {name}
          </Link>
        ))}
      </div>
    </>
  )
}
