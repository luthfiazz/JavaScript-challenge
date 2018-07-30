<script>

    var shoppingCart = [];

   
    function displayShoppingCart(){
        var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
    
        while(orderedProductsTblBody.rows.length>0) {
            orderedProductsTblBody.deleteRow(0);
        }

      
        var cart_total_price=0;
      
        for(var product in shoppingCart){
            
            var row=orderedProductsTblBody.insertRow();
          
            var cellName = row.insertCell(0);
            var cellDescription = row.insertCell(1);
            var cellPrice = row.insertCell(2);
            cellPrice.align="right";
           
            cellName.innerHTML = shoppingCart[product].Name;
            cellDescription.innerHTML = shoppingCart[product].Description;
            cellPrice.innerHTML = shoppingCart[product].Price;
            cart_total_price+=shoppingCart[product].Price;
        }
      
        document.getElementById("cart_total").innerHTML=cart_total_price;
    }


    function AddtoCart(name,description,price){
      
       var singleProduct = {};
      
       singleProduct.Name=name;
       singleProduct.Description=description;
       singleProduct.Price=price;
  
       shoppingCart.push(singleProduct);
       
       displayShoppingCart();

    }  


   
</script>




<table cellpadding="4" cellspacing="4" border="1">
    <tr>
        <td valign="top">
            <table cellpadding="4" cellspacing="4" border="0">
                <thead>
                    <tr>
                        <td colspan="2">
                            Products for sale
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Table
                        </td>
                        <td>
                            <input type="button" value="Add to cart" onclick="AddtoCart('Table','Big red table',50)"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Door
                        </td>
                        <td>
                            <input type="button" value="Add to cart" onclick="AddtoCart('Door','Yellow Door',150)"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Car
                        </td>
                        <td>
                            <input type="button" value="Add to cart" onclick="AddtoCart('Ferrari','Ferrari S234',150000)"/>
                        </td>
                    </tr>
                </tbody>

            </table>
        </td>
        <td valign="top">
            <table cellpadding="4" cellspacing="4" border="1" id="orderedProductsTbl">
                <thead>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Description
                        </td>
                        <td>
                            Price
                        </td>
                    </tr>
                </thead>
                <tbody id="orderedProductsTblBody">

                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3" align="right" id="cart_total">

                        </td>
                    </tr>
                </tfoot>
            </table>
        </td>
    </tr>
</table>