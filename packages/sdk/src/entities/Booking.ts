import { EBookingStatus } from "../types";

export class BookingEntity {
    // Question: Should i initialize ?
    id: number = 0;
    status: EBookingStatus = EBookingStatus.DRAFT;
  
    constructor(partial: Partial<BookingEntity>) {
      Object.assign(this, partial);
    }
}
  