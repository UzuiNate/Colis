import { createPortal } from "react-dom";
import stylesCss from './Popup.module.css'

interface PopupWithCancel {
    confirm?: true; 
    content: string;
    onConfirm: () => void;
    onCancel: () => void; 
  }
  
  interface PopupWithoutCancel {
    confirm: false; 
    content: string;
    onConfirm: () => void;
    onCancel?: never; 
  }
  
  // L'union des deux cas
  type PopupProps = PopupWithCancel | PopupWithoutCancel;
  
  export default function Popup({
    confirm = true,
    content,
    onCancel,
    onConfirm
  }: PopupProps) {

    const container: React.CSSProperties = {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0000004a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        position: "fixed",
        top: 0,
        left: 0,
    }

    const parent: React.CSSProperties = {
        backgroundColor: "#ffffff",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        textAlign: "center"
    }

    const titre: React.CSSProperties = {
        marginTop: "2px",
        fontWeight: "normal"

    }

    const btn: React.CSSProperties = {
        paddingInline: "15px",
        paddingBlock: "7px",
        border: "none",
        borderRadius: "5px",
    }

    const btnConfirm: React.CSSProperties = {
        backgroundColor: "#bea57944"
    }

    const btnContainer: React.CSSProperties = {
        display: "flex",
        gap: "5px",
        justifyContent: "center",
    }

    return createPortal(
    <div style={container}>
      <div style={parent}>
        <h2 style={titre}>{content}</h2>
        <div style={btnContainer}>
          {confirm && <button style={btn} onClick={onCancel}>Annuler</button>}
          <button style={{...btn, ...btnConfirm}} className={stylesCss.btn}  onClick={onConfirm}>Confirmer</button>
        </div>
      </div>
    </div>
    , document.body);
  }