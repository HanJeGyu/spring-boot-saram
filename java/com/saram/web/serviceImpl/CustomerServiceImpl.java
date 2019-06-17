package com.saram.web.serviceImpl;

import java.util.List;

import com.saram.web.domain.CustomerDTO;
import com.saram.web.mapper.CustomerMapper;
import com.saram.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * CustomerServiceImpl
 */
@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired CustomerMapper customerMapper;

    @Override
    public void addCustomer(CustomerDTO customer) {

    }

    @Override
    public List<CustomerDTO> findCustomers() {
        return null;
    }

    @Override
    public List<CustomerDTO> findCustomersByOption(CustomerDTO option) {
        return null;
    }

    @Override
    public CustomerDTO findCustomerByCustomerId(String customerId) {
        return null;
    }

    @Override
    public void updateCustomer(CustomerDTO customer) {

    }

    @Override
    public void deleteCustomer(CustomerDTO customer) {

    }

    @Override
    public int countAll() {
        return customerMapper.selectCount();
    }

    @Override
    public CustomerDTO login(CustomerDTO customer) {
        System.out.println("아이디 : "+ customer.getCustomerId());
        System.out.println("비밀번호 : "+ customer.getPassword());
        return customerMapper.login(customer);
    }

}