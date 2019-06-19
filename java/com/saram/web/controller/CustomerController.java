package com.saram.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.saram.web.domain.CustomerDTO;
import com.saram.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * CustomerController
 */
@RestController // restful 방식
@RequestMapping("/customers")
public class CustomerController {
    
    @Autowired CustomerService customerService;
    @Autowired CustomerDTO customer;
    
    @PostMapping("")
    // public @ResponseBody(생략됨) CustomerDTO login(@PathVariable("customerId")String id, @PathVariable("password")String pass){
    // HashMap JSON과 호환
    public HashMap<String, Object> join(@RequestBody CustomerDTO param){
        System.out.println(param.getCustomerId());
        System.out.println(param.getPassword());
        System.out.println(param.getCustomerName());

        customerService.addCustomer(param);

        HashMap<String, Object> map = new HashMap<>();
        map.put("result", "SUCCESS");
        return map;
    }

    @GetMapping("/count")
    public String count() {
        System.out.println("customerController.count()");
        int count = customerService.countAll();
        System.out.println("고객수 : " + count);
        return count + "";
    }

    @GetMapping("")
    public String customerList(){
        List<CustomerDTO> list = new ArrayList<>();
        list = customerService.findCustomers();
        for(CustomerDTO a : list)
            System.out.println(a.getCustomerId());
        return "";
    }

    @GetMapping("/{customerId}/{password}")
    public CustomerDTO login(@PathVariable("customerId")String id, @PathVariable("password")String pass){
        customer.setCustomerId(id);
        customer.setPassword(pass);
        return customerService.login(customer);
    };

    @GetMapping("/{customerId}")
    public CustomerDTO findByCustomerId(@PathVariable String customerId) {
        System.out.println("GET 연결 ID : " + customerId);
        return customerService.findCustomerByCustomerId(customerId);
    };

    @PutMapping("/{customerId}")
    public CustomerDTO modify(@RequestBody CustomerDTO param) {
        System.out.println(param.getCustomerId());
        System.out.println(param.getCustomerName());
        customerService.updateCustomer(param);
        //HashMap<String, Object> map = new HashMap<>();
        //map.put("result", "SUCCESS");
        return customerService.findCustomerByCustomerId(param.getCustomerId());
    };

    @DeleteMapping("/{customerId}")
    public HashMap<String, Object> delete(@RequestBody CustomerDTO param) {
        System.out.println("ID"+param.getCustomerId());
        customerService.deleteCustomer(param);
        HashMap<String, Object> map = new HashMap<>();
        map.put("result", "SUCCESS");
        return map;
    };
}