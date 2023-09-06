import api from "../../../../utils/http";
import deserialize from "../../../../utils/deserialize";

export default async function Get() {
    const response = await api.get(`/api/me/bookings`)
    const deserialized = deserialize(response.data)
    return deserialized?.data
}