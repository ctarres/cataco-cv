import Image from 'next/image'
import carlesHola from '../public/carles-hola.svg'
import carlesPerson from '../public/carles-1.svg'

function Hero() {
  return (
    <div className='flex items-center justify-between mt-20'>
      <div className=''>
        <Image src={carlesHola} />
      </div>
      <div className=''>
        <Image src={carlesPerson} />
      </div>
    </div>
  )
}

export default Hero
