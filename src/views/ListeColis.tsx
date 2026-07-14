import { useEffect, useState } from 'react'
import styles from '../style/ListeCOlis.module.css'

function Colis() {
	const st = {width : "100%"}
	const [poped, setpoped] = useState(false)
	const [colis, setColis] = useState([])

	useEffect(() => {
		const fetchColis = async () => {
			let host = 'localhost'
			if(window.host && window.host !== host) {
				host = window.host
			}
			const response = await fetch("http://" + host + ":8000/colis/list-colis", {
				method: 'GET',
				credentials: 'include',
			})

			if(!response.ok) {
				throw new Error("Error while getting data from server")
			}

			const res = await response.json()
			setColis(res)
		}
		fetchColis()

	}, [])

/*
export default function ListColis() {

    const initial = [{
        idColis : "C545",
        designColis: "VOiture",
        id_Voi: "158TBH",
        id_Envoi: "E1254",
        code_Recept: "HYEYE"
    },{
        idColis : "C5689",
        designColis: "Petit chien",
        id_Voi: "2555HHD",
        id_Envoi: "E1254",
        code_Recept: "YAHOO"
    }]
    const [dataColis, setdataColis] = useState(initial)
*/

    /*
        * API CALL THERE
        * CHANGE THE API LINK
    */
    // const getColis = async ()=>{
    //     const res = await fetch("CHANGE THERE !!!", {
    //         method: 'GET',
    //     })

    //     setdataColis(res.data)
    // }

    // useEffect(()=>{
    //     getColis()
    // }, [])

    return(
        <div className={styles.container}>
            <h2 className={styles.titre}>Liste des colis</h2>

            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id colis</td>
                            <td>Design</td>
                            <td>Matricule voiture</td>
                            <td>Id envoi</td>
                            <td>Code réception</td>
                        </tr>
                    </thead>
                    <tbody>
                        {colis.map((colis,index)=>(
                            <tr key={index}>
                                <td>{colis.idColis} </td>
                                <td>{colis.designColis} </td>
                                <td>{colis.id_Voi} </td>
                                <td>{colis.id_Envoi}</td>
                                <td>{colis.code_Recept}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Colis