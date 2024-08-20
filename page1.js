
function product(name,category,price,images){
 
    return {
        name:name,
   category:category,
      price:price,
     images:images,}
    }
function Makeshop(name){
    const shop = {
      shopName: name,
      list:[],
    addproduct:addProduct,
    display:displayProduct
    
    
    
    
    
    
    
    }
    return shop;
}
    var addProduct=function(name,category,price,images){
        item=product(name,category,price,images)
this.list.push(item);
    }

    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i]);
        }
      }
    var displayProduct=function(){
        
        each(this.list, function(item, index) {
                $('#market').append(`
                  <div class="item">
                    <h2>${item.name}</h2>
                    <p>Price: $${item.price}</p>
                    <p>Category: ${item.category}</p>
                    <img id="pic" src="${item.images[0]}" alt="${this.item.name} image 1" />
                  </div>
                `);
              });
        
    




    }
    




