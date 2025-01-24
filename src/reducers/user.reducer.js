import { FOLLOW_USER, GET_USER, UNFOLLOW_USER, UPDATE_BIO, UPLOAD_PICTURE } from "../actions/user.actions";

const initialState = {
    // Définissez ici l'état initial de l'utilisateur
    isAuthenticated: false,
    user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER:
        return action.payload;
      case UPLOAD_PICTURE:
        return {
          ...state,
          picture: action.payload,
        }
      case UPDATE_BIO:
        return {
          ...state,
          bio: action.payload
        }
        case FOLLOW_USER:
          return {
            ...state,
            following: [action.payload.idToFollow, ...state.following]
          }
          case UNFOLLOW_USER:
            return {
              ...state,
              following: state.following.filter((id) => id !== action.payload.idToUnfollow)
            }
      ;
      default:
        return state; // Assurez-vous de toujours retourner l'état par défaut
    }
  };
  
  export default userReducer;
  