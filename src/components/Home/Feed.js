import React from "react";
import { useSelector } from "react-redux";

const Feed = ({ posts, isLoading }) => {
  const usersData = useSelector((state) => state.usersReducer);

  // Affiche un indicateur de chargement si les posts sont en train de se charger
  if (isLoading) {
    return <p className="text-gray-500 text-center">Chargement des publications...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Fil d'actualité</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">Aucune publication à afficher.</p>
      ) : (
        posts.map((post) => {
          // Vérifie si usersData est un tableau avant d'utiliser find
          const user = Array.isArray(usersData)
            ? usersData.find((user) => user._id === post.posterId)
            : null;

          return (
            <div
              key={post._id} // Utilisation de l'ID MongoDB comme clé unique
              className="mb-6 border-b border-gray-300 pb-4 last:border-b-0"
            >
              {/* Affiche le pseudo ou "Utilisateur inconnu" */}
              <h3 className="font-bold text-lg">{user ? user.name : "Utilisateur inconnu"}</h3>
              <p className="text-sm text-gray-500 mb-2">{post.location}</p>
              <p className="text-gray-700 mb-4">{post.description}</p>
              {post.picture && (
                <img
                  src={`${process.env.REACT_APP_API_URL}${post.picture}`}
                  alt="Post"
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Feed;
