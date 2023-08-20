import Link from 'next/link'
import { Project } from '../projects/page'

export default function Project({ id, name, description, url }: Project) {
  return (
    <div className="flex flex-grow flex-col p-2">
      <Link key={id} href={url} title={name}>
        {name}
      </Link>
      {description}
    </div>
  )
}
