import { Popup } from './Popup'

interface popupErrorProps {
  activation: boolean,
  setActivation: React.Dispatch<React.SetStateAction<boolean>>,
  description: string,
  isError: boolean
}

export const PopupError = ({activation, setActivation, description, isError = true}: popupErrorProps) => {
  return (
    <Popup activation={activation} setActivation={setActivation}>
      <>
        <div>
          <b>{isError ? 'Proceso fallido' : 'Proceso exitoso'}</b><br/>
          {description}
        </div>
        <button className={isError ? 'errorPopup' : 'yellowButtonG'} onClick={() => setActivation(false)}>Entendido</button>
      </>
    </Popup>
  )
};
