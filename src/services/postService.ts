export const getPosts = () => {
    return fetch(`http://localhost:8088/posts?_expand=user&`).then((res) => res.json())
  }

  export const deletePost = (id: number ) => {
    return fetch(`http://localhost:8088/posts/${id}`, {
      method: "DELETE",
    })};

export const getPostsDetails = (postId: number) => {
    return fetch(`http://localhost:8088/posts?id=${postId}&_expand=user&`).then((res) => res.json())
  }
export const editPosts = (postId: number) => {
    return fetch(`http://localhost:8088/posts?id=${postId}`).then((res) => res.json())
  }

export const getPostMarker = () => {
    return fetch(`http://localhost:8088/posts?`).then((res) => res.json())
  }
export const getUserPostMarker = (userId: number) => {
    return fetch(`http://localhost:8088/posts?userId=${userId}`).then((res) => res.json())
  }

  export const getUserPosts = (userId: number) => {
    return fetch(`http://localhost:8088/posts?userId=${userId}&_expand=user&`).then((res) => res.json())
  }

  export const updatePosts = async(post: Post) => {
    return fetch(`http://localhost:8088/posts/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }).then((res) => res.json())}

  export const createPost = async(post: Post) => {
    return fetch(`http://localhost:8088/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }).then((res) => res.json())}