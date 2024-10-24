/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const CartModal = ({ total }) => {
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
                                <div className="grid grid-cols-5 gap-5 items-center">
                                    <div className="col-span-1">
                                    <img src={item.imageUrl} className="w-full rounded-xl h-20" alt="" />
                                    </div>
                                    <div className="col-span-4 text-black">
                                        <h1 className="text-xl font-semibold">{item.name}</h1>
                                        <h1 className="text-xl font-medium">{item.price}$</h1>
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