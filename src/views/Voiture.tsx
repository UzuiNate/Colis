import AddVoiture from '../components/AddVoiture.tsx';
import CarteVoiture from './CarteVoiture.tsx';
import voitCss from '../style/Voiture.module.css'
import { useState, useEffect } from 'react';

function Voiture() {
	const st = {width : "100%"}
	const [poped, setpoped] = useState(false)
	const [voitures, setVoiture] = useState([])

	useEffect(() => {
		const fetchVoiture = async () => {
			let host = 'localhost'
			if(window.host && window.host !== host) {
				host = window.host
			}
			const response = await fetch("http://" + host + ":8000/voiture/list-voiture", {
				method: 'GET',
				credentials: 'include',
			})

			if(!response.ok) {
				throw new Error("Error while getting data from server")
			}

			const res = await response.json()
			setVoiture(res)
		}
		fetchVoiture()

	}, [])

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
			<CarteVoiture voitures={voitures}/>
		</div>
	</>
}

export default Voiture