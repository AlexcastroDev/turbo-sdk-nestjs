export interface IDeserializedPayload<T = unknown> {
    data: T
}

export const enum EBookingStatus {
    DRAFT = 'drafting',
}