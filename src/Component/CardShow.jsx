import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';



const CardShow = ({carts,setCarts}) => {
    // console.log(carts);

const toalPrice =carts.reduce((sum,item)=> sum+item.price,0);

const handleCartRemove=(cart)=>{
   const filterArray =  carts.filter(r => r.name !== cart.name)
   toast.success("Remove item for cart")
   setCarts(filterArray)

   }

   const handlePayment = ()=>{
    setCarts([])
    toast.success("Payment successfull!")
   }

    return (
        <div className='container mx-auto shadow-2xl rounded-2xl mt-19 p-10 space-y-8'>
            <h1 className='text-3xl py-3'>Your carts</h1>
            
            {
                carts.length === 0 ? <div className='py-5'>
                    <p className='text-xl text-[#777777] text-center'>Your cart is empty</p>
                    <h2 className='text-9xl'><FaShoppingCart className='mx-auto mt-5 ' ></FaShoppingCart> </h2>
                </div>:
                <div className='space-y-8'>

                {carts.map(cart  => <div className='flex justify-between bg-[#F9FAFC] p-5 items-center rounded-2xl shadow-2xl transform transition hover:scale-102'>

                
                    <div className='flex gap-3 items-center '>
                        <div className='  shadow-xl'>
                            <img src={cart.img} alt="" />
                        </div>
                        <div>
                            <h2 className='text-2xl'>{cart.name}</h2>
                            <p className='text-[#777777]'>${cart.price} </p>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>handleCartRemove(cart)} className='btn text-[#FF3980]'>romove</button>
                    </div>
                </div>)}
            </div>
            }


            <div className='flex justify-between shadow-2xl p-3 rounded-2xl'>
                <p className='text-3xl'>Total</p>
                <p className='text-3xl'>${toalPrice}</p>
            </div>
            <div>
                <button onClick={handlePayment} className='btn w-full bg-[#4F39f6] rounded-full text-white text-2xl py-8'>Proceed To Checkout</button>
            </div>
        </div>
    );
};

export default CardShow;