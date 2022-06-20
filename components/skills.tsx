import Link from 'next/link';

function Skills({skill, link}: { skill: string; link: string}) {
  const defaultClass = 'rounded p-2 bg-white text-dark-color text-center drop-shadow-md hover:drop-shadow-lg transition-shadow';

  return (
    <>
      <Link href={link}><a className={`${defaultClass}`}>{skill}</a></Link>
    </>
  )
}

export default Skills