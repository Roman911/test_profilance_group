const Actions = {
  setData: (data) => {
    return {
      type: 'USER:SET_DATA',
      payload: data
    }
  },
  removeData: () => {
    return {
      type: 'USER:REMOVE_DATA'
    }
  }
}

export default Actions