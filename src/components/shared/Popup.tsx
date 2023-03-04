import '../../styles/shared/Popup.css';

interface popupProps {
  closeFunction: () => void,
  children: JSX.Element
}

export const Popup = ({closeFunction, children}: popupProps) => {
  return (
    <>
      <div className="sombraG" onClick={closeFunction}/>
      <div className="componentG popupShared">
        {children}
      </div>
    </>
  )
};
