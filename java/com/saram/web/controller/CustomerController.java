package com.saram.web.controller;

import com.saram.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * CustomerController
 */
@RestController // 
public class CustomerController {
    @Autowired CustomerService customerService;
    @RequestMapping("/count")
    public String count() {
        System.out.println("customerController.count()");
        int count = customerService.countAll();
        System.out.println("고객수 : " + count);
        return count + "";
    }
}