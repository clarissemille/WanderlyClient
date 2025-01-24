import React from "react";

const Feed = ({ posts, isLoading }) => {
  if (isLoading) {
    return <p className="text-gray-500 text-center">Chargement des publications...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Fil d'actualité</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">Aucune publication à afficher.</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id} // Utilisation de l'ID MongoDB comme clé unique
            className="mb-6 border-b border-gray-300 pb-4 last:border-b-0"
          >
            <h3 className="font-bold text-lg">{post.posterId || "Utilisateur inconnu"}</h3>
            <p className="text-sm text-gray-500 mb-2">{post.location}</p>
            <p className="text-gray-700 mb-4">{post.message}</p>
            {post.picture && (
              <img
                src={`${process.env.REACT_APP_API_URL}${post.picture}`}
                alt="Post"
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Feed;
