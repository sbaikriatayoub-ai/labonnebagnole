// pages/index.js

export default function Home() {
  // Définition d'une annonce exemple
  const annonce = {
    image: "/images/test.jpg",
    titre: "Peugeot 208",
    marque: "Peugeot",
    modele: "208",
    energie: "Essence",
    prix: 12500,
    boiteVitesse: "Manuelle",
    kilometrage: 50000,
    nbPlaces: 5,
    id: 1
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-md mx-auto mb-6">
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
  );
}
