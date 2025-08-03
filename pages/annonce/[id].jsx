import { useRouter } from 'next/router';
import Head from 'next/head';

const annonces = {
  'berlingo-2020': {
    titre: 'Citroën Berlingo 1.5 HDI 75ch',
    annee: 2020,
    kilometrage: 86000,
    energie: 'Diesel',
    prixEstime: 9800,
    description: 'Utilitaire fiable, idéal pour artisans. CT OK.',
    image: '/annonces/berlingo.jpg',
  },
  'peugeot-208-2019': {
    titre: 'Peugeot 208 1.2 PureTech 100ch',
    annee: 2019,
    kilometrage: 54000,
    energie: 'Essence',
    prixEstime: 10500,
    description: 'Très bon état, faible kilométrage. 1ère main.',
    image: '/annonces/208.jpg',
  },
};

export default function AnnonceDetail() {
  const router = useRouter();
  const { id } = router.query;

  const annonce = annonces[id];

  if (!annonce) {
    return <p className="p-4">Annonce introuvable.</p>;
  }

  return (
    <>
      <Head>
        <title>{annonce.titre} - LaBonneBagnole</title>
      </Head>
      <main className="max-w-3xl mx-auto p-4">
        <img src={annonce.image} alt={annonce.titre} className="w-full h-auto rounded mb-4" />
        <h1 className="text-2xl font-bold mb-2">{annonce.titre}</h1>
        <ul className="mb-4">
          <li>Année : {annonce.annee}</li>
          <li>Kilométrage : {annonce.kilometrage} km</li>
          <li>Énergie : {annonce.energie}</li>
          <li>Prix estimé : {annonce.prixEstime} €</li>
        </ul>
        <p className="text-gray-700">{annonce.description}</p>
      </main>
    </>
  );
}
