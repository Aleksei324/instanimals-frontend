import { Popup } from './Popup'

interface popupErrorProps {
  closeFunctionError: () => void,
  title: string,
  description: string,
  isError: boolean
}

export const PopupError = ({closeFunctionError, title, description, isError = true}: popupErrorProps) => {
  return (
    <Popup closeFunction={closeFunctionError}>
      <>
        <h1>{title}</h1>
        <p>{description}</p>
        <button className={isError ? 'errorPopup' : ''} onClick={closeFunctionError}>Entendido</button>
      </>
    </Popup>
  )
};
