package com.saram.web.serviceImpl;

import java.util.List;

import com.saram.web.domain.EmployeeDTO;
import com.saram.web.service.EmployeeService;

import org.springframework.stereotype.Service;

/**
 * EmployeeServiceImpl
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Override
    public void addEmployee(EmployeeDTO employee) {

    }

    @Override
    public List<EmployeeDTO> findEmployees() {
        return null;
    }

    @Override
    public List<EmployeeDTO> findEmployeesByOption(EmployeeDTO option) {
        return null;
    }

    @Override
    public EmployeeDTO findEmployeeByEmployeeId(String employeeId) {
        return null;
    }

    @Override
    public void updateEmployee(EmployeeDTO employee) {

    }

    @Override
    public void deleteEmployee(EmployeeDTO employee) {

    }

    
}