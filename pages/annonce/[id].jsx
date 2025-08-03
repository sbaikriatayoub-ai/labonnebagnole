import { annonces } from '../../data/annonces';

export default function AnnonceDetail({ annonce }) {
  if (!annonce) {
    return <div className="p-4 text-red-500">Annonce introuvable.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{annonce.titre}</h1>
      <img
        src={annonce.image}
        alt={annonce.titre}
        className="rounded mb-4 w-full h-auto max-h-[400px] object-cover"
      />
      <p className="mb-2"><strong>Modèle:</strong> {annonce.modele}</p>
      <p className="mb-2"><strong>Année:</strong> {annonce.annee}</p>
      <p className="mb-2"><strong>Kilométrage:</strong> {annonce.kilometrage.toLocaleString()} km</p>
      <p className="mb-2"><strong>Énergie:</strong> {annonce.energie}</p>
      <p className="mb-4"><strong>Description:</strong> {annonce.description}</p>
      <div className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded w-fit">
        Prix estimé : {annonce.prixEstime} €
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = annonces.map((annonce) => ({
    params: { id: annonce.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const annonce = annonces.find((a) => a.id.toString() === params.id);

  return {
    props: { annonce: annonce || null },
  };
}
