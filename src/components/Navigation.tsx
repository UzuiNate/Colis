import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import '../style/Navigation.css'

function Navigation() {
	const colisRef = useRef(null)
	const recevoirRef = useRef(null)
	const envoyerRef = useRef(null)
	const itineraireRef = useRef(null)
	const voitureRef = useRef(null)

	const dispathRemoveSelect = () => {
		window.dispatchEvent(new CustomEvent("remove-select"))
	}

	const onColis = () => {
		dispathRemoveSelect()
		if(colisRef.current) {
			colisRef.current.classList.add("select")
		}
	}

	const onRecevoir = () => {
		dispathRemoveSelect()
		if(recevoirRef.current) {
			recevoirRef.current.classList.add("select")
		}
	}

	const onEnvoyer = () => {
		dispathRemoveSelect()
		if(envoyerRef.current) {
			envoyerRef.current.classList.add("select")
		}
	}

	const onItineraire = () => {
		dispathRemoveSelect()
		if(itineraireRef.current) {
			itineraireRef.current.classList.add("select")
		}
	}

	const onVoiture = () => {
		dispathRemoveSelect()
		if(voitureRef.current) {
			voitureRef.current.classList.add("select")
		}
	}

	useEffect(() => {
		const removeSelect = () => {
			if(colisRef.current) {
				colisRef.current.classList.remove("select")
			}
			if(recevoirRef.current) {
				recevoirRef.current.classList.remove("select")
			}
			if(envoyerRef.current) {
				envoyerRef.current.classList.remove("select")
			}
			if(itineraireRef.current) {
				itineraireRef.current.classList.remove("select")
			}
			if(voitureRef.current) {
				voitureRef.current.classList.remove("select")
			}
		}

		window.addEventListener("remove-select", removeSelect)

		return () => {
			window.removeEventListener("remove-select", removeSelect)
		}
	}, [])

	return <div className="navigation">
		<div className="navigation-header">
			<div className="navigation-header-logo">
				<svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.42229 20.6181C10.1779 21.5395 11.0557 22.0001 12 22.0001V12.0001L2.63802 7.07275C2.62423 7.09491 2.6107 7.11727 2.5974 7.13986C2 8.15436 2 9.41678 2 11.9416V12.0586C2 14.5834 2 15.8459 2.5974 16.8604C3.19479 17.8749 4.27063 18.4395 6.42229 19.5686L8.42229 20.6181Z" fill="#ba832c"/>
					<path d="M17.5774 4.43152L15.5774 3.38197C13.8218 2.46066 12.944 2 11.9997 2C11.0554 2 10.1776 2.46066 8.42197 3.38197L6.42197 4.43152C4.31821 5.53552 3.24291 6.09982 2.6377 7.07264L11.9997 12L21.3617 7.07264C20.7564 6.09982 19.6811 5.53552 17.5774 4.43152Z" fill="#ffbe55"/>
					<path d="M21.4026 7.13986C21.3893 7.11727 21.3758 7.09491 21.362 7.07275L12 12.0001V22.0001C12.9443 22.0001 13.8221 21.5395 15.5777 20.6181L17.5777 19.5686C19.7294 18.4395 20.8052 17.8749 21.4026 16.8604C22 15.8459 22 14.5834 22 12.0586V11.9416C22 9.41678 22 8.15436 21.4026 7.13986Z" fill="#ffbe55"/>
					<path d="M6.32334 4.48382C6.35617 4.46658 6.38926 4.44922 6.42261 4.43172L7.91614 3.64795L17.0169 8.65338L21.0406 6.64152C21.1783 6.79745 21.298 6.96175 21.4029 7.13994C21.5525 7.39396 21.6646 7.66352 21.7487 7.96455L17.7503 9.96373V13.0002C17.7503 13.4144 17.4145 13.7502 17.0003 13.7502C16.5861 13.7502 16.2503 13.4144 16.2503 13.0002V10.7137L12.7503 12.4637V21.9042C12.4934 21.9682 12.2492 22.0002 12.0003 22.0002C11.7515 22.0002 11.5072 21.9682 11.2503 21.9042V12.4637L2.25195 7.96455C2.33601 7.66352 2.44813 7.39396 2.59771 7.13994C2.70264 6.96175 2.82232 6.79745 2.96001 6.64152L12.0003 11.1617L15.3865 9.46857L6.32334 4.48382Z" fill="#ba832c"/>
				</svg>
			</div>
			<div className="navigation-header-title">
				<span className="navigation-header-title-colis">Colis</span><br/>
				<span className="navigation-header-title-madagascar">Madagascar</span>
			</div>
		</div>

		<div className="navigation-nav">
			<div className="navigation-nav-title">
				COLIS
			</div>
			<Link to="/">
				<button className="button-nav select" onClick={onColis} ref={colisRef}>
				<svg width="20px" height="20px" style={{marginRight: '20px', float: 'left'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.42229 20.6181C10.1779 21.5395 11.0557 22.0001 12 22.0001V12.0001L2.63802 7.07275C2.62423 7.09491 2.6107 7.11727 2.5974 7.13986C2 8.15436 2 9.41678 2 11.9416V12.0586C2 14.5834 2 15.8459 2.5974 16.8604C3.19479 17.8749 4.27063 18.4395 6.42229 19.5686L8.42229 20.6181Z" fill="#ba832c"/>
					<path d="M17.5774 4.43152L15.5774 3.38197C13.8218 2.46066 12.944 2 11.9997 2C11.0554 2 10.1776 2.46066 8.42197 3.38197L6.42197 4.43152C4.31821 5.53552 3.24291 6.09982 2.6377 7.07264L11.9997 12L21.3617 7.07264C20.7564 6.09982 19.6811 5.53552 17.5774 4.43152Z" fill="#ffbe55"/>
					<path d="M21.4026 7.13986C21.3893 7.11727 21.3758 7.09491 21.362 7.07275L12 12.0001V22.0001C12.9443 22.0001 13.8221 21.5395 15.5777 20.6181L17.5777 19.5686C19.7294 18.4395 20.8052 17.8749 21.4026 16.8604C22 15.8459 22 14.5834 22 12.0586V11.9416C22 9.41678 22 8.15436 21.4026 7.13986Z" fill="#ffbe55"/>
					<path d="M6.32334 4.48382C6.35617 4.46658 6.38926 4.44922 6.42261 4.43172L7.91614 3.64795L17.0169 8.65338L21.0406 6.64152C21.1783 6.79745 21.298 6.96175 21.4029 7.13994C21.5525 7.39396 21.6646 7.66352 21.7487 7.96455L17.7503 9.96373V13.0002C17.7503 13.4144 17.4145 13.7502 17.0003 13.7502C16.5861 13.7502 16.2503 13.4144 16.2503 13.0002V10.7137L12.7503 12.4637V21.9042C12.4934 21.9682 12.2492 22.0002 12.0003 22.0002C11.7515 22.0002 11.5072 21.9682 11.2503 21.9042V12.4637L2.25195 7.96455C2.33601 7.66352 2.44813 7.39396 2.59771 7.13994C2.70264 6.96175 2.82232 6.79745 2.96001 6.64152L12.0003 11.1617L15.3865 9.46857L6.32334 4.48382Z" fill="#ba832c"/>
				</svg>
				 Liste colis</button>
			</Link>
			<div className="navigation-nav-title">
				AUTRES
			</div>

			{/*Button Recevoir*/}
			<Link to="/envoyer">
				<button className="button-nav" onClick={onRecevoir} ref={recevoirRef}>
				<svg width="15px" height="15px" style={{marginRight: '20px'}} viewBox="0 -0.5 17 17" version="1.1">
				    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				        <g transform="translate(1.000000, 0.000000)" fill="#ba832c">
				            <path d="M15.644,4.236 C15.219,3.875 14.578,3.924 14.211,4.349 L12.149,7.103 C12.045,7.087 4.006,7.087 3.924,7.097 L1.765,4.337 C1.396,3.917 0.759,3.876 0.343,4.245 C-0.076,4.616 -0.116,5.257 0.252,5.679 L2.279,8.286 C2.156,8.554 2.083,8.847 2.083,9.159 L2.083,13.905 C2.083,15.057 3.018,15.993 4.172,15.993 L11.833,15.993 C12.986,15.993 13.922,15.057 13.922,13.905 L13.922,9.159 C13.922,8.87 13.863,8.597 13.757,8.345 L15.757,5.665 C16.121,5.24 16.07,4.6 15.644,4.236 L15.644,4.236 Z">
				            </path>
				            <path d="M5.236,3.944 L7.048,3.571 L7.027,5.007 C7.024,5.558 7.466,5.999 8.016,5.995 C8.566,5.993 9.015,5.544 9.017,4.993 L8.986,3.6 L10.767,3.944 C11.04,3.671 11.042,3.229 10.77,2.958 L8.505,0.282 C8.234,0.011 7.793,0.012 7.52,0.286 L5.242,2.958 C4.968,3.233 4.967,3.673 5.236,3.944 L5.236,3.944 Z">
				            </path>
				        </g>
				    </g>
				</svg> Envoyer</button>
			</Link>

			{/*Button Envoyer*/}
			<Link to="/recevoir">
				<button className="button-nav" onClick={onEnvoyer} ref={envoyerRef}>
				<svg width="15px" height="15px" style={{marginRight: '20px'}} viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">

				    <g stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
				        <g transform="translate(1.000000, 0.000000)" fill="#ba832c">
				            <path d="M15.644,4.236 C15.219,3.875 14.578,3.924 14.211,4.349 L12.149,7.103 C12.045,7.087 4.006,7.087 3.924,7.097 L1.765,4.337 C1.396,3.917 0.759,3.876 0.343,4.245 C-0.076,4.616 -0.116,5.257 0.252,5.679 L2.279,8.286 C2.156,8.554 2.083,8.847 2.083,9.159 L2.083,13.905 C2.083,15.057 3.018,15.993 4.172,15.993 L11.833,15.993 C12.986,15.993 13.922,15.057 13.922,13.905 L13.922,9.159 C13.922,8.87 13.863,8.597 13.757,8.345 L15.757,5.665 C16.121,5.24 16.07,4.6 15.644,4.236 L15.644,4.236 Z">
				            </path>
				            <path d="M10.781,2.057 L8.969,2.43 L8.99,0.994 C8.993,0.443 8.551,0.002 8.002,0.006 C7.45,0.008 7.002,0.457 7,1.008 L7.031,2.401 L5.25,2.057 C4.977,2.33 4.976,2.772 5.247,3.043 L7.512,5.719 C7.783,5.99 8.224,5.989 8.497,5.715 L10.775,3.043 C11.049,2.768 11.051,2.328 10.781,2.057 L10.781,2.057 Z">
				            </path>
				        </g>
				    </g>
				</svg> Recevoir</button>
			</Link>

			{/*Button Itineraire*/}
			<Link to="/itineraire">
				<button className="button-nav" onClick={onItineraire} ref={itineraireRef}>
				<svg width="15px" height="15px" style={{marginRight: '20px'}} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#ba832c" fillRule="evenodd" d="M13 0a3 3 0 00-1.65 5.506 7.338 7.338 0 01-.78 1.493c-.22.32-.472.635-.8 1.025a1.509 1.509 0 00-.832.085 12.722 12.722 0 00-1.773-1.124c-.66-.34-1.366-.616-2.215-.871a1.5 1.5 0 10-2.708 1.204c-.9 1.935-1.236 3.607-1.409 5.838a1.5 1.5 0 101.497.095c.162-2.07.464-3.55 1.25-5.253.381-.02.725-.183.979-.435.763.23 1.367.471 1.919.756a11.13 11.13 0 011.536.973 1.5 1.5 0 102.899-.296c.348-.415.64-.779.894-1.148.375-.548.665-1.103.964-1.857A3 3 0 1013 0zm-1.5 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd"/></svg> 
				Itineraire</button>
			</Link>
			<Link to="/voiture">
				<button className="button-nav" onClick={onVoiture} ref={voitureRef}>
				<svg width="15px" height="15px" style={{marginRight: '20px'}} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				        <g transform="translate(-140.000000, -5479.000000)" fill="#ba832c">
				            <g id="icons" transform="translate(56.000000, 160.000000)">
				                <path d="M89,5335 L89,5335 C88.448,5335 88,5334.552 88,5334 C88,5333.448 88.448,5333 89,5333 C89.552,5333 90,5333.448 90,5334 C90,5334.552 89.552,5335 89,5335 M99,5333 L99,5333 C99.552,5333 100,5333.448 100,5334 C100,5334.552 99.552,5335 99,5335 C98.448,5335 98,5334.552 98,5334 C98,5333.448 98.448,5333 99,5333 M90.602,5321 L97.398,5321 C97.896,5321 98.318,5321.366 98.388,5321.859 L99.694,5331 L88.306,5331 L89.612,5321.859 C89.682,5321.366 90.104,5321 90.602,5321 M104,5328 L104,5328 C104,5327.448 103.552,5327 103,5327 L101.143,5327 L100.245,5320.717 C100.105,5319.732 99.261,5319 98.265,5319 L89.735,5319 C88.739,5319 87.895,5319.732 87.755,5320.717 L86.857,5327 L85,5327 C84.448,5327 84,5327.448 84,5328 C84,5328.552 84.448,5329 85,5329 L86.571,5329 L86.286,5331 L86,5331 C84.895,5331 84,5331.895 84,5333 L84,5335 C84,5336.105 84.895,5337 86,5337 L86,5338 C86,5338.552 86.448,5339 87,5339 L89,5339 C89.552,5339 90,5338.552 90,5338 L90,5337 L98,5337 L98,5338 C98,5338.552 98.448,5339 99,5339 L101,5339 C101.552,5339 102,5338.552 102,5338 L102,5337 C103.105,5337 104,5336.105 104,5335 L104,5333 C104,5331.895 103.105,5331 102,5331 L101.714,5331 L101.429,5329 L103,5329 C103.552,5329 104,5328.552 104,5328">

				                </path>
				            </g>
				        </g>
				    </g>
				</svg> Voiture</button>
			</Link>
		</div>
	</div>
}

export default Navigation