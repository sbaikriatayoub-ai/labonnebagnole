import Link from 'next/link';

const annonces = [
  {
    id: '1',
    title: 'Citroën Berlingo 1.5 HDi 2020',
    price: '12 500 €',
    km: 86000,
    description: 'Utilitaire 2 places, excellent état, entretien à jour.',
    imageUrl: '/images/berlingo.jpg'
  },
  {
    id: '2',
    title: 'Peugeot 208 1.2 PureTech 2019',
    price: '9 800 €',
    km: 45000,
    description: 'Petite citadine économique, idéal ville.',
    imageUrl: '/images/peugeot208.jpg'
  }
];

export default function AnnonceList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {annonces.map((annonce) => (
        <Link key={annonce.id} href={`/annonces/${annonce.id}`}>
          <a className="block border rounded shadow p-4 hover:shadow-lg transition">
            <img src={annonce.imageUrl} alt={annonce.title} className="w-full h-48 object-cover mb-3 rounded" />
            <h2 className="text-xl font-semibold">{annonce.title}</h2>
            <p className="text-green-700 font-bold">{annonce.price}</p>
            <p>{annonce.km.toLocaleString()} km</p>
            <p>{annonce.description}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}
