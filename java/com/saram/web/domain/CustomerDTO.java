package com.saram.web.domain;

import lombok.Data;

/**
 * CustomerDTO
 */
@Data
public class CustomerDTO {
    private String customerId, customerName, password, ssn, phone, address, postalcode, photo;
}