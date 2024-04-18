import path from "../helper/path"
import { api } from "./Api"

const getUser = async() => {
  const response = await api.get(path.user.get.url)
  return response.data
}

const addUser = (values) => {
  const response = api.post(values)
  return response
}

const editUser = (id, values) => {
  const response = api.put(values)
  return response
}

const deleteUser = (id) => {
  const response = api.delete(id)
  return response
}

export {
  getUser,
  addUser,
  editUser,
  deleteUser
}