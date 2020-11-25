const initialState = {
  posts: null
}

const posts = (state = initialState, actions) => {
  switch (actions.type) {
    case 'POST:SET_POSTS':
      return {
        ...state,
        posts: actions.payload
      }
    case 'POST:CREATE_POST':
      return {
        ...state,
        posts: [...state.posts, actions.payload]
      }
    case 'POST:APPROVE_POST':
      return {
        ...state,
        posts: state.posts.map(item => {
          if (item.id !== actions.payload) {
            return item
          } else {
            const post = item
            post.approve = true
            return post
          }
        })
      }
    case 'POST:REMOVE_POST':
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== actions.payload)
      }
    default:
      return state
  }
}

export default posts