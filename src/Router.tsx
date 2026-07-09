import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'

import Colis from './views/Colis.tsx'
import Itineraire from './views/Itineraire.tsx'
import Voiture from './views/Voiture.tsx'
import Recevoir from './views/Recevoir.tsx'
import Envoyer from './views/Envoyer.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Colis />
			},
			{
				path: '/itineraire',
				element: <Itineraire />
			},
			{
				path: '/voiture',
				element: <Voiture />
			},
			{
				path: '/recevoir',
				element: <Recevoir />
			},
			{
				path: '/envoyer',
				element: <Envoyer />
			}
		]
	}
])

export default function Router() {
	return <RouterProvider router={router} />
}