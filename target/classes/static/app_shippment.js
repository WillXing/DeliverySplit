    //////////////////////////////////////////////////////////////////////
    //Below are Global Variables to  js functions in this app_shippment.js
    //////////////////////////////////////////////////////////////////////
    var shipsheet = "";
    var id=0;
    var shipID = "shipment"+id;
    var counter = 0;
    //////////////////////////////////////////////////////////////////////
    function alertingMessage() {
        alert("i am here for you!!");
    }
    function forEach(list,callback) {
      var length = list.length;
      for (var n = 0; n < length; n++) {
        callback.call(list[n]);
      }
    }
    function stopSumbitOnEter() {
        var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
         if ( chCode == 13 ) {
            event.preventDefault();
            alert("testsing");
            return false;
         }
    }

    function calculateAssignedQTY() {
        alert("i am here");
        var starter = "#63";
        var second = $(starter).text();
        var third = document.getElementById("63");
        //var list = document.getElementsByClassName(shipQTY_id);
        forEach(list, function(shipQTY_id){
            //trans_dropdown_potions = trans_dropdown_potions + "<option value="+this.product_name+">"+this.product_name+"</option>";
            //$('#mtable thead tr>td>input:last')

            alert("get saveShippmentOrder: " + shipQTY_id + " | list iterm value: " + this.value);
        });
        //$(".assinged").val();


    }

    function saveShippmentOrder(shipQTY_id) {
        //shipNo; weight, products, consumer_id, customer_id, modifiedBy, modifiedTime, is_enabled, order_id
        var shipNo = $('.shipNumber').val();
        var is_enabled = 1;
        var order_id = order.id;
        alert("shipNo: "+shipNo + "||" + is_enabled + "||" + order_id);
        var list = document.getElementsByClassName(shipQTY_id);
        forEach(list, function(){
            //trans_dropdown_potions = trans_dropdown_potions + "<option value="+this.product_name+">"+this.product_name+"</option>";
            alert("get saveShippmentOrder: " + shipQTY_id + " | list iterm value: " + this.value);
        });

        //Below: Ajax call to update Shippment.
        var testURL    = "/ajaxUpdateShippmentURL?shippmentDetails="+shippmentDetails;
            /*$.ajax({url: testURL, success: function(result){
            trans = result;

            var content = null;
            var counter = 0;
            var rows    = 3;
            var left    = rows - (counter/rows);
            content = '<tr class='+id+"_details"+'><td colspan=9><table class="table table-striped table-hover"><tr><th colspan=2>Production</th><th>QTY</th><th colspan=2>Production</th><th>QTY</th><th colspan=2>Production</th><th>QTY</th></tr>';

            forEach(trans, function(){
                if(counter==0) {
                    content = content + '<tr>';
                }else if(counter!=0 && (counter%rows)==0){
                    content = content + '</tr><tr>';
                }
                content = content +'<td colspan=2>'+this.product_name+"</td><td><span id="+this.id+">0</span>"+" / "+this.quantity+'</td>';
                if(counter == trans.length-1) {
                    for (x = 0; x < left; x++) {
                        content = content + "<td></td><td></td>";
                    }
                    content = content + '</tr>';
                }
                counter++;
            });

            content = content + '<tr><td colspan=9><div>'; //<td class="add"> ADD </td>
//          content = content + '<button type="button" class="addShippment">button here testing </button>';
            content = content + '<p class="addShippmenta">button here testing </p>';
            content = content + '<div class=testingDIV>This is a paragraph with little content.This is another small paragraph.</div>'

            content = content + '</div></td></tr>';


            content = content + '</table>';
            content = content + '</td></tr>';
            $(content).insertAfter(("."+parent));
        }});*/
    }

    /*function getNumberOfCategories() {
       var noCat = $('.numberOfCategories').text();
       return (noCat);
    }*/

    $( document ).ready(function() {
        $('input').change(function() {
            //alert("i am here now");
        });

        $('#icol').click(function(){
            //if($('#col').val()){
                $('#mtable tr').append($("<td>"));
                //$('#mtable thead tr>td:last').html(('<input name="shipNumber" class="shipNumber" type="text" size="20" onkeypress="stopSumbitOnEter()" onclick="saveShippmentOrder()"/>'));
                $('#mtable thead tr>td:last')  .html('<input name=shipNumber class=shipNumber_'+counter+' type=text size=20 onkeypress=stopSumbitOnEter()  onclick=saveShippmentOrder(shipQTY_'+counter+') />');
                //$('#mtable thead tr>td:last').html("<input name=shipNumber class=shipNumber type=text size=20 onkeypress=stopSumbitOnEter() onclick=saveShippmentOrder('shipQTY_"+counter+"') />");
                //$('#mtable thead tr>td:last').html($('<input name=shipNumber class=shipNumber_'+counter+' type=text size=20 onkeypress=stopSumbitOnEter() onchange=calculateAssignedQTY() onclick=saveShippmentOrder(shipQTY_'+counter+') />'));
                $('#mtable thead tr>td:last input').val($('#col').val());
                $('#col').val("");
                //$('#mtable thead tr>td:last').html(('<input type="text"/>');
                //$('#mtable tbody tr:last td:first input').val($('#row').val());
                $('#mtable tbody tr').each(function(){$(this).children('td:last').append($('<input name="shipQTY_'+counter+'" class="shipQTY_'+counter+'" type="number" value="0" size="4" onchange=calculateAssignedQTY(shipQTY_'+counter+') onkeypress="stopSumbitOnEter()">'))});
                counter++;
            //}else{alert('Enter Text');}
        });
        /*$('#irow').click(function(){
            //if($('#row').val()){
                $('#mtable tbody').append($("#mtable tbody tr:last").clone());
                //$('#mtable tbody').append($("#mtable tbody tr:last").append("<td><input type='text'/></td>"));
                //$('#mtable tbody tr:last td:first').html(('<input type="text"/>').val($('#row').val()));
                $('#mtable tbody tr:last td:first').html(('<input name="shipQTY" type="text" onkeypress="stopSumbitOnEter()"/>'));
                $('#mtable tbody tr:last td:first input').val($('#row').val());
            //}else{alert('Enter Text');}
        });*/

    /*    $('.addShippmentButton').click(function() {
            ///////////////////////////////////////////////////////////////////////////////////////
            var trans_dropdown_potions = "";

            forEach(trans, function(){
                trans_dropdown_potions = trans_dropdown_potions + "<option value="+this.product_name+">"+this.product_name+"</option>";
            });
            var trans_dropdown = "<select>" + trans_dropdown_potions + "</select>";

            //        forEach(trans, function(){
            //            trans_content = trans_content + trans_dropdown + "</br>";
            //        });
            var trans_content = "<table><tr><td><div>"+ trans_dropdown +"</div></td><td><input type='number' size='4' id='trans_qty' name='trans_qty' min='1' max='10'/></td></tr></table>";
            temp = trans_content;
            //////////////////////////////////////////////////////////////////////////////////////

            var order_content = "<div class='divSelection' id="+shipID+" onlick='addTransactionSelection()'><input type='text' name='shippmentNumnber' onkeypress='stopSumbitOnEter()'/><input type='radio' name='shippmentDiv' checked/></div>";

            $( "div.orderShippment" ).append(order_content);

            id++;
            shipID = "shipment"+id;
        });
        $('.addProductButton').click(function() {
            shipsheet = $("input:checked").parent();
            $(shipsheet).append(temp);
        });*/ //addShippmentButton() and addProductButton() commented and disabled with addTransactionSelection()

    });

    /*
    function addTransactionSelection() {
            //alert("message: " + message+"||"+order.total_price+"||"+order.id);
            //alert("transactions: "+trans.length+"||");

            var trans_dropdown_potions = "";

            forEach(trans, function(){
                trans_dropdown_potions = trans_dropdown_potions + "<option value="+this.product_name+">"+this.product_name+"</option>";
            });
           var trans_dropdown = "<select>" + trans_dropdown_potions + "</select>";

    //        forEach(trans, function(){
    //            trans_content = trans_content + trans_dropdown + "</br>";
    //        });
            var trans_content = "<table><tr><td><div>"+ trans_dropdown +"</div></td></tr></table>";
            var temp = trans_content;
    };
    */
