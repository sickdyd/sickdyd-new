import Image from 'next/image'
import Navbar from './components/Navbar'
import Title from './components/Title'
import developerPic from './media/images/developer.png'

export default function Home() {
  return (
    <>
      <Title title="Reale Roberto" />
      <h2 className="mb-16">Full stack developer</h2>
      <div className="flex">
        <Image src={developerPic} width={400} alt="Picture of the author" />
        <Navbar />
      </div>
    </>
  )
}
