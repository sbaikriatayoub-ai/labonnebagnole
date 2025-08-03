import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>La Bonne Bagnole</title>
        <meta name="description" content="Le meilleur site de petites annonces auto" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">La Bonne Bagnole</h1>
        </header>
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="bg-gray-200 text-center p-4">
          © 2025 La Bonne Bagnole - Tous droits réservés
        </footer>
      </div>
    </>
  );
}
