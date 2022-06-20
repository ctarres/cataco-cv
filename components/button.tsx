import Link from 'next/link';

function Button({link, title}: {link: string; title: string}) {
  return (
    <>
      <Link href={link}><a className='bg-blue-500 border-blue-500 hover:border-blue-700 hover:bg-blue-700 shadow-lg hover:shadow-indigo-500/40 text-white px-4 py-2 border rounded-lg hover:transition-all transition-all'>{title}</a></Link>
    </>
  )
}

export default Button