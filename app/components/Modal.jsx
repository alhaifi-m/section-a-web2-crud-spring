
const Modal = ({ children, showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="bg-black/50 fixed inset-0">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col p-5 bg-slate-300 w-1/2">
              <button
                className="flex flex-col items-end text=2xl mb-3 px-2"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;