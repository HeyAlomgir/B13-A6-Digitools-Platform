import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-center md:text-left'>
            <div className='container mx-auto flex justify-between py-5 mt-6 flex-col md:flex-row'>
                <div>
                    <h2 className='text-4xl text-white py-3'>DipTools</h2>
                   <p className='text-[#777777]  text-xl'> Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br />with our suite of powerful tools.</p>
                </div>


              <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8'>
                  <div  className='space-y-5'>
                    <h4 className='text-white text-2xl py-3'>Product</h4>
                    <p className='text-[#777777]  text-xl'>Features</p>
                    <p className='text-[#777777]  text-xl'>Pricing</p>
                    <p className='text-[#777777]  text-xl'>Templates</p>
                    <p className='text-[#777777]  text-xl'>Integrations</p>
                </div>


                <div  className='space-y-5'>
                    <h4 className='text-white text-2xl py-3'>Company</h4>
                    <p className='text-[#777777]  text-xl'>About</p>
                    <p className='text-[#777777]  text-xl'>Blog</p>
                    <p className='text-[#777777]  text-xl'>Careers</p>
                    <p className='text-[#777777]  text-xl'>Press</p>
                </div>


                <div  className='space-y-5'>
                    <h4 className='text-white text-2xl py-3'>Resources</h4>
                    <p className='text-[#777777]  text-xl'>Documentation</p>
                    <p className='text-[#777777]  text-xl'>Help Center</p>
                    <p className='text-[#777777]  text-xl'>Community</p>
                    <p className='text-[#777777]  text-xl'>Contact</p>
                </div>
              </div>


                <div className=''>
                    <h4 className='text-white text-2xl py-3'>Social Links</h4>
                   <button className="btn btn-outline btn-success "> <a href="www.instagram.com"><FaInstagramSquare></FaInstagramSquare></a></button>
                   

                    <button className="btn btn-outline btn-success"><a href=""><FaTwitter></FaTwitter> </a></button>


                    <button className="btn btn-outline btn-success"><a href=""> <FaLinkedin></FaLinkedin> </a></button>
                   <p className='text-white'> </p>
                </div>


            </div>

             <div className="divider border-t border-white"></div>

             <div className='container mx-auto text-[#777777] flex justify-between'>
               
                    <p>&copy; 2026 Digitools, All rights reserved.</p>
            
                <div className=' flex justify-between'>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                     <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Footer;