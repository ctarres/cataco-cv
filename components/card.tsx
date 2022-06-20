import Image from 'next/image'

function Card({imgSrc, title, description, color}: { imgSrc: string; title: string; description: string; color: string }) {
  const defaultClass = 'flex flex-col basis-1/3 p-6 border-2 border-black cursor-pointer shadow-standard hover:shadow-standard-hover transition-shadow';
  const titleClass = 'font-bold uppercase font-russo text-2xl'
  const descriptionClass = 'text-lg'

  return (
    <div className={`${defaultClass} ${color}`}>
      <div className=''>
        <Image src={imgSrc} />
      </div>
      <h2 className={titleClass}>{title}</h2>
      <p className={descriptionClass}>{description}</p>
    </div>
  )
}

export default Card