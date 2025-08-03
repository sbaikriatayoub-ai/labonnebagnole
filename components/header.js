import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center relative">
      <div className="text-xl font-bold">
        <Link href="/">
          <a>LaBonneBagnole</a>
        </Link>
      </div>

      {/* Bouton hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 md:hidden focus:outline-none"
        aria-label="Ouvrir le menu"
      >
        <span
          className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
            menuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition duration-300 ease-in-out ${
            menuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
            menuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Menu déroulant */}
      <nav
        className={`absolute top-full right-6 mt-2 w-48 bg-gray-800 rounded shadow-lg transition-transform transform origin-top-right ${
          menuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col py-2">
          <li>
            <Link href="/compte">
              <a className="block px-4 py-2 hover:bg-gray-700">Compte</a>
            </Link>
          </li>
          <li>
            <Link href="/profil">
              <a className="block px-4 py-2 hover:bg-gray-700">Profil</a>
            </Link>
          </li>
          <li>
            <Link href="/annonces/mes-annonces">
              <a className="block px-4 py-2 hover:bg-gray-700">Mes annonces</a>
            </Link>
          </li>
          <li>
            <Link href="/estimer">
              <a className="block px-4 py-2 hover:bg-gray-700">Estimation voiture</a>
            </Link>
          </li>
          <li>
            <Link href="/reglages">
              <a className="block px-4 py-2 hover:bg-gray-700">Réglages</a>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu classique sur grand écran */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/compte">
          <a className="hover:underline">Compte</a>
        </Link>
        <Link href="/profil">
          <a className="hover:underline">Profil</a>
        </Link>
        <Link href="/annonces/mes-annonces">
          <a className="hover:underline">Mes annonces</a>
        </Link>
        <Link href="/estimer">
          <a className="hover:underline">Estimation voiture</a>
        </Link>
        <Link href="/reglages">
          <a className="hover:underline">Réglages</a>
        </Link>
      </nav>
    </header>
  );
        }
