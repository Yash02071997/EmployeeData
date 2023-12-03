package com.luv2code.ecommerce.dao;



import com.luv2code.ecommerce.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "employees", path = "employees")
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {
    // Additional methods specific to Employee entity can be declared here if needed
}
