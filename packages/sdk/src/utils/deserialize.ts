// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as deserializeJsonApi from 'deserialize-json-api'
import { IDeserializedPayload } from '../types'

function deserialize<T = unknown>(data: unknown): IDeserializedPayload<T> | null {
    try {
        return deserializeJsonApi.deserialize(data)
    } catch (error) {
        return null
    }
}

export default deserialize