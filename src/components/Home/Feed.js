import React from "react";
import { useSelector } from "react-redux";

const Feed = ({ posts, isLoading }) => {
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);


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
          console.log("Post ID:", post.posterId, "UsersData:", usersData); // Debug

          // Vérifie si usersData est bien un tableau et contient des utilisateurs
          const user = Array.isArray(usersData) && usersData.length > 0
            ? usersData.find((u) => u._id === post.posterId)
            : null;

          return (
            <div
              key={post._id}
              className="mb-6 border-b border-gray-300 pb-4 last:border-b-0"
            >
              <h3 className="font-bold text-lg">
                {user ? user.name : <span className="text-gray-500">Utilisateur inconnu</span>}
              </h3>
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
