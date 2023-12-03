import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/common/employee';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {
  firstName: string = '';
  lastName: string = '';
  searchResults: Employee[] = [];
   employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }
  
searchEmployees() {

  if (this.firstName && this.lastName) {
    this.employeeService.searchEmployees(this.firstName, this.lastName)
      .subscribe(data => {
        this.searchResults = data;
  // Check if data is received correctly
      });
  }
}

  filterEmployeesByRole(role: string) {
    switch (role.toLowerCase()) {
      case 'ceo':
        // If 'ceo', display all employees
        this.searchResults = this.employees;
        break;
      case 'cto':
        // If 'cto', filter employees by HR role
        this.searchResults = this.employees.filter(emp => emp.role === 'hr');
        break;
      case 'hr':
        // If 'hr', filter employees by Full Time role
        this.searchResults = this.employees.filter(emp => emp.role === 'fl');
        break;
      // Add more cases for other roles if needed
      default:
        this.searchResults = [];
        break;
    }
  }


}

