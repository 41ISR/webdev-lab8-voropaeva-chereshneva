import axios from "axios"
import { useUserStore } from "../store/useUserStore"

const apiInstance = axios.create({
    baseURL: "https://improved-space-enigma-x5v6p7gr9pp4h646-3001.app.github.dev/api",
    headers: {
        "Content-Type": "application/json"
    }
})

apiInstance.interceptors.request.use((config) => {
    const { session } = useUserStore.getState()

    if (session?.token) {
        config.headers.Authorization = `Bearer ${session.token}`
    }

    return config
})

const getItems = async () => {
    const data = await apiInstance.get("/items")
    return data.data
}

const registerUser = async (user) => {
    const res = await apiInstance.post("/auth/register", user)
    return res
}

const loginUser = async (user) => {
    const res = await apiInstance.post("/auth/login", user)
    return res
}

const sendItems = async (items) => {
    const res = await apiInstance.post("/items", items)
    return res
}

const deleteItems = async (id) => {
    const res = await apiInstance.delete(`/items/${id}`)
    return res
}

!!!!!!
// ТУТ КОРОЧЕ АЙПИШКУ ТЫКНУТЬ, НА НЕЕ ПЕРЕНАПРАВ В ДИТЕЛЕС И ТАМ amount КЛЮЧ И ЗНАЧЕНИЕ ТО ШО ПОЛЬЗОВАТЕЛЬ ВВЕЛ
!!!!!!!

// const reportItems = async (id) => {
//     const res = await apiInstance.post(`/messages/${id}/report`)
//     return res
// }

// const likeMessage = async (id) => {
//     const res = await apiInstance.post(`/messages/${id}/like`)
//     return res
// }

export const api = {
    // likeMessage,
    // reportMessage,
    // getMessages,
    registerUser,
    loginUser,
    sendItems,
    deleteItems,
    getItems
}