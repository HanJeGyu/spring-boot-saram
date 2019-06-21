package com.saram.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.saram.web.common.util.PageProxy;
import com.saram.web.common.util.Printer;
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
    @Autowired PageProxy pxy;
    @Autowired Printer p;
    
    @PostMapping("")
    // public @ResponseBody(생략됨) CustomerDTO login(@PathVariable("customerId")String id, @PathVariable("password")String pass){
    // HashMap JSON과 호환
    public HashMap<String, Object> join(@RequestBody CustomerDTO param){
        customerService.addCustomer(param);
        HashMap<String, Object> map = new HashMap<>();
        map.put("result", "SUCCESS");
        return map;
    }

    @GetMapping("/count")
    public String count() {
        System.out.println("customerController.count()");
        int count = customerService.countAll();
        p.accept("람다 고객수 : " + count);
        System.out.println("고객수 : " + count);
        return count + "";
    }

    @GetMapping("/page/{pageNum}")
    public HashMap<String, Object> customerList(@PathVariable String pageNum){
        HashMap<String, Object> map = new HashMap<>();
        map.put("totalCount",customerService.countAll());
        map.put("page_num", pageNum);
        map.put("page_size", "5");
        map.put("block_size", "5");
        pxy.execute(map);

        map.put("list", customerService.findCustomers(pxy));
        map.put("pxy", pxy);
        return map;
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
        customerService.updateCustomer(param);
        //HashMap<String, Object> map = new HashMap<>();
        //map.put("result", "SUCCESS");
        return customerService.findCustomerByCustomerId(param.getCustomerId());
    };

    @DeleteMapping("/{customerId}")
    public HashMap<String, Object> delete(@RequestBody CustomerDTO param) {
        customerService.deleteCustomer(param);
        HashMap<String, Object> map = new HashMap<>();
        map.put("result", "SUCCESS");
        return map;
    };
}