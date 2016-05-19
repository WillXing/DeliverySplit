package hello;

import java.util.List;

/**
 * Created by Richard on 20/04/2016.
 */

public interface ShippmentDao {
    /**
     * This is the method to be used to list down
     * a record from the Student table corresponding
     * to a passed student id.
     */
    public List<Shippment> getListShippments(int shippment_id);
    public int insertNewShippment(String shipNo, String weight, String products, String consumer, String client, String modifiedBy, String ModifiedTime, String enabled, String orderid);
}