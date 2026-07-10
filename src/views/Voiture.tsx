import AddVoiture from '../components/AddVoiture.tsx';
import CarteVoiture from './CarteVoiture.tsx';
import voitCss from '../style/Voiture.module.css'
import { useState } from 'react';

function Voiture() {
	const st = {width : "100%"}
	const [poped, setpoped] = useState(false)
	return <>
		<div style={st}>
		<div className="envoyer-header">
			<h2>Voiture</h2>
			<button className={voitCss.btn} onClick={()=>{setpoped(true)}}>+ Ajouter</button>
		</div>
			{
				poped &&
				<AddVoiture onClose={()=>setpoped(false)}/>
			}
			<CarteVoiture/>
		</div>
	</>
}

export default Voiture