import React from 'react'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
          {/* <Title */}
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum cupiditate perspiciatis dignissimos et excepturi odit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius quam quidem neque reiciendis ipsa enim qui obcaecati accusamus numquam minima labore hic, voluptates aliquid totam. Consequatur corrupti inventore eos.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptate enim, laborum itaque quod sit?</p>
          </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita hic obcaecati, voluptatum illo quas alias mollitia repudiandae dicta quam tenetur non in modi provident.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita hic obcaecati, voluptatum illo quas alias mollitia repudiandae dicta quam tenetur non in modi provident.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita hic obcaecati, voluptatum illo quas alias mollitia repudiandae dicta quam tenetur non in modi provident.</p>
        </div>
      </div>
      <NewsLetterBox />

    </div>
  )
}

export default About