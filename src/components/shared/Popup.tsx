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
        <div className='container'>
          <div className='row justify-content-center'>
            <div className="sombraG" aria-label="Close" onClick={() => setActivation(false)}/>

            <div className="componentG popupBox col-6 col-xl-4" role="dialog">
              {children}
            </div>

          </div>
        </div>
      :
        <></>
    }
    </>
  )
};
