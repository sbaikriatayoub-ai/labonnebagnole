import React, { useState } from 'react';

export default function PriceEstimate() {
  const [marque, setMarque] = useState('');
  const [modele, setModele] = useState('');
  const [annee, setAnnee] = useState('');
  const [result, setResult] = useState(null);

  const handleEstimate = () => {
    // Ici tu peux intégrer une vraie formule ou API
    if (!marque || !modele || !annee) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    // Ex: estimation simple fictive
    const basePrice = 15000;
    const age = new Date().getFullYear() - parseInt(annee, 10);
    const estimate = Math.max(basePrice - age * 1000, 2000);
    setResult(estimate);
  };

  return (
    <div className="border p-4 rounded shadow max-w-md">
      <h2 className="text-xl font-bold mb-4">Estimation du prix</h2>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Marque"
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Modèle"
          value={modele}
          onChange={(e) => setModele(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Année"
          value={annee}
          onChange={(e) => setAnnee(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <button
        onClick={handleEstimate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Estimer
      </button>
      {result !== null && (
        <p className="mt-4 text-green-700 font-bold">
          Estimation : {result.toLocaleString()} €
        </p>
      )}
    </div>
  );
}
