import { useState } from 'react'
import { useRouter } from 'next/router'

export default function PosterAnnonce() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    titre: '',
    modele: '',
    annee: '',
    kilometrage: '',
    energie: '',
    description: '',
    prixEstime: '',
    image: '',
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple validation
    if (!formData.titre || !formData.modele || !formData.annee) {
      setError('Veuillez remplir au minimum le titre, modèle et année.')
      return
    }
    setError('')
    // Ici, on simule l'envoi des données (API ou stockage local)
    // Par exemple, on pourrait faire un fetch POST vers /api/annonces

    // Simulons un succès puis redirection
    setSuccess(true)
    setTimeout(() => {
      router.push('/annonces')
    }, 1500)
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Poster une annonce</h1>

      {error && <div className="mb-4 p-3 bg-red-200 text-red-800 rounded">{error}</div>}
      {success && <div className="mb-4 p-3 bg-green-200 text-green-800 rounded">Annonce postée avec succès ! Redirection...</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Titre</label>
          <input
            type="text"
            name="titre"
            value={formData.titre}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Modèle</label>
          <input
            type="text"
            name="modele"
            value={formData.modele}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Année</label>
          <input
            type="number"
            name="annee"
            value={formData.annee}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            min="1900"
            max={new Date().getFullYear()}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Kilométrage (km)</label>
          <input
            type="number"
            name="kilometrage"
            value={formData.kilometrage}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Énergie</label>
          <select
            name="energie"
            value={formData.energie}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">-- Choisissez --</option>
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Électrique">Électrique</option>
            <option value="Hybride">Hybride</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border px-3 py-2 rounded"
          ></textarea>
        </div>
        <div>
          <label className="block font-semibold mb-1">Prix estimé (€)</label>
          <input
            type="number"
            name="prixEstime"
            value={formData.prixEstime}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            min="0"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">URL image</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
          Poster
        </button>
      </form>
    </div>
  )
}
