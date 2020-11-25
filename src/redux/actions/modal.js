const Actions = {
  openModal: () => {
    return {
      type: 'MODAL:OPEN'
    }
  },
  closedModal: () => {
    return {
      type: 'MODAL:CLOSED'
    }
  }
}

export default Actions