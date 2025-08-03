import Link from 'next/link';

export default function AnnonceCard({ annonce }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-md transition">
      <img
        src={annonce.image}
        alt={annonce.titre}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{annonce.titre}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {annonce.annee} • {annonce.kilometrage.toLocaleString()} km • {annonce.energie}
      </p>
      <p className="text-lg font-semibold text-blue-600 mb-4">{annonce.prixEstime.toLocaleString()} €</p>
      <Link
        href={`/annonce/${annonce.id}`}
        className="inline-block text-blue-500 font-medium hover:underline"
      >
        Voir l'annonce
      </Link>
    </div>
  );
}
