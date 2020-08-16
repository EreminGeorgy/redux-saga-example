const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  age: 20,
  fetching: false,
  dog: null,
  error: null
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "AGE_UP_ASYNC":
      return { ...state, fetching: true, error: null, age: state.age + action.value };

    case "AGE_DOWN":
      return { ...state, fetching: true, error: null, age: state.age - action.value };

    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
};

export default reducer;
