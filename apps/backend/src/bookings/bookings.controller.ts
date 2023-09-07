import { Controller, Get, Param } from '@nestjs/common';

// Question: import with brackets or without?
import {BookingEntity} from '@acme/sdk/src/entities/Booking';
import { Get as GetBookings} from '@acme/sdk/src/services/saas/me/bookings/index';
import { Get as GetBooking} from '@acme/sdk/src/services/saas/me/bookings/[id]/index';

@Controller('bookings')
export class BookingsController {

    @Get()
    async findAll(): Promise<BookingEntity[]> {
        const response = await GetBookings()
        const data = new Array<BookingEntity>()

        // Question: Serializing Here ?
        // Question 2: Should reponse be typed? ignore any here
        for (const booking of response as any) {
            const bookingItem = new BookingEntity({id: booking.id})
            data.push(bookingItem)
        }

        return data
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<BookingEntity> {
        // ignore any for while
        const booking: any = await GetBooking({ id })
        const data = new BookingEntity({id: booking.id, status: booking.status})

        return data
    }
}
