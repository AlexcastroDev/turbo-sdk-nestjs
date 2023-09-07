import { Test, TestingModule } from '@nestjs/testing';
import { BookingsController } from './bookings.controller';
import MockAdapter from 'axios-mock-adapter'
import api from '@acme/sdk/src/utils/http';
import * as responseBookingsMock from './__mocks__/bookings_response.json'
import * as responseBookingMock from './__mocks__/booking_response.json'
import { EBookingStatus } from '@acme/sdk/src/types';

const mock = new MockAdapter(api)
mock.onGet(`/api/me/bookings/1`).reply(200, responseBookingMock)
mock.onGet(`/api/me/bookings`).reply(200, responseBookingsMock)

describe('BookingsController', () => {
  let controller: BookingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingsController],
    }).compile();

    controller = module.get<BookingsController>(BookingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all bookings', async () => {
    const response = await controller.findAll()
    expect(response[0].id).toEqual('3')
    expect(response[0].status).toEqual(EBookingStatus.DRAFT)
  })

  it('should return a booking', async () => {
    const response = await controller.findOne('1')
    expect(response.id).toEqual('9')
    expect(response.status).toEqual(EBookingStatus.DRAFT)
  })
});
