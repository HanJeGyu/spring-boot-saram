package com.saram.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * CustomerDTO
 */
@Data
@Component  // 타입을 정의?
@Lazy       // 설거지?
public class CustomerDTO {
    private String customerId, customerName, password, ssn, phone, address, postalcode, photo;
}