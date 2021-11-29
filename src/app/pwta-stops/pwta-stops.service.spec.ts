import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { defer } from "rxjs";
import { IpwtaStopApiResponse } from "./interfaces/ipwta-stop-api-response";

import { PwtaStopsService } from './pwta-stops.service';

describe('PwtaStopsService', () => {
  let service: PwtaStopsService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PwtaStopsService(httpClientSpy);
  });

  it('should return expected routes (HttpClient called once)', (done: DoneFn) => {
    const expectedRoutes: IpwtaStopApiResponse =
      {data: [{ id: 'place-brntn', attributes: {name: 'Braintree'}}, { id: 'place-qamnl', attributes: {name: 'Quincy Adams'}}]};

    httpClientSpy.get.and.returnValue(asyncData(expectedRoutes));

    service.getStops('test').subscribe(
      routes => {
        expect(routes).toEqual(expectedRoutes, 'expected routes');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    service.getStops('test').subscribe(
      routes => done.fail('expected an error, not routes'),
      error  => {
        expect(error.error).toContain('test 404 error');
        done();
      }
    );
  });
});

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

