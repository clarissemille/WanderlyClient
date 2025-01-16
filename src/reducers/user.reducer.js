const initialState = {
    // Définissez ici l'état initial de l'utilisateur
    isAuthenticated: false,
    user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      
      default:
        return state; // Assurez-vous de toujours retourner l'état par défaut
    }
  };
  
  export default userReducer;
  