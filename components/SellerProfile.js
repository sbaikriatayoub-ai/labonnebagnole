export default function SellerProfile({ seller }) {
  return (
    <div className="border p-4 rounded shadow max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Profil du vendeur</h2>
      <p><strong>Nom :</strong> {seller.name}</p>
      <p><strong>Note :</strong> {seller.rating} / 5</p>
      <p><strong>Nombre d'annonces :</strong> {seller.listingsCount}</p>
      <p><strong>Membre depuis :</strong> {seller.memberSince}</p>
    </div>
  );
}
