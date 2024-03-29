package com.saram.web.service;

import java.util.List;

import com.saram.web.common.util.PageProxy;
import com.saram.web.domain.CustomerDTO;

import org.springframework.stereotype.Component;

/**
 * CustomerService
 */
@Component
public interface CustomerService {
    public void addCustomer(CustomerDTO customer);
    public List<CustomerDTO> findCustomers(PageProxy pxy);
    public List<CustomerDTO> findCustomersByOption(CustomerDTO option);
    public CustomerDTO findCustomerByCustomerId(String customerId);
    public void updateCustomer(CustomerDTO customer);
    public void deleteCustomer(CustomerDTO customer);
    public int countAll();
    public CustomerDTO login(CustomerDTO customer);
    
}