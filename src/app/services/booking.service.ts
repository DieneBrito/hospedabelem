import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  [x: string]: any;
  servidorSimulado = 'https://developers.booking.com/_mock/metasearch/connect-api/open-api/'
  private bookingApiUrl = 'https://developers.booking.com/_mock/metasearch/connect-api/open-api/demand-api-v2-compatible/hotels'; // Replace with actual API endpoint

  constructor(
    private http: HttpClient,
    
  ) { }

  getHotels(apiKey: string, options: {
    extras?: string;
    hotel_ids?: string;
    language?: string;
    offset?: number;
    rows?: number;
  }): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json, application/xml',
      Authorization: `Bearer ${apiKey}`
    });

    return this.http.get(this.bookingApiUrl, {
      headers,
      params: { ...options }
    }).pipe(
      map(response => response),
      catchError(error => this.handleError(error))
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
