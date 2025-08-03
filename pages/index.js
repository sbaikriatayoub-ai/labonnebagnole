import Head from 'next/head';
import AnnonceCard from '@/components/AnnonceCard';

const annonces = [
  {
    id: 'berlingo-2020',
    titre: 'Citroën Berlingo 1.5 HDI 75ch',
    annee: 2020,
    kilometrage: 86000,
    energie: 'Diesel',
    prixEstime: 9800,
    image: '/annonces/berlingo.jpg',
  },
  {
    id: 'peugeot-208-2019',
    titre: 'Peugeot 208 1.2 PureTech 100ch',
    annee: 2019,
    kilometrage: 54000,
    energie: 'Essence',
    prixEstime: 10500,
    image: '/annonces/208.jpg',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>LaBonneBagnole - Accueil</title>
      </Head>
      <main className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Dernières annonces</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {annonces.map((annonce) => (
            <AnnonceCard key={annonce.id} annonce={annonce} />
          ))}
        </div>
      </main>
    </>
  );
}
