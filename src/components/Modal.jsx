

// eslint-disable-next-line react/prop-types
const Modal = ({modal}) => {
    return (
        <div>
            {/* Modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button> */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <div className="mx-auto">
                     <img src={modal} alt="" className="w-full rounded-xl" />
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Modal;