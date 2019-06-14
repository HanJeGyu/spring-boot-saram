package com.saram.web.mapper;

import java.util.List;

import com.saram.web.domain.EmployeeDTO;

import org.springframework.stereotype.Repository;

/**
 * EmployeeMapper
 */
@Repository
public interface EmployeeMapper {
    public void insertEmployee(EmployeeDTO employee);
    public List<EmployeeDTO> selectEmployees();
    public List<EmployeeDTO> selectEmployeesByOption(EmployeeDTO option);
    public EmployeeDTO selectEmployeeByEmployeeId(String employeeId);
    public void updateEmployee(EmployeeDTO employee);
    public void deleteEmployee(EmployeeDTO employee);
    
}