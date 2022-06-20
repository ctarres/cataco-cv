import Link from 'next/link';
import { useRouter } from 'next/router'

function Navbar() {
  const defaultClass = 'px-4 pb-2 hover:text-blue-500';
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <nav className='text-xl basis-1/3'>
        <Link href="/">

          <a className={`${currentRoute === "/" ? "text-blue-500" : "non-active"} ${defaultClass}`}>Home</a>
        </Link>
        <Link href="/about"><a className={`${currentRoute === "/about" ? "text-blue-500" : "non-active"} ${defaultClass}`}>About me</a></Link>
        <Link href="/blog"><a className={`${currentRoute === "/blog" ? "text-blue-500" : "non-active"} ${defaultClass}`}>Blog</a></Link>
      </nav>
    </>
  )
}

export default Navbar