
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Model from './Component/Model'


import Navbar from './Component/Navbar'
import Footer from './Footer'
import Cart from './Component/Cart'
import CardShow from './Component/CardShow'
import { ToastContainer } from 'react-toastify'


const modelPromise = fetch("/model.json")
.then(res => res.json())


function App() {
  const [activeCart,setActiveCart]=useState("product")

  const [carts,setCarts]=useState([]);


  return (
    <>
     <header>
      <Navbar></Navbar>
      <Banner></Banner>
     </header>


     <main>



       <div className='text-center mt-20 space-y-5'>
                    <h1 className='text-4xl'>Premium Digital Tools</h1>
            <p className='text-[#777777] '>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>


        {/* name of each tab group should be unique */}

       <div className="tabs tabs-box container mx-auto w-fit mt-9">

       <input onClick={()=>setActiveCart("product")} type="radio" name="my_tabs_1" 
       className={`tab text-3xl ${activeCart === "product" ? "bg-[#4F39f6]":""}`} aria-label="Products" defaultChecked/>

       <input onClick={()=>setActiveCart("cart")} type="radio" name="my_tabs_1"
        className={`tab text-3xl ${activeCart === "cart" ? "bg-[#4F39f6]":""}`}  aria-label={`Cart(${carts.length})`}  />
 
</div>

     <Suspense fallback={<span className="loading loading-bars loading-xl w-5xl  bg-zinc-300"></span>}>
       {activeCart==="product" &&  <Model modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Model>}


       {activeCart==="cart" && <CardShow carts={carts} setCarts={setCarts}></CardShow> }
     </Suspense>

     </main>


     <footer>
      <Footer></Footer>
     </footer>
    <ToastContainer/>
    </>
  )
}

export default App
