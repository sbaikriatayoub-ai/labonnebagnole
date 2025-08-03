import SellerProfile from '../components/SellerProfile';

export default function SellerPage() {
  const seller = {
    name: 'Ayoub Sbai',
    rating: 4.8,
    listingsCount: 12,
    memberSince: '2023'
  };

  return (
    <main className="container mx-auto p-4">
      <SellerProfile seller={seller} />
    </main>
  );
}
