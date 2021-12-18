export const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      if (action.payload.email && action.payload.uid) {
        console.log("CurrentUser ==>", action.payload);
        return { ...state, user: action.payload };
      } else {
        console.log(`invalid data in USER_LOGIN reducer `, action.payload);
        return state;
      }
    }

    case "USER_LOGOUT": {
      return { ...state, user: null }; // set this to null on purpose, do not change
    }

    default: {
      return state;
    }
  }
};
