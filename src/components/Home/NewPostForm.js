import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../../actions/post.actions";

const NewPostForm = () => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const userData = useSelector((state) => state.userReducer);
  const error = useSelector((state) => state.errorReducer.postError);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (location || description || file) {
      const data = new FormData();
      data.append("posterId", userData._id); // L'identifiant de l'utilisateur
      data.append("posterName", userData.name); // Inclure le nom de l'utilisateur
      data.append("location", location); // Lieu
      data.append("message", description); // Descriptif
      if (file) {
        data.append("file", file); // Fichier image
      }

      await dispatch(addPost(data)); // Action pour ajouter un post
      dispatch(getPosts()); // Rafraîchir les posts
      handleCancel(); // Réinitialiser les champs
    } else {
      alert("Veuillez remplir tous les champs avant de publier !");
    }
  };

  const handleCancel = () => {
    setLocation("");
    setDescription("");
    setFile(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">Créer un nouveau post</h2>
      <form onSubmit={handleSubmit}>
        {/* Lieu */}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Lieu (Pays)
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Entrez le pays"
            required
          />
        </div>

        {/* Descriptif */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Descriptif
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Décrivez votre post"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Photo */}
        <div className="mb-4">
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Photo
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            accept="image/*"
          />
        </div>

        {/* Boutons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="w-full bg-customTeal text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition"
          >
            Publier
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
          >
            Annuler
          </button>
        </div>

        {/* Erreurs */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default NewPostForm;
