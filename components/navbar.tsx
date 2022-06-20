import Link from 'next/link';
import { useRouter } from 'next/router'

function Navbar() {
  const defaultClass = 'px-4 pb-2 hover:border-b-4 border-char-color';
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <nav className='text-2xl basis-1/3'>
        <Link href="/">

          <a className={`${currentRoute === "/" ? "border-b-4" : "non-active"} ${defaultClass}`}>Home</a>
        </Link>
        <Link href="/about"><a className={`${currentRoute === "/about" ? "border-b-4" : "non-active"} ${defaultClass}`}>About me</a></Link>
        <Link href="/blog"><a className={`${currentRoute === "/blog" ? "border-b-4" : "non-active"} ${defaultClass}`}>Blog</a></Link>
      </nav>
    </>
  )
}

export default Navbar