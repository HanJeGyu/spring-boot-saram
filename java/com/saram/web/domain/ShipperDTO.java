package com.saram.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * ShipperDTO
 */
@Data
@Component
@Lazy
public class ShipperDTO {
    private String shipperId, shipperName, phone;
}
