import storeUsers from "../data/users.json"

export function getUser(id) {
    return storeUsers.find(User => User.id === id)
}

export function getUsers() {
    return storeUsers
}