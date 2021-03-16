const INITIAL_STATE = {
    aboutList: [],
};
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = INITIAL_STATE, { type, data}) => {
    switch (type) {
      case 'SET_ABOUT':
        return { ...state, data };

      default: return state;
    }
  };
  