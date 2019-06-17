package com.saram.web.controller;

import com.saram.web.domain.CustomerDTO;
import com.saram.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * CustomerController
 */
@RestController // 
public class CustomerController {
    
    @Autowired CustomerService customerService;
    @Autowired CustomerDTO customer;

    @RequestMapping("/count")
    public String count() {
        System.out.println("customerController.count()");
        int count = customerService.countAll();
        System.out.println("고객수 : " + count);
        return count + "";
    }

    @RequestMapping("/login/{customerId}/{password}")
    public String login(@PathVariable("customerId")String id, @PathVariable("password")String pass){
        System.out.println("AJAX ID : "+id);
        System.out.println("AJAX PWD : "+pass);
        customer.setCustomerId(id);
        customer.setPassword(pass);
        return (customerService.login(customer)!=null)?"SUCCESS":"FAIL";
    }
}