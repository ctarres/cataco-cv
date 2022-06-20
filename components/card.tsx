import Image from 'next/image'

function Card({imgSrc, title, description, color}: { imgSrc: string; title: string; description: string; color: string }) {
  const defaultClass = 'flex flex-col basis-1/3 p-6 cursor-pointer rounded-lg drop-shadow-md hover:drop-shadow-lg';
  const titleClass = 'font-bold text-2xl'
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