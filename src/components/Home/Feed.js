import React, { useEffect, useState } from "react"; 
import { useSelector } from "react-redux";
import pp from "../../assets/images/pp.webp";
import { isEmpty } from "lodash";

const Feed = ({ posts }) => {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.usersReducer) || [];

  useEffect(() => {
    if (!isEmpty(usersData)) {
      setIsLoading(false);
    }
  }, [usersData]);

  if (!Array.isArray(posts)) {
    return <p className="text-gray-500 text-center">Aucune publication à afficher.</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Fil d'actualité</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">Aucune publication à afficher.</p>
      ) : (
        posts.map((post) => {
          const user = usersData.find((u) => u._id === post.posterId) || {};

          return (
            <div key={post._id} className="mb-6 border-b border-gray-300 pb-4 last:border-b-0 flex items-start space-x-4">
              {/* Image de profil */}
              <img
                src={user.picture || pp}
                alt="Avatar"
                className="w-12 h-12 rounded-full object-cover border border-gray-300"
              />
              {/* Bloc d'informations */}
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">{user.name || "Utilisateur inconnu"}</h3>
                <p className="text-sm text-gray-500">{post.location}</p>
                <p className="text-gray-700 mb-2">{post.description}</p>
                {post.picture && (
                  <img
                    src={`${process.env.REACT_APP_API_URL}${post.picture}`}
                    alt="Post"
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Feed;
