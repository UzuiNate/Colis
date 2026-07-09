import '../style/carte.css'

export default function CarteVoiture () {

let voiture = [
    {
        id: 12,
        design: "tututu",
        codeit: 14,
        frais: 12000
    },
    {
        id: 10,
        design: "totutu",
        codeit: 13,
        frais: 13000
    }
]


    return <>
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
    </>
} 