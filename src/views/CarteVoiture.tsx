import { useState, useEffect} from 'react'
import '../style/carte.css'

export default function CarteVoiture () {

    const [voiture, setVoiture] = useState([]);
    const [erreur, setErreur] = useState("");
    
    async function chargerVoiture() {
        try{
            const data= await fetch('URL ani francois', { method: 'GET' })
            setVoiture(await data.json())
            setErreur("")
        }catch {setErreur("Erreur de chargement")}
    }

    useEffect(()=>{chargerVoiture();}, []);
    

    return <>
    <div className="voitureContener">
        {
        voiture.map((voiture)=> <div className="carte">
            <p>{voiture.id}</p>
            <p>{voiture.design}</p>
            <p>{voiture.codeit}</p>
            <p>{voiture.frais}</p>
            <button>eto asiana sary modifier</button>
            <button>eto asiana sary supprimer</button>
        </div>)
        }
    </div>
    </>
} 