package com.saram.web.controller;

import com.saram.web.domain.EmployeeDTO;
import com.saram.web.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * employeeController
 */
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired EmployeeService employeeService;
    @Autowired EmployeeDTO employee;

}