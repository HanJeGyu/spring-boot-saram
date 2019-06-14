package com.saram.web.mapper;

import java.util.List;

import com.saram.web.domain.SupplierDTO;

import org.springframework.stereotype.Repository;

/**
 * SupplierMapper
 */
@Repository
public interface SupplierMapper {
    public void insertSupplier(SupplierDTO supplier);
    public List<SupplierDTO> selectSuppliers();
    public List<SupplierDTO> selectSuppliersByOption(SupplierDTO option);
    public SupplierDTO selectSupplierBySupplierId(String supplierId);
    public void updateSupplier(SupplierDTO supplier);
    public void deleteSupplier(SupplierDTO supplier);
    
}