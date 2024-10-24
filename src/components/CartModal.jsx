/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";


const CartModal = ({ total,handleRemove }) => {
    // console.log(total);

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <div className="space-y-4 mt-6">
                        {
                            total.map((item, index) => <div key={index}>
                                <div className="grid grid-cols-5  items-center">
                                    <div className="col-span-1">
                                        <img src={item.imageUrl} className="w-full rounded-xl h-[60px]" alt="" />
                                    </div>
                                    <div className="col-span-3 text-black pl-4">
                                        <h1 className="text-xs md:text-xl font-semibold">{item.name}</h1>
                                        <h1 className="text-xs md:text-xl font-medium">{item.price}$</h1>
                                    </div>
                                    <div className="col-span-1 flex justify-center">
                                        <button className="text-black  text-lg md:text-2xl" onClick={()=> handleRemove(item.id)}><MdDelete /></button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm text-black btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </div>
    );
};

export default CartModal;