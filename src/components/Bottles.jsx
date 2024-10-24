/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Modal from "./Modal";


const Bottles = ({handlePrice}) => {

    const [bottles, setBottles] = useState([]);


    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    const [modal, setModal] = useState('');

    const handleModal = (url) =>{
        setModal(url)
        // console.log(url);
        
        document.getElementById('my_modal_2').showModal()
    }
    // console.log(bottles);



    return (
        <div className="w-[90%] mx-auto py-14 md:py-28" id="bottle">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    bottles.map((item) => <div key={item.id} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img
                                onClick={() => handleModal(item.imageUrl)}
                                className="w-full lg:h-[250px] md:h-[225px] h-[200px] object-cover cursor-pointer"
                                src={item.imageUrl}
                                alt="Shoes" />
                            <Modal modal={modal}></Modal>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.shortDescription}</p>
                            <p>{item.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-[#796ba1] text-white border-none" onClick={()=> handlePrice(item)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Bottles;