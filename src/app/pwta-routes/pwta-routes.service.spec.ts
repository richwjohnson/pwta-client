import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { defer } from "rxjs";
import { IpwtaRoute } from "./interfaces/ipwta-route";

import { PwtaRoutesService } from './pwta-routes.service';

describe('PwtaRoutesService', () => {
  let service: PwtaRoutesService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PwtaRoutesService(httpClientSpy);
  });

  it('should return expected routes (HttpClient called once)', (done: DoneFn) => {
    const expectedRoutes: IpwtaRoute[] =
      [{ id: 'Red', attributes: {color:'DA291C', long_name: 'Red Line'}}, { id: 'Orange', attributes: {color: "ED8B00", long_name: 'Orange Line'}}];

    httpClientSpy.get.and.returnValue(asyncData(expectedRoutes));

    service.getRoutes().subscribe(
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
    service.getRoutes().subscribe(
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
