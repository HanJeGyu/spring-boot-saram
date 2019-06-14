package com.saram.web.mapper;

import java.util.List;

import com.saram.web.domain.OrderDTO;

import org.springframework.stereotype.Repository;

/**
 * OrderMapper
 */
@Repository
public interface OrderMapper {
    public void insertOrder(OrderDTO order);
    public List<OrderDTO> selectOrders();
    public List<OrderDTO> selectOrdersByOption(OrderDTO option);
    public OrderDTO selectOrderByOrderId(String orderId);
    public void updateOrder(OrderDTO order);
    public void deleteOrder(OrderDTO order);
    
}