package hello;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Richard on 22/04/2016.
 */

@Service
public class ShippmentJDBCTemplate implements ShippmentDao {

    @Autowired
    private JdbcTemplate jdbcTemplateObject;

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    public List<Shippment> getListShippments(int order_id) {
        String SQL = "select * from webpos_shippment where order_id = ?";

        List <Shippment> Shippments = jdbcTemplateObject.query(SQL, new Object[] {order_id},
                new ShippmentMapper());
        return Shippments;
    }

    public int insertNewShippment(String shipNo, String weight, String products, String consumer_id, String customer_id, String modifiedBy, String ModifiedTime, String is_enabled , String order_id) {

        String SQL = "INSERT INTO Customers (shipNo, weight, products, consumer_id, customer_id, modifiedBy, modifiedTime, is_enabled, order_id) VALUES (?,?,?,?,?,?,?,?,?,?)";
        return jdbcTemplateObject.update(SQL,
                shipNo, weight, products, consumer_id, customer_id, modifiedBy, ModifiedTime, is_enabled, order_id);
    }
}