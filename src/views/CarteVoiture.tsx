import { useState, useEffect } from "react";
import '../style/carte.css'

export default function CarteVoiture () {
    const [voiture, setVoiture] = useState([]);

    useEffect(() => {
        const fetchItineraire = async () => {
            let host = '192.168.43.163'
            if(window.host && window.host !== host) {
                host = window.host
            }
            const response = await fetch("http://" + host + ":8000/voiture/list-voiture", {
                method: 'GET',
                credential: 'include',
            })

            if(!response.ok) {
                throw new Error("Error while getting data from server")
            }

            const res = await response.json()
            setItineraires(res)
            console.log(res)
        }
        fetchItineraire()
    }, [])

    const container = {
        display: "flex"
    }

    return <>
    <div style={container}>
        {
        voiture.map((voiture)=> <div className="carte">
            <svg fill="#000000" width="70px" height="70px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.83,10.75,19.3,8.45A1,1,0,0,0,18.46,8H15V6a1,1,0,0,0-1-1H4A1,1,0,0,0,3,6V16a1,1,0,0,0,1,1H6a2,2,0,0,1,4,0h6a2,2,0,0,1,4,0h1V11.3A1,1,0,0,0,20.83,10.75Z" strokeWidth="2" style={{fill: "#ffbe55"}}></path>
                <path d="M15,6V17H10a2,2,0,0,0-4,0H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5H14A1,1,0,0,1,15,6Zm5.83,4.75L19.3,8.45A1,1,0,0,0,18.46,8H15v9h1a2,2,0,0,1,4,0h1V11.3A1,1,0,0,0,20.83,10.75Z" fill="none" stroke="#bea579" strokeLinecap="round" strokeLinejoin="round" stroke-width="2"></path>
                <path d="M10,17a2,2,0,1,1-2-2A2,2,0,0,1,10,17Zm8-2a2,2,0,1,0,2,2A2,2,0,0,0,18,15Z" fill="none" stroke="#bea579" strokeLinecap="round" strokeLinejoin="round" stroke-width="2"></path>
            </svg>

            {/*<p className="voiture-info">{voiture.id}</p>*/}
            <p className="voiture-info design">{voiture.design}</p>
            <p className="voiture-info codeit">{voiture.codeit}</p>
            <p className="voiture-info frais">{voiture.frais} Ar</p>

            <div className="voiture-card-action">
                <button>
                    <svg width="20px" style={{pointerEvents: 'none', transform: "translateY(2px)"}} height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1498 7.93997L8.27978 19.81C7.21978 20.88 4.04977 21.3699 3.32977 20.6599C2.60977 19.9499 3.11978 16.78 4.17978 15.71L16.0498 3.84C16.5979 3.31801 17.3283 3.03097 18.0851 3.04019C18.842 3.04942 19.5652 3.35418 20.1004 3.88938C20.6356 4.42457 20.9403 5.14781 20.9496 5.90463C20.9588 6.66146 20.6718 7.39189 20.1498 7.93997V7.93997Z" stroke="#bea579" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button>
                    <svg width="20px" height="20px" style={{pointerEvents: 'none', transform: "translateY(2px)"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12V17" stroke="#bea579" strokeWidth="2" strokeLineCap="round" strokeLinejoin="round"/>
                        <path d="M14 12V17" stroke="#bea579" strokeWidth="2" strokeLineCap="round" strokeLinejoin="round"/>
                        <path d="M4 7H20" stroke="#bea579" strokeWidth="2" strokeLineCap="round" strokeLinejoin="round"/>
                        <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#bea579" stroke-width="2" strokeLineCap="round" strokeLinejoin="round"/>
                        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#bea579" stroke-width="2" strokeLineCap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>)
        }
    </div>
    </>
} 