import '../style/Envoyer.css'

function Recevoir() {
	const style = {
		margin: '10px',
	}


	return <div style={{width: 'calc(100% - 340px)'}}>
		<div className="envoyer-header">
			<h2>Recevoir</h2>
			
		</div>
		<div className="infos-colis">
			<h2>Colis recus</h2>
			<form method="POST" className="form-envoyer">
				<div className='infos'>
					<div className="labels" style={{width: "38%"}}>
						<label style={style}>Identifiant de recepteur :</label>
						<label style={style}>Identifiant de l'envoie :</label>
						<label style={style}>Date de reception :</label>
						<label style={style}>Heure de reception :</label>
					</div>
					<div className="champs" style={{width: "50%"}}>
						<input type="text" name="idvoit" style={{width: "50%"}} placeholder="identifiant de recepteur"></input>
						<input type="text" name="idvoit" style={{width: "50%"}} placeholder="identifiant de l'envoie"></input>
						<input type="date" name="date" style={{width: "50%"}}></input>
						<input type="time" name="time" style={{width: "50%"}}></input>
					</div>

				</div>
				<button type="submit">Soumettre</button>
				
			</form>
		</div>
	</div>
}

export default Recevoir