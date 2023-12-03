import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../common/employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.employees)
    );
  }

 searchEmployees(firstName: string, lastName: string): Observable<Employee[]> {
    const url = `${this.baseUrl}?firstName=${firstName}&lastName=${lastName}`;
    return this.httpClient.get<GetResponse>(url).pipe(
      map(response => response._embedded.employees)
    );
  }

}
interface GetResponse {
  _embedded: {
    employees: Employee[];
  }
}
