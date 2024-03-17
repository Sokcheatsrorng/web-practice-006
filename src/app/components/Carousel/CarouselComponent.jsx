'use client';

import { Carousel } from 'flowbite-react';
function CarouselComponent() {
  return (
<div className="relative h-screen">
  <Carousel>
    <div className="flex h-full items-center justify-center" style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/06/44/73/07/360_F_644730710_9TMS6TRLVTwD20Jis58GSXrzhsTze7tS.jpg")', backgroundSize: 'cover', backgroundPosition: 'center',opacity:'0.8' }}>
      <div className="text-center text-white" style={{opacity:'1'}}>
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to CSTAD</h1>
        <p className="text-lg md:text-xl mt-4">Explore our innovative courses and stay updated with the latest technology trends.</p>
        <button className="mt-8 px-6 py-3 bg-blue-700 text-white rounded-md text-lg font-semibold hover:bg-blue-600">Get Started</button>
      </div>
    </div>
    <div className="flex h-full items-center justify-center" style={{ backgroundImage: 'url("https://static.tnn.in/thumb/msid-105422860,thumbsize-125112,width-1280,height-720,resizemode-75/105422860.jpg")', backgroundSize: 'cover', backgroundPosition: 'center',opacity:'0.8'}}>
      <div className="text-center text-white" style={{opacity:'1'}}>
        <h1 className="text-4xl md:text-6xl font-bold">Learn Anywhere, Anytime</h1>
        <p className="text-lg md:text-xl mt-4">Our courses are designed to fit your schedule. Start learning today!</p>
        <button className="mt-8 px-6 py-3 bg-blue-700 text-white rounded-md text-lg font-semibold hover:bg-blue-600">Explore Courses</button>
      </div>
    </div>
    <div className="flex h-full items-center justify-center" style={{ backgroundImage: 'url("https://theglobalcollege.com/wp-content/uploads/2020/03/what-is-global-at-college.jpg")', backgroundSize: 'cover', backgroundPosition: 'center',opacity:'0.8' }}>
      <div className="text-center text-white" style={{opacity:'1'}
      }>
        <h1 className="text-4xl md:text-6xl font-bold">Join Our Community</h1>
        <p className="text-lg md:text-xl mt-4">Connect with professionals, share insights, and grow together.</p>
        <button className="mt-8 px-6 py-3 bg-blue-700 text-white rounded-md text-lg font-semibold hover:bg-blue-600">Join Now</button>
      </div>
    </div>
  </Carousel>
</div>


  );
}

export default CarouselComponent;
