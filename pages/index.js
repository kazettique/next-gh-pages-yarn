import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
      <Image src="/test.png" width={300} height={300} quality={100} />
    </div>
  )
}
