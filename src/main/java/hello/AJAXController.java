package hello;

import java.util.List;
import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicLong;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AJAXController {

    Logger logger = LoggerFactory.getLogger(GreetingController.class);

    @Autowired
    OrderJDBCTemplate orderJDBCTemplate;

    @Autowired
    TransactionJDBCTemplate transactionJDBCTemplate;

    @Autowired
    ProductJDBCTemplate productJDBCTemplate;

    @Autowired
    ShippmentJDBCTemplate shippmentJDBCTemplate;

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                String.format(template, name));
    }

    @RequestMapping("/greeting_string")
    public String greetingString(@RequestParam(value="name", defaultValue="World") String name) {
        return name;
    }

    @RequestMapping(value="/ajaxOrderURL") //, method=RequestMethod.GET
    public Order ajaxOrder(@RequestParam(value="id", required=true) int id) {
        System.out.println("----Listing Order with ID = "+id+" from ajaxOrderURL-----" );
        Order ajaxOrder = orderJDBCTemplate.getOrder(id);
        //model.addAttribute("order_label", order);

        return ajaxOrder;
    }

    @RequestMapping(value="/ajaxTransListURL") //, method=RequestMethod.GET
    public List ajaxTransList(@RequestParam(value="id", required=true) int id) {
        System.out.println("----Listing Transactions with Order ID = " + id + " from ajaxTransListURL-----");
        List<Transaction> ajaxTransList = transactionJDBCTemplate.getListTransactions(id);

        for(int a=0; a<ajaxTransList.size(); a++) {
            String product_name = productJDBCTemplate.getProduct(ajaxTransList.get(a).getProduct_id()).getProduct_name();
            ajaxTransList.get(a).setProduct_name(product_name);
            System.out.println("----Listing Product Name for each Transaction = "+ajaxTransList.get(a).getProduct_name()+" from ajaxTransListURL-----" );
        }
        return ajaxTransList;
    }

    @RequestMapping(value="/ajaxUpdateShippmentURL") //, method=RequestMethod.GET
    public int ajaxUpdateShippment(@RequestParam(value="shippmentDetails", required=true) String shippmentDetails) {
        String[] details = shippmentDetails.split(",");
        //shipNo, weight, products, cosumer, client, modifiedBy, ModifiedTime, enabled, order_id
        String shipNo = new String();
        String weight = new String();
        String products = new String();
        String cosumer = new String();
        String client = new String();
        String modifiedBy = new String();
        String ModifiedTime = new String();
        String enabled = new String();
        String order_id = new String();
        System.out.println("----Update Shippment Details with Order ID = " + order_id + " from ajaxUpdateShippmentURL-----");
        int result = shippmentJDBCTemplate.insertNewShippment(shipNo, weight, products, cosumer, client, modifiedBy, ModifiedTime, enabled, order_id);

        return result;
    }
}