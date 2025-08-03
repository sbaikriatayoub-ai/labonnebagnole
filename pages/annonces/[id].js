import { useRouter } from 'next/router';

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

export default function AnnonceDetails() {
  const router = useRouter();
  const { id } = router.query;
  const annonce = annonces.find(a => a.id === id);

  if (!annonce) return <p>Annonce non trouvée</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{annonce.title}</h1>
      <img src={annonce.imageUrl} alt={annonce.title} className="w-full max-w-md rounded mb-4" />
      <p className="text-green-700 font-bold text-xl">{annonce.price}</p>
      <p>{annonce.km.toLocaleString()} km</p>
      <p className="mt-4">{annonce.description}</p>
    </div>
  );
}
