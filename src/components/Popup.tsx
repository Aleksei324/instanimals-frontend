import React, { ReactNode } from "react";
import '../styles/Popup.css';
interface PopupProps {
trigger: boolean;
setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
children: ReactNode;
}

const Popup: React.FC<PopupProps> = ({ trigger, setTrigger, children }) => {
return trigger ? (
<div className="popup">
<div className="popup-inner">
<button className="close-btn" onClick={() => setTrigger(false)}>
Cerrar
</button>
{children}
</div>
</div>
) : null;
};

export default Popup;