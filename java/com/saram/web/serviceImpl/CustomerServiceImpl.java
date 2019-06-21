package com.saram.web.serviceImpl;

import java.util.List;

import com.saram.web.common.util.PageProxy;
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
        customerMapper.insertCustomer(customer);
    }

    @Override
    public List<CustomerDTO> findCustomers(PageProxy pxy) {
        return customerMapper.selectCustomers(pxy);
    }

    @Override
    public List<CustomerDTO> findCustomersByOption(CustomerDTO option) {
        return null;
    }

    @Override
    public CustomerDTO findCustomerByCustomerId(String customerId) {
        return customerMapper.selectCustomerByCustomerId(customerId);
    }

    @Override
    public void updateCustomer(CustomerDTO customer) {
        customerMapper.updateCustomer(customer);
    }

    @Override
    public void deleteCustomer(CustomerDTO customer) {
        customerMapper.deleteCustomer(customer);
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