export const GetFollowering = (userId: number) => {
  return fetch(`http://localhost:8088/followRelationships?userId=${userId}&_expand=follow&_expand=user`, {
    cache: "no-store",
  }).then((res) => res.json())
}

export const GetFollowers = (userId: number) => {
  return fetch(`http://localhost:8088/followRelationships?followId=${userId}&_expand=follow&_expand=user`, {
    cache: "no-store",
  }).then((res) => res.json())
}

export const GetAllFollowing = () => {
  return fetch(`http://localhost:8088/followRelationships`, {
    cache: "no-store",
  }).then((res) => res.json())
}

export const FollowUser = async (follow: Follow) => {
  return fetch(`http://localhost:8088/followRelationships`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(follow),
    cache: "no-store", // Though POSTs usually aren't cached, it's still okay to include.
  }).then((res) => res.json())
}

export const deleteFollow = (id: number) => {
  return fetch(`http://localhost:8088/followRelationships/${id}`, {
    method: "DELETE",
    cache: "no-store",
  })
}
