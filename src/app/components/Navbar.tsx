import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex flex-grow flex-col p-10">
      <ul className="flex flex-grow flex-col justify-around text-sm">
        <li>
          -&gt; <Link href="/bio">Bio</Link>
        </li>
        <li>
          -&gt; <Link href="/projects">Projects</Link>
        </li>
        <li>
          -&gt; <Link href="/features">Website features</Link>
        </li>
        <li>
          -&gt; <Link href="/analytics">Analytics</Link>
        </li>
      </ul>
    </nav>
  )
}
