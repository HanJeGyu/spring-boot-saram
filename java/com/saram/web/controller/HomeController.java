package com.saram.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * HomeController
 */
@Controller
public class HomeController {

    @RequestMapping("/")
    public String index() {
        System.out.println("루트 URL");
        return "index";
    }
}