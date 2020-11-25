const initialState = {
  data: null
}

const user = (state = initialState, actions) => {
  switch (actions.type) {
    case 'USER:SET_DATA':
      return {
        ...state,
        data: actions.payload
      }
    case 'USER:REMOVE_DATA':
      return {
        ...state,
        data: null
      }
    default:
      return state
  }
}

export default user