import '../../styles/shared/Popup.css';

interface popupProps {
  activation: boolean,
  setActivation: React.Dispatch<React.SetStateAction<boolean>>,
  children: JSX.Element
}

export const Popup = ({activation, setActivation, children}: popupProps) => {
  return (
    <div className='popupShared'>
    { 
      activation ?
      <>
        <div className="sombraG" onClick={() => setActivation(false)}/>
        <div className="componentG popupBoxShared">
          {children}
        </div>
      </>
      :
      <></>
    }
    </div>
  )
};
