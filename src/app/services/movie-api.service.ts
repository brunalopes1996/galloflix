import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.themoviedb.org/3';
  options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWVkMTFlMDBlMTk1NzRmY2RjNzYzN2M3N2IxYjFkZSIsIm5iZiI6MTc0Njc0OTk4NC4yNDg5OTk4LCJzdWIiOiI2ODFkNGEyMDE4MTRmN2Q4MTZjMWUwMjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JTANee0ldumFS5owbnAdEi0Py0mnTL6_MckbUXuk0YM'
  }
};

// Banner de Midias da Semana
bannerApiData(): Observable<any> {
  return this.http.get(`${this.baseUrl}/trending/all/week?language=pt-br`, this.options);
}

}
