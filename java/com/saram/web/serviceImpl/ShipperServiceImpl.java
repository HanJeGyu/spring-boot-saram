package com.saram.web.serviceImpl;

import java.util.List;

import com.saram.web.domain.ShipperDTO;
import com.saram.web.service.ShipperService;

import org.springframework.stereotype.Service;

/**
 * ShipperServiceImpl
 */
@Service
public class ShipperServiceImpl implements ShipperService {

    @Override
    public void addShipper(ShipperDTO shipper) {

    }

    @Override
    public List<ShipperDTO> findShippers() {
        return null;
    }

    @Override
    public List<ShipperDTO> findShippersByOption(ShipperDTO option) {
        return null;
    }

    @Override
    public ShipperDTO findShipperByShipperId(String shipperId) {
        return null;
    }

    @Override
    public void updateShipper(ShipperDTO shipper) {

    }

    @Override
    public void deleteShipper(ShipperDTO shipper) {

    }

    
}