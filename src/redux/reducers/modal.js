const initialState = {
  isOpen: false
}

const modal = (state = initialState, actions) => {
  switch (actions.type) {
    case 'MODAL:OPEN':
      return {
        ...state,
        isOpen: true
      }
    case 'MODAL:CLOSED':
      return {
        ...state,
        isOpen: false
      }
    default:
      return state
  }
}

export default modal