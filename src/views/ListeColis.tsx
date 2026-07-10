import { useEffect, useState } from 'react'
import styles from '../style/ListeCOlis.module.css'

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
                        {dataColis.map((colis,index)=>(
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