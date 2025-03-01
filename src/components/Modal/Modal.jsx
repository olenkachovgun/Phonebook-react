import { useEffect, useCallback } from "react";
import s from "./Modal.module.css";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ children, title = "Edit contact", closeModal }) => {
  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleCloseClick = useCallback(() => {
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <>
          <h1>{title}</h1>
        </>
        <button onClick={handleCloseClick} className={s.closeBtnModal}>
          <IoMdCloseCircle className={s.closeIcon} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
