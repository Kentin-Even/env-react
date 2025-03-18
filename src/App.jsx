/**
 * @file App.jsx - Composant principal de l'application
 * @author Votre Nom <votre.email@example.com>
 * @description Ce fichier contient le composant racine de l'application React
 */

import React from "react"

/**
 * Composant principal de l'application.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 *
 * @returns {JSX.Element} Le rendu du composant App contenant un titre et un paragraphe
 */
const App = () => {
  /**
   * Rendu du composant App
   */
  return (
    <div>
      {/* Titre principal avec des classes Tailwind */}
      <h1 className="text-red-500 text-3xl">Mon Application React</h1>
      {/* Description du composant */}
      <p>Ceci est un composant JSX</p>
    </div>
  )
}

export default App
