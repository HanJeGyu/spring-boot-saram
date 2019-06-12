package com.saram.web.domain;

import lombok.Data;

/**
 * ProductDTO
 */
@Data
public class ProductDTO {
    private String product_id, product_name, supplier_id, category_id, unit, price, photo;
    
}