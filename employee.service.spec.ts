import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service'; // Import the EmployeeService

describe('EmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService); // Use EmployeeService
    expect(service).toBeTruthy();
  });
});
