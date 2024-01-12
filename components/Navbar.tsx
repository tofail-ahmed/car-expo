import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items center sm:px-16 px-6 py-6'>
            <Link href='/'>
                  <Image src='/logo.svg' alt="Car expo logo" width={120} height={20} className="object-contain" />
            </Link>
      </nav>
   </header>
  )
}

export default Navbar