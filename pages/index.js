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
