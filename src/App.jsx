import Header from './components/Headers/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Bottles from './components/Bottles'
import { useState } from 'react'
function App() {
  // const [count, setCount] = useState(0)



  const [total, setTotal] = useState([])

  const handlePrice = (item) => {
    setTotal([...total, item]);

  }

  const subTotal = total.reduce((accumulator, item) => accumulator + item.price, 0);
  const quantity = total.length
  // console.log(parseInt(subTotal));


  const handleCartModal =(id) =>{
    document.getElementById('my_modal_3').showModal()
  }
  

  // console.log(total);


  return (
    <>


      <Header 
       subTotal={subTotal}
       quantity={quantity}
       handleCartModal={handleCartModal}
       total={total}
       ></Header>
      <Banner></Banner>
      <Bottles handlePrice={handlePrice}></Bottles>
      <Footer></Footer>

    </>
  )
}

export default App
