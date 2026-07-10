import '../style/Envoyer.css'

function Envoyer() {
	return <div style={{width: 'calc(100% - 340px)'}}>
		<div className="envoyer-header">
			<h2>Envoyer</h2>
			
		</div>
		<div className="infos-colis">
			<h2>Colis à envoyer</h2>
			<form method="POST" className="form-envoyer">
				<div className='infos'>
					<div className="labels">
					<label>Identifiant de la voiture :</label>
					<label>Colis :</label>
					<label>Envoyeur : </label>
					<label>Email de l'envoyeur :</label>
					<label>Date d'envoi :</label>
					<label>Frais d'envoi :</label>
					<label>Recepteur :</label>
					<label>Contact du recepteur :</label>

					</div>
					<div className="champs">
						<input type="text" name="idvoit" placeholder="Voiture"></input>
						<input type="text" name="colis" placeholder="ex: Carton"></input>
						<input type="text" name="envoyeur" placeholder="ex: RAKOTO"></input>
						<input type="text" name="email" placeholder="envoyeur@gmail.com"></input>
						<input type="date" name="date"></input>
						<input type="text" name="frais" placeholder="Ar"></input>
						<input type="text" name="recepteur" placeholder="ex: RANDRIA"></input>
						<input type="text" name="contact" placeholder="03XXXXXXXX"></input>
						
					</div>

				</div>
				<button type="submit">Soumettre</button>
				
			</form>
		</div>
	</div>
}

export default Envoyer