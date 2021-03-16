const INITIAL_STATE = {
    userName: '',
    password: ''
};
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = INITIAL_STATE, { type, payload}) => {
    switch (type) {
      case 'UPDATE_USER_INFO':
        return { ...state, ...payload };
  
      case 'DELETE_USER':
        return INITIAL_STATE;
  
      default: return state;
    }
  };
  