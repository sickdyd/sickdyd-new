import CurrentUsers from '../components/CurrentUsers'
import Title from '../components/Title'

export default function Projects() {
  return (
    <>
      <Title title="Analytics" />
      <div className="flex">
        <CurrentUsers />
      </div>
    </>
  )
}
