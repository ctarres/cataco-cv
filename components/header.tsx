import Image from 'next/image'
import logo from '../public/logo-cataco.svg'
import Button from '../components/button'
import Navbar from '../components/navbar'

function Header() {
  return (
    <>
      <header className='container mx-auto px-4 py-8'>
        <div className='flex items-end'>
          <div className='basis-2/3'>
            <Image src={logo} />
          </div>

          <Navbar />

          <div className='basis-1/4 flex place-content-end'>
            <Button
              link='#contact'
              title='Contact me'
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header