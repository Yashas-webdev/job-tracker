import { useEffect } from "react";
import './ConfirmModal.css'

export default function ConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    type = 'dange'
}) {

    // Close on Escape key

    useEffect(() =>{
        const handleEscape = (e) => {
            if(e.key === 'Escape' && isOpen){
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown',handleEscape);
    },[isOpen, onClose]);
    
    useEffect(() => {
        if(isOpen){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        }
    },[isOpen])
    
    
    //Prevent body scroll when modal is open
    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    },[isOpen]);
    
    if(!isOpen) return null;
    
    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    return(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                    <button className="modal-close" onClick={onclose}>
                        ❌
                    </button>
                </div>

                <div className="modal-body">
                    <p>message</p>
                </div>

                <div className="modal-footer">
                    <button className="modal-button modal-cancel" onClick={onclose}>
                        {cancelText}
                    </button>
                    <button className={`modal-button modal-confirm ${type}`} onClick={handleConfirm}>{confirmText}</button>
                </div>
            </div>
        </div>
    );
}