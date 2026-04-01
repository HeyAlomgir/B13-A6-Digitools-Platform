import React from 'react';
import BannerImg from "../assets/banner.png"
import PlayImg from "../assets/Play.png"
import { FaCircleDot } from 'react-icons/fa6';

const Banner = () => {
    return (
        <>
            <div className='container mx-auto flex flex-col-reverse md:flex-row  gap-9 items-center justify'>

                <div className='flex-1 space-y-5  py-5 m-4 '>
                    <p className='bg-[#E6E6FA] flex items-center gap-3 text-blue-500 w-fit p-2 rounded-full '> <FaCircleDot></FaCircleDot> New: AI-Powered Tools Available</p>
                    
                    <h2 className=' text-2xl md:text-3xl lg:text-5xl'>Supercharge Your </h2>
                    <h2 className=' text-2xl md:text-3xl lg:text-5xl text-[#4F39F6] '>Digital Workflow </h2>
                    

                    <p className='text-[#777777] '>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. Explore Products</p>


                   <div className='flex gap-4 mt-5'>
                     <button className='btn btn-primary'>Explore Products</button>
                    <button className='flex btn btn-outline btn-primary'> <img src={PlayImg} alt="" /> Watch Demo</button>
                   </div>


                </div>

                <div className='flex-1 py-8 m-4'>
                    <img src={BannerImg} alt="" />
                </div>
            </div>


            <div className='bg-[#4F39F6]'>


            <div className='container mx-auto grid grid-cols-3 text-center '>


                <div className='py-10'>
                    <h1 className='text-3xl text-white'>50K+</h1>
                    <p className=' text-amber-50'>Active Users</p>
                    
                </div>  
                <div className='py-10'>
                    <h1  className='text-3xl text-white'>200+</h1>
                    <p className=' text-amber-50'>Premium Tools</p>
                </div>
                <div className='py-10'>
                    <h1  className='text-3xl text-white'>4.9</h1>
                    <p className=' text-amber-50'>Rating</p>
                    
                </div>


            </div>


            </div>


        </>
    );
};

export default Banner;