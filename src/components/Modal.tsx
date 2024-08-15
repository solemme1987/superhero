import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux-toolkit/store"
import { useEffect } from "react"
import { closeModal } from "../redux-toolkit/alerts/alertSlice"


export const Modal = () => {

  const { isOpen, title, message } = useSelector((state: RootState) => state.alert)
  const dispatch = useDispatch();

  const onCloseDialog = (): void => {
    dispatch(closeModal())
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('u-overflow')
    } else {
      document.body.classList.remove('u-overflow')
    }
    return () => {
      document.body.classList.remove('u-overflow')
    }
  }, [isOpen])


  return (
    <>
      <div
        className='c-modal'
        id="alert-dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        aria-modal="true"
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        <div className="c-modal__content u-bg-white">
          <button
            className="c-modal__btn"
            onClick={onCloseDialog}
          >
            <img src="../../assets/icons/closeModal.svg" alt="" />
          </button>
          <h2 className="c-heading cheading--l2">{title}</h2>
          <p className="c-type c-type--large">
            {message}
          </p>
        </div>
      </div>


    </>
  )
}
