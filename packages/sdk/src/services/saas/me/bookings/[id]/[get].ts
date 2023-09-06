import api from "../../../../../utils/http";
import deserialize from "../../../../../utils/deserialize";

interface GetProps {
    id: string
}

export default async function Get({id}: GetProps) {
    const response = await api.get(`/api/me/bookings/${id}`)
    const deserialized = deserialize(response.data)
    return deserialized.data
}