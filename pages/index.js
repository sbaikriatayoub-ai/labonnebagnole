import Link from 'next/link';
import { annonces } from '@/data/annonces';

export default function Accueil() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Annonces disponibles</h1>
        <Link href="/annonces/poster">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
            Poster une annonce
          </button>
        </Link>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {annonces.map((annonce) => (
          <Link key={annonce.id} href={`/annonces/${annonce.id}`}>
            <div className="bg-white shadow hover:shadow-lg rounded overflow-hidden transition">
              <img
                src={annonce.image}
                alt={annonce.titre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
  {annonce.titre || `${annonce.marque} ${annonce.modele} ${annonce.energie}`}
</h2>
