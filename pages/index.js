import Head from 'next/head';
import AnnonceList from '../components/AnnonceList';
import PriceEstimate from '../components/PriceEstimate';

export default function Home() {
  return (
    <>
      <Head>
        <title>La Bonne Bagnole</title>
        <meta name="description" content="Le meilleur site de petites annonces auto" />
      </Head>
      <main className="container mx-auto p-4 space-y-8">
        <h1 className="text-4xl font-bold mb-6">Bienvenue sur La Bonne Bagnole</h1>
        <PriceEstimate />
        <AnnonceList />
      </main>
    </>
  );
}
