import { useState, useEffect } from 'react'
import ItineraireCard from './Itineraire/ItineraireCard.tsx'
import '../style/Itineraire.css'

function Itineraire() {
	const [ itineraires, setItineraires ] = useState([])
	const [ recherche, setRecherche ] = useState('')
 
	const onRecherche = (e) => {
		window.dispatchEvent(new CustomEvent("recherche-itineraire-event", {detail: e.target.value}))
	}

	useEffect(() => {
		const fetchItineraire = async (r) => {
			let host = '192.168.43.163'
			if(window.host && window.host !== host) {
				host = window.host
			}
			const response = await fetch("http://" + host + ":8000/itineraire/afficher-itineraire", {
				method: 'POST',
				credential: 'include',
				body: JSON.stringify({
					recherche: r
				})
			})

			if(!response.ok) {
				throw new Error("Error while getting data from server")
			}

			const res = await response.json()
			setItineraires(res)
		}
		fetchItineraire(recherche)

		const onRechercheItineraireEvent = (e) => {
			fetchItineraire(e.detail.toUpperCase())
		}

		window.addEventListener("recherche-itineraire-event", onRechercheItineraireEvent)

		return () => {
			window.removeEventListener("recherche-itineraire-event", onRechercheItineraireEvent)
		}
	}, [])

	return <div className="itineraire-view">
		<div className="itineraire-header">
			<h2>Itineraire</h2>
			<div className="itineraire-search">
				<svg width="20px" height="20px" style={{margin: '5px'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#bea579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<input type="text" onChange={onRecherche} placeholder="rechercher itineraire"/>
			</div>
		</div>
		<div className="itineraire-content">
			{itineraires.map((el, i) => {
				return <ItineraireCard property={el} key={i}/>
			})}
		</div>
	</div>
}

export default Itineraire