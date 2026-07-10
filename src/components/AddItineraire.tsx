import { useState } from "react";
import addCss from "../style/AddVoiture.module.css"
import Popup from "../shared/Popup";

interface pop{
    onClose : ()=>void
}
export default function AddItineraire({
    onClose
} : pop) {
    const initial = {
        idVoi: "",
        designVoi: "",
        code_It: "",
        frais: ""
    };

    const [infoVoit, setInfoVoit] = useState(initial);
    const [popupMess, setpopupMess] = useState("");


    // Change the val of inpt for each typing
    const changeVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInfoVoit((prev) => ({
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
            const res = await fetch("CHANGE THERE !!!", {
                method: 'POST',
                headers: {
                    "COntent-type" : "application/json"
                },
                body: JSON.stringify(infoVoit)
            })

            if (res.ok) {
                setpopupMess("Voiture ajoutée avec succes")
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
                        value={infoVoit.idVoi} 
                        onChange={changeVal} 
                        placeholder="Code itineraire"
                        className={addCss.input}
                    />
                    <input 
                        type="text" 
                        name="villDep" 
                        value={infoVoit.designVoi} 
                        onChange={changeVal} 
                        placeholder="ville de depart"
                        className={addCss.input}
                    />
                    <input 
                        type="text" 
                        name="villArr" 
                        value={infoVoit.code_It} 
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