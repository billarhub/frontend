import Image from 'next/image';
import React from 'react'

const Logo = ({white}) => {
  return (
    <div> <Image src={white ? '/logo-white.svg' : '/logo-black.svg'} alt="Billarhub Logo" width={250} height={40}/></div>
  )
}

export default Logo;