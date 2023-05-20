import Title from '@/app/components/Title'
import projects from '@/app/data/projects'
import { notFound } from 'next/navigation'

export default function Project({
  params: { id },
}: {
  params: { id: number }
}) {
  if (!projects[id]) {
    notFound()
  }

  const { name, description, link } = projects[id]

  return (
    <>
      <Title title={name} />
      <div>
        <p>Id: {id}</p>
        <p>{name}</p>
        <p>{description}</p>
        <p>{link}</p>
      </div>
    </>
  )
}
