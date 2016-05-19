package hello;


import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Richard on 21/04/2016.
 */

public class ShippmentMapper implements RowMapper<Shippment> {
    public Shippment mapRow(ResultSet rs, int rowNum) throws SQLException {
        Shippment shippment = new Shippment();
        shippment.setId(rs.getInt("id"));
        shippment.setCreated_by(rs.getString("created_by"));
        shippment.setModified_by(rs.getString("modified_by"));
        shippment.setModified_time(rs.getDate("modified_time"));
        shippment.setCreated_time(rs.getDate("created_time"));
        shippment.setCustomer_id(rs.getInt("customer_id"));
        shippment.setConsumer_id(rs.getInt("consumer_id"));
        shippment.setOrder_id(rs.getInt("orderid"));
        shippment.setShipNo(rs.getString("shipNo"));
        shippment.setWeight(rs.getFloat("weight"));
        shippment.setProducts(rs.getString("products"));
        shippment.setIs_enabled(rs.getBoolean("is_enabled"));
        return shippment;
    }
}