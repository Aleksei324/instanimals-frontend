import { Popup } from './Popup'
import '../../styles/shared/PopupError.css'

interface popupErrorProps {
  activation: boolean,
  setActivation: React.Dispatch<React.SetStateAction<boolean>>,
  description: string,
  isError: boolean
}

export const PopupError = ({activation, setActivation, description, isError = true}: popupErrorProps) => {
  return (
    <Popup activation={activation} setActivation={setActivation}>
      <div className='container popupError'>
        <div className='row'>
          <div className="col-12">
            <h2>{isError ? 'Proceso fallido' : 'Proceso exitoso'}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="row">
          <button className={`col-12 buttonPopupError yellowButtonG ${isError ? 'errorPopup' : ''}`}
            onClick={() => setActivation(false)}> Entendido </button>
        </div>
      </div>
    </Popup>
  )
}
