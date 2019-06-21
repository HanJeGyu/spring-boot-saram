package com.saram.web.controller;

import com.saram.web.common.util.Printer;
import com.saram.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * HomeController
 */
@Controller // SOAP, 첫 페이지는 불러와야 되니까 
public class HomeController {
    @Autowired  CustomerService customerService; // 자동으로 연결? -> 스레드 
    @Autowired Printer p;
    
    @RequestMapping("/")
    public String index() {
        System.out.println("루트 URL");
        int count = customerService.countAll();
        p.accept("고객수 : " + count);
        return "index";
    }
}