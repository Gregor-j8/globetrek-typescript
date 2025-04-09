export const getUserByEmail = (email: string) => {
  return fetch(`http://localhost:8088/users?email=${email}`, {
    cache: "no-store"
  }).then((res) => res.json())
}

export const GetUserById = (userId: number) => {
  return fetch(`http://localhost:8088/users?id=${userId}`, {
    cache: "no-store"
  }).then((res) => res.json())
}

export const GetUserProfile = (userId: number) => {
  return fetch(`http://localhost:8088/users?id=${userId}`, {
    cache: "no-store"
  }).then((res) => res.json())
}

export const GetEditProfile = (userId: number) => {
  return fetch(`http://localhost:8088/users?id=${userId}`, {
    cache: "no-store"
  }).then((res) => res.json())
}

export const createUser = (user: User) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    cache: "no-store"
  }).then((res) => res.json())
}

export const updateUser = (user: User) => {
  return fetch(`http://localhost:8088/users/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    cache: "no-store"
  }).then((res) => res.json())
}

export const deleteProfile = (userId: number) => {
  return fetch(`http://localhost:8088/users/${userId}`, {
    method: "DELETE",
    cache: "no-store"
  }).then((res) => res.json())
}
