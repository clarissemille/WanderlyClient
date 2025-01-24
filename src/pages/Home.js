import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import NewPostForm from "../components/Home/NewPostForm";
import Feed from "../components/Home/Feed";
import { getPosts } from "../actions/post.actions";

const Home = () => {
  const posts = useSelector((state) => state.postReducer); // Récupère les posts depuis Redux
  const dispatch = useDispatch();

  // Charger les posts au montage
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="bg-bgBlue min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Formulaire pour un nouveau post */}
        <NewPostForm />

        {/* Fil d'actualité */}
        <Feed posts={posts} isLoading={posts.length === 0} />
      </div>
    </div>
  );
};

export default Home;
