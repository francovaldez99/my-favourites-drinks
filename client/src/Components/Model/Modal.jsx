import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function Modal({ children, isOpen, setIsOpen }) {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Bloquea el scroll cuando el modal está abierto
      document.body.addEventListener('scroll', handleScroll, { passive: false });
    } else {
      document.body.style.overflow = 'auto'; // Habilita el scroll cuando el modal está cerrado
      document.body.removeEventListener('scroll', handleScroll);
    }

    return () => {
      document.body.style.overflow = 'auto'; // Asegúrate de restablecer el scroll al desmontar el componente
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  if (isOpen) {
    return (
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] h-screen w-full z-[1]'>
        <div className='h-full flex justify-center items-center flex-col'>
          <button onClick={() => setIsOpen(false)} className='relative left-[200px] bottom-[20px] bg-white rounded-md p-2'>
            <AiOutlineClose />
          </button>
          {children}
        </div>
      </div>
    );
  }

  return null;
}

export default Modal;
