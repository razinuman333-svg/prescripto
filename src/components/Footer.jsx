import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*----- left section-----*/}
        <div>
        <img className='mb-5 w-40 ' src={assets.logo}/>
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
        </div>


          {/*----- center section-----*/}

             <div>

             <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>about us</li>
            <li>contact us</li>
            <li>privacy policy</li>
          </ul>
        </div>


          {/*----- right section-----*/}
        <div>
            <p className='text-xl font-medium mb-5'>Get in touch</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 9946170707 </li>
            <li>demy@gmail.com</li>
            </ul>
            
        </div>
      </div>
      {/*------copyright test----*/}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright and shit</p>
      </div>
       </div>

    
  )
}

export default Footer
