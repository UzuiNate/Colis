import { useState } from "react";
import addCss from "../style/AddVoiture.module.css"
import Popup from "../shared/Popup";

interface pop{
    onClose : ()=>void,
    value: Object,
    setValue: ()=>void
}
export default function AddItineraire({
    onClose,
} : pop) {
    const initial = {
        codeIt: "",
        villDep: "",
        villArr: "",
    };

    const [infoItineraire, setInfoItineraire] = useState(initial);
    const [popupMess, setpopupMess] = useState("");


    // Change the val of inpt for each typing
    const changeVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInfoItineraire((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    
    // API CALL HERE
    const submitForm = async (e: React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            /*
             * CHANGE THE FUCKING API
             */
            console.log(infoItineraire)
            const res = await fetch("http://localhost:8000/itineraire/creation-itineraire", {
                method: 'POST',
                headers: {
                    "COntent-type" : "application/json"
                },
                body: JSON.stringify(infoItineraire)
            })

            if (res.ok) {
                setpopupMess("Itineraire ajoutée avec succes")
            }
            else{
                setpopupMess("Erreur lors de l'ajout")
            }
        } catch (error) {
            console.log(error);
        }
    }
    

    const close= ()=>{
        setpopupMess("")
        onClose()
    }
    return (
        <div className={addCss.parent}>
            {
                popupMess && 
                <Popup confirm={false} onConfirm={close} content={popupMess}/>
            }
            <form onSubmit={submitForm} className={addCss.form}>
                <p className={addCss.txt}>Ajouter une Itineraire</p>
                <div className={addCss.container}>
                    <input 
                        type="text" 
                        name="codeIt" 
                        value={infoItineraire.codeIt} 
                        onChange={changeVal} 
                        placeholder="Code itineraire"
                        className={addCss.input}
                    />
                    <input 
                        type="text" 
                        name="villDep" 
                        value={infoItineraire.villDep} 
                        onChange={changeVal} 
                        placeholder="ville de depart"
                        className={addCss.input}
                    />
                    <input 
                        type="text" 
                        name="villArr" 
                        value={infoItineraire.villArr} 
                        onChange={changeVal} 
                        placeholder="ville d'arrive"
                        className={addCss.input}
                    />
                </div>
                <input className={addCss.button} type="submit" value="Envoyer" />
                <input className={addCss.button} style={{textAlign:"center" }} onClick={onClose} type="reset" value="Annuler" />
            </form>
        </div>
    );
}