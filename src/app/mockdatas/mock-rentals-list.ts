import { Rental } from "../models/rental";

export const rentalsList : Array<Rental> = [
	{
		"id": "c67ab8a7",
		"title": "Appartement cosy",
		"cover": "locs/loc1.jpg",
		"pictures": [
			"../assets/locs/loc1.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
		"host": {
			"name": "Nathalie Jean",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
		},
		"rating": "5",
		"location": "Ile de France - Paris 17e",
		"equipments": [
			"Équipements de base",
			"Micro-Ondes",
			"Douche italienne",
			"Frigo",
			"WIFI"
		],
		"tags": [
			"Batignolle",
			"Montmartre"
		]
	},
	{
		"id": "b9123946",
		"title": "Magnifique appartement proche Canal Saint Martin",
		"cover": "locs/loc2.jpg",
		"pictures": [
			"../assets/locs/loc2.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.",
		"host": {
			"name": "Della Case",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
		},
		"rating": "4",
		"location": "Ile de France - Paris 10e",
		"equipments": [
			"Parking",
			"Sèche Cheveux",
			"Machine à laver",
			"Wi-fi",
			"Cuisine équipée",
			"Télévision"
		],
		"tags": [
			"Canal Saint Martin",
			"République",
			"Appartement"
		]
	},
	{
		"id": "46d188c5",
		"title": "Studio de charme - Buttes Chaumont",
		"cover": "locs/loc3.jpg",
		"pictures": [
			"../assets/locs/loc3.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.",
		"host": {
			"name": "Franck Maher",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg"
		},
		"rating": "3",
		"location": "Ile de France - Paris 20e",
		"equipments": [
			"Wi-fi",
			"Cuisine équipée",
			"Télévision",
			"Sèche Cheveux"
		],
		"tags": [
			"Buttes Chaumont",
			"Laumière",
			"Studio"
		]
	},
	{
		"id": "7af00cd6",
		"title": "Nid douillet au coeur du 11ème",
		"cover": "locs/loc4.jpg",
		"pictures": [
			"../assets/locs/loc4.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème. La vue sur le parc résidentiel saura vous reposer de vos longues journées de tourisme dans la capitale française. Et pour les plus fêtards d'entre vous, la rue Jean Pierre Timbaud vous permettra de découvrir la night-life parisienne à seulement 5 minutes de l'appartement.",
		"host": {
			"name": "Della Case",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
		},
		"rating": "3",
		"location": "Ile de France - Paris 11e",
		"equipments": [
			"Micro-Ondes",
			"Wi-fi",
			"Chambre Séparée",
			"Climatisation",
			"Télévision"
		],
		"tags": [
			"Parmentier",
			"Marais",
			"Parc",
			"Night Life"
		]
	},
	{
		"id": "0979876d",
		"title": "Appartement de Standing - 10e",
		"cover": "locs/loc5.jpg",
		"pictures": [
			"../assets/locs/loc5.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Ce loft entièrement rénové, et équipé de meubles de luxe saura vous séduire. Idéalement situé dans le 10ème arrondissement, vous déplacer dans Paris sera un véritable jeu d'enfant.",
		"host": {
			"name": "Franck Maher",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg"
		},
		"rating": "5",
		"location": "Ile de France - Paris 10e",
		"equipments": [
			"Frigo Américain",
			"Sèche Cheveux",
			"Wi-fi",
			"Chambre Séparée",
			"Parking"
		],
		"tags": [
			"Goncourt",
			"Proche commerces"
		]
	},
	{
		"id": "f72a452f",
		"title": "Studio d'artiste",
		"cover": "locs/loc6.jpg",
		"pictures": [
			"../assets/locs/loc6.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Venez vous imprégner de la culture parisienne dans cet ancien studio d'artiste décoré avec goût, au coeur de Montmartre.",
		"host": {
			"name": "Line Rolland",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-3.jpg"
		},
		"rating": "5",
		"location": "Ile de France - Paris 18e",
		"equipments": [
			"Chambre Séparée",
			"Parking"
		],
		"tags": [
			"Montmartre",
			"Culture",
			"Charme"
		]
	},
	{
		"id": "b4c67936",
		"title": "Cheap - Studio 18ème",
		"cover": "locs/loc7.jpg",
		"pictures": [
			"../assets/locs/loc7.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Ce Studio entièrement fonctionnel sera votre parfait pied à terre pour toutes vos excursions parisiennes. Idéalement situé près des lignes 2 et 4, vous accéderez très rapidement à tous les points touristiques de Paris.",
		"host": {
			"name": "Hugo Perrier",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg"
		},
		"rating": "3",
		"location": "Ile de France - Paris 18e",
		"equipments": [
			"Salle de bains",
			"Frigo",
			"Wi-fi",
			"Sèche Cheveux",
			"Bureau",
			"Parking"
		],
		"tags": [
			"Transports",
			"Cheap",
			"18ème"
		]
	},
	{
		"id": "bc6f7112",
		"title": "Superbe appartement proche Tour Eiffel",
		"cover": "locs/loc8.jpg",
		"pictures": [
			"../assets/locs/loc8.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Ce superbe appartement vous surprendra par son charme. Entièrement refait à neuf, il est équipé avec goût. La taille des pièces vous fera douter que vous êtes à Paris. Mais il vous suffit de sortir pour voir que vous êtes au coeur des plus belles attractions de Paris : le Louvre, la Tour Eiffel, le Grand Palais sont à deux pas. À vous de venir découvrir Paris !",
		"host": {
			"name": "Sébastien Fournier",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-5.jpg"
		},
		"rating": "5",
		"location": "Ile de France - Paris 6e",
		"equipments": [
			"Wi-fi",
			"Sèche Cheveux",
			"Machine à laver",
			"Parking",
			"Lit King Size",
			"Ascenseur"
		],
		"tags": [
			"Luxe",
			"Tour Eiffel",
			"T3",
			"6ème"
		]
	},
	{
		"id": "cb2f9222",
		"title": "Suite familiale",
		"cover": "locs/loc9.jpg",
		"pictures": [
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Paris vous tend les bras ! En famille ou entre amis, venez découvrir la ville de l'amour dans un appartement de goût. Vous pourrez profiter de tous les commerces seulement à quelques minutes de l'appartement. Sa proximité avec la gare Montparnasse en fait également un choix idéal pour celles et ceux qui doivent prendre un train.",
		"host": {
			"name": "Adrien Chiran",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg"
		},
		"rating": "4",
		"location": "Ile de France - Paris 14e",
		"equipments": [
			"Climatisation",
			"Machine à laver",
			"Sèche Cheveux",
			"Wi-fi",
			"Parking"
		],
		"tags": [
			"Montparnasse",
			"Commerces",
			"Famille"
		]
	},
	{
		"id": "d60ca600",
		"title": "Appartement moderne sur parc",
		"cover": "locs/loc10.jpg",
		"pictures": [
			"../assets/locs/loc10.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Respirer en plein coeur de Paris ? C'est possible ! Avec vue sur un parc résidentiel, vous pourrez ouvrir les fenêtres sans avoir à souffrir du bruit des voitures et de la pollution. Au contraire, vous pourrez écouter les oiseaux. Notre appartement est également idéalement situé au coeur du 11ème arrondissement. Proche des lignes 3 et 2, vous pourrez découvrir Paris sans effort !",
		"host": {
			"name": "Adrien Chiran",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg"
		},
		"rating": "3",
		"location": "Ile de France - Paris 11e",
		"equipments": [
			"Vue Parc",
			"Chauffage",
			"Sèche linge",
			"Sèche Cheveux",
			"Wi-fi",
			"Ascenseur"
		],
		"tags": [
			"Père Lachaise",
			"11e",
			"Metro 3",
			"Metro 2"
		]
	},
	{
		"id": "2cf259e1",
		"title": "Charmant Studio Marais",
		"cover": "locs/loc11.jpg",
		"pictures": [
			"../assets/locs/loc11.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Situé en plein coeur du Marais, notre studio est idéal pour les touristes en quête de découverte. Sa cuisine toute équipée est particulièrement pratique.",
		"host": {
			"name": "Victor Moran",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-7.jpg"
		},
		"rating": "4",
		"location": "Ile de France - Paris 11e",
		"equipments": [
			"Clic-clac",
			"Four",
			"Sèche Cheveux",
			"Wi-fi"
		],
		"tags": [
			"Marais",
			"Studio",
			"Parc"
		]
	},
	{
		"id": "5323c29b",
		"title": "Studio fonctionnel République",
		"cover": "locs/loc12.jpg",
		"pictures": [
			"../assets/locs/loc12.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Idéalement situé à 2 pas de la place de la République, ce studio particulièrement fonctionnel est parfait pour découvrir Paris. Proche de tous les points d'intérêts grâce aux 5 lignes de métro qui sont à 5 minutes, vous pourrez rentabiliser votre temps passé à la capitale.",
		"host": {
			"name": "Sarah Devit",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg"
		},
		"rating": "3",
		"location": "Ile de France - Paris 3e",
		"equipments": [
			"Rangements",
			"Lit",
			"Sèche Cheveux",
			"Wi-fi",
			"TV",
			"Bouilloire"
		],
		"tags": [
			"Marais",
			"République",
			"Studio",
			"Proche Métros",
			"Commerces"
		]
	},
	{
		"id": "af6d2d48",
		"title": "Bungalow dans la forêt",
		"cover": "locs/loc13.jpg",
		"pictures": [
			"../assets/locs/loc13.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Quittez Paris pour vous mettre au vert. A seulement 30 minutes de la Gare du Nord, venez découvrir la forêt d'Ecouen directement depuis la fenêtre de votre bungalow. Entièrement équipé, ce logement saura vous accueillir dans le confort, tout en vous permettant de vous concentrer sur l'essentiel. Le matin, ouvrez les fenêtres, et profitez du chant des oiseaux.",
		"host": {
			"name": "Sarah Devit",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg"
		},
		"rating": "5",
		"location": "Ile de France - Ecouen",
		"equipments": [
			"SDB",
			"Cuisine équipée",
			"Toilettes sèches",
			"Frigo",
			"Bouilloire"
		],
		"tags": [
			"Forêt",
			"Nature",
			"Musée d'Ecouen"
		]
	},
	{
		"id": "7cbb378e",
		"title": "Grande Maison proche banlieue",
		"cover": "locs/loc14.jpg",
		"pictures": [
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Vous chercher un endroit pour fêter un anniversaire entre amis tout en restant proche de Paris ? Ne cherchez plus ! Entièrement équipée, cette maison est l'endroit idéal pour se regrouper.",
		"host": {
			"name": "Karen Guillet",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-9.jpg"
		},
		"rating": "4",
		"location": "Ile de France - Arnouville",
		"equipments": [
			"SDB",
			"Cuisine équipée",
			"Frigo",
			"Bouilloire",
			"WIFI",
			"Télévision",
			"Cintres",
			"Équipements de base"
		],
		"tags": [
			"Forêt",
			"Nature",
			"Grande maison"
		]
	},
	{
		"id": "ba55a0cc",
		"title": "Maison T5 - Le Vésinet",
		"cover": "locs/loc15.jpg",
		"pictures": [
			"../assets/locs/loc15.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Maison T5. Idéale pour grands groupes. 45 minutes de Paris Saint-Lazare.",
		"host": {
			"name": "Karen Guillet",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-9.jpg"
		},
		"rating": "3",
		"location": "Ile de France - Arnouville",
		"equipments": [
			"Bouilloire",
			"SDB",
			"Cuisine équipée",
			"Frigo",
			"WIFI",
			"TV",
			"Cintres",
			"Four",
			"Micro-Ondes",
			"Parking"
		],
		"tags": [
			"Nature",
			"Groupe",
			"Maison"
		]
	},
	{
		"id": "1e181317",
		"title": "Loft de Luxe à la Défense",
		"cover": "locs/loc6.jpg",
		"pictures": [
			"../assets/locs/loc6.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Si vous êtes à la recherche de l'endroit idéal pour poser vos valises entre deux rdvs d'affaire, ne cherchez plus. Notre loft est l'endroit idéal. En plein coeur de la Défense, il dispose également de tous les équipements pour que vous soyez comme chez vous.",
		"host": {
			"name": "Julie Donatella",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-10.jpg"
		},
		"rating": "3",
		"location": "Ile de France - La Défense",
		"equipments": [
			"Baie vitrée",
			"Télévision",
			"Four",
			"Frigo",
			"Wi-fi",
			"Micro-Ondes",
			"Parking"
		],
		"tags": [
			"La Défense",
			"Loft",
			"Luxe"
		]
	},
	{
		"id": "1e180563",
		"title": "Charmant apt aux portes de Paris",
		"cover": "locs/loc3.jpg",
		"pictures": [
			"../assets/locs/loc3.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Ce charmant appartement offre des prestations de luxe, aux portes de Paris. À deux pas de la ligne 3, vous pourrez accéder à toutes les attractions touristiques dont vous avez toujours rêvées.",
		"host": {
			"name": "Julie Donatella",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-10.jpg"
		},
		"rating": "4",
		"location": "Ile de France - Levallois",
		"equipments": [
			"Télévision",
			"Four",
			"Frigo",
			"Hotte",
			"Wi-fi",
			"Micro-Ondes"
		],
		"tags": [
			"Vue Parc",
			"Apt de Charme"
		]
	},
	{
		"id": "2139a317",
		"title": "Cheap - Chambre Paris 20",
		"cover": "locs/loc2.jpg",
		"pictures": [
			"../assets/locs/loc2.jpg"
		],
		"description": "Cette chambre dispose de toutes les facilités nécessaires. Proche métro et commerces.",
		"host": {
			"name": "Hugo Perrier",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg"
		},
		"rating": "2",
		"location": "Ile de France - Paris 20e",
		"equipments": [
			"Bouilloire",
			"Wi-fi",
			"Micro-Ondes"
		],
		"tags": [
			"Vue Parc",
			"Métros"
		]
	},
	{
		"id": "6ff132c6",
		"title": "Charmant studio",
		"cover": "locs/loc11.jpg",
		"pictures": [
			"../assets/locs/loc11.jpg",
			"../assets/locs/loc9.jpg",
			"../assets/locs/loc14.jpg",
			"../assets/locs/loc16.jpg"
		],
		"description": "Ce studio décoré avec goût sera votre nid douillet après une longue journée passée à découvrir Paris.",
		"host": {
			"name": "Michel Romy",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-11.jpg"
		},
		"rating": "4",
		"location": "Ile de France - Paris 13e",
		"equipments": [
			"Équipements de base",
			"Four",
			"Frigo",
			"Wi-fi",
			"Micro-Ondes"
		],
		"tags": [
			"Studio",
			"Charmant",
			"13e"
		]
	},
	{
		"id": "cb02d69b",
		"title": "Magnifique appartement Rivoli",
		"cover": "locs/loc10.jpg",
		"pictures": [
			"../assets/locs/loc10.jpg"
		],
		"description": "Au coeur du quartier historique du Marais, cet appartement est idéal pour un couple à la découverte de Paris. Situé sur la rue de Rivoli, il est à 5 minutes du Louvre.",
		"host": {
			"name": "Nathalie Jean",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
		},
		"rating": "4",
		"location": "Ile de France - Paris 13e",
		"equipments": [
			"Wi-fi",
			"Équipements de base",
			"Micro-Ondes",
			"Frigo",
			"Baignoire"
		],
		"tags": [
			"Louvre",
			"Marais",
			"Rivoli"
		]
	}
]