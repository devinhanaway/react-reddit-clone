export const SET_POSTS = "SET_POSTS"

export function setPosts(posts){
  return {
    type: SET_POSTS,
    posts
  }
}

export function fetchPosts() {
  return dispatch => {
    fetch('http://localhost:8080/api/posts')
      .then(res => res.json())
      .then(data => dispatch(setPosts(data.posts)))
  }
}
