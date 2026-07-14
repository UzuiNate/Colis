import '../style/Colis.css'
import ListeColis from "./ListeColis" 
import colisCss from '../style/Colis.module.css'

function Colis() {
	const onRecherche = () => {
		
	}

	return <div style={{width: 'calc(100% - 340px)'}}>
		<div className="colis-header">
			<h2>Colis</h2>
			<div style={{display: 'flex'}}>
				<button className={colisCss.btn}>Listez tous les colis</button>
				<button className={colisCss.btn}>Liste colis envoyée</button>
				<button className={colisCss.btn}>Liste colis reçu</button>
				<div className="colis-search">
					<svg width="20px" height="20px" style={{margin: '5px'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#bea579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<input type="text" onChange={onRecherche} placeholder="rechercher itineraire"/>
				</div>
			</div>
		</div>
		<ListeColis/>
	</div>
}

export default Colis