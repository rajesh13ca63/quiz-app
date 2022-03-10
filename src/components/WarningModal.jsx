import { createPortal } from "react-dom";
import './buttonStyle.css'

const WarningModal = ({message, isOpen, onClose,onContinue, children}) => {
    const container = document.getElementById('root-modal');
    if(!isOpen) return null;
    return  createPortal(
        <div className="warning-modal">
            <div className="message">
                <h4>{message.messageh}</h4>
                <h6>{message.messagep}</h6>
            </div>
            <button className="btn btn-danger btn-sm closebtn" onClick={onClose}>X</button>
            <div className="continue-close">
                <button className="btn btn-danger btn-sm" style={{margin:"15px"}} onClick={onClose}>Cancle</button>
                <button className="btn btn-success btn-sm" onClick={onContinue}>Continue</button>
            </div>
        </div>, container
    )
}

export default WarningModal;