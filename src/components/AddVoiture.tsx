import { useState } from "react";

export default function AddVoiture() {
    const initial = {
        idVoi: "",
        designVoi: "",
        code_It: "",
        frais: ""
    };

    const [infoVoit, setInfoVoit] = useState(initial);
    const [popupMess, setpopupMess] = useState("");


    const changeVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInfoVoit((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    
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
    
    return (
        <div>
            <form onSubmit={submitForm}>
                <p>Ajouter une voiture</p>
                <div>
                    <input 
                        type="text" 
                        name="idVoi" 
                        value={infoVoit.idVoi} 
                        onChange={changeVal} 
                        placeholder="Matricule"
                    />
                    <input 
                        type="text" 
                        name="designVoi" 
                        value={infoVoit.designVoi} 
                        onChange={changeVal} 
                        placeholder="Design"
                    />
                    <input 
                        type="text" 
                        name="code_It" 
                        value={infoVoit.code_It} 
                        onChange={changeVal} 
                        placeholder="Code itineraire"
                    />
                    <input 
                        type="number" 
                        name="frais" 
                        value={infoVoit.frais} 
                        onChange={changeVal} 
                        placeholder="Frais"
                    />
                </div>
                <button>Envoyer</button>
            </form>
        </div>
    );
}