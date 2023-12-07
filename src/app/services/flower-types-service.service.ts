import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private baseUrl = 'https://localhost:7199'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/Product`);
  }

  // Ajoutez d'autres méthodes pour les opérations CRUD ou d'autres appels API
}