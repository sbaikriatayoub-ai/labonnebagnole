import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>La Bonne Bagnole</title>
        <meta name="description" content="Le meilleur site de petites annonces auto" />
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Bienvenue sur La Bonne Bagnole</h1>
        <p className="mb-4">Découvrez les meilleures annonces de voitures entre particuliers.</p>
        {/* Ici tu pourras ajouter les modules annonces, estimation, chat, etc. */}
      </main>
    </>
  );
}
