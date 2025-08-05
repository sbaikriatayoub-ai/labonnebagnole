export default function Home() {
  // Tableau d'annonces
  const annonces = [
    {
      id: 1,
      image: "/images/test1.jpg",
      titre: "Peugeot 208",
      marque: "Peugeot",
      modele: "208",
      energie: "Essence",
      prix: 12500,
      boiteVitesse: "Manuelle",
      kilometrage: 50000,
      nbPlaces: 5
    },
    {
      id: 2,
      image: "/images/test2.jpg",
      titre: "Renault Clio",
      marque: "Renault",
      modele: "Clio",
      energie: "Diesel",
      prix: 9800,
      boiteVitesse: "Automatique",
      kilometrage: 75000,
      nbPlaces: 5
    },
    {
      id: 3,
      image: "/images/test3.jpg",
      titre: "Tesla Model 3",
      marque: "Tesla",
      modele: "Model 3",
      energie: "Électrique",
      prix: 35000,
      boiteVitesse: "Automatique",
      kilometrage: 15000,
      nbPlaces: 5
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {annonces.map((annonce) => (
        <div
          key={annonce.id}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <img
            src={annonce.image || "/images/default.jpg"}
            alt={annonce.titre || "Image voiture"}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">
              {annonce.titre || `${annonce.marque} ${annonce.modele} ${annonce.energie}`}
            </h2>
            <p className="text-gray-700 mb-1">
              Prix : <span className="font-semibold">{annonce.prix} €</span>
            </p>
            <p className="text-gray-700 mb-1">
              Boîte : {annonce.boiteVitesse || "Non spécifiée"}
            </p>
            <p className="text-gray-700 mb-1">
              Kilométrage : {annonce.kilometrage?.toLocaleString() || "Non précisé"} km
            </p>
            <p className="text-gray-700 mb-3">
              Nombre de places : {annonce.nbPlaces || "Inconnu"}
            </p>
            <a
              href={`/annonces/${annonce.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Voir l’annonce
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

