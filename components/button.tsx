import Link from 'next/link';

function Button({link, title}: {link: string; title: string}) {
  return (
    <>
      <Link href={link}><a className='bg-blue-color px-4 py-2 border-2 border-black font-bold uppercase shadow-standard hover:shadow-standard-hover transition-shadow font-russo'>{title}</a></Link>
    </>
  )
}

export default Button