import '../../styles/shared/Popup.css';

interface popupProps {
  activation: boolean,
  setActivation: React.Dispatch<React.SetStateAction<boolean>>,
  children: JSX.Element
}

export const Popup = ({activation, setActivation, children}: popupProps) => {
  return (
    <>
    { 
      activation ? 
      <>
        <div className="sombraG" onClick={() => setActivation(false)}/>
        <div className="componentG popupShared">
          {children}
        </div>
      </>
      :
      <div/>
    }
    </>
  )
};
