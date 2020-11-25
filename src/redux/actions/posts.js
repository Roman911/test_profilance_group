const Actions = {
  setPosts: (data) => {
    return {
      type: 'POST:SET_POSTS',
      payload: data
    }
  },
  createPost: (data) => {
    return {
      type: 'POST:CREATE_POST',
      payload: data
    }
  },
  approvePost: (data) => {
    return {
      type: 'POST:APPROVE_POST',
      payload: data
    }
  },
  removePost: (data) => {
    return {
      type: 'POST:REMOVE_POST',
      payload: data
    }
  }
}

export default Actions