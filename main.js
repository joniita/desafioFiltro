const URL = "https://fakestoreapi.com/products";

document.addEventListener("DOMContentLoaded", () => {

    const botonFiltrar = document.getElementById("rangeFilterCount");
    const botonLimpiar = document.getElementById("clearRangeFilter");


    fetch(URL)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            localStorage.setItem("resultFetch", JSON.stringify(data));
            productList(data);
        })



    function productList(data) {
        let htmlContentToAppend = "";
        data.forEach(product => {
            htmlContentToAppend += `
                   <div class="list-group-item">
                       <div>
                           <div>
                               <div>
                                   <h4>${product.title} </h4>
                                   <p> $ ${product.price}</p>
                               </div>
                               <p>${product.description}</p>
                           </div>
                       </div>
                   </div>                                                                               
                   `
            document.getElementById("info").innerHTML = htmlContentToAppend;
        })
    };



    botonFiltrar.addEventListener("click", (event) => {
        event.preventDefault();
        const precioMin = parseInt(document.getElementById("rangeFilterCountMin").value);
        const precioMax = parseInt(document.getElementById("rangeFilterCountMax").value);

        let products = JSON.parse(localStorage.getItem("resultFetch"));
        //console.log(products);
       
            let htmlContentToAppend = "";
            products.forEach(product => {
                if (precioMin <= product.price && product.price <= precioMax) {
                    

                        htmlContentToAppend += `
                               <div class="list-group-item">
                                   <div>
                                       <div>
                                           <div>
                                               <h4>${product.title} </h4>
                                               <p> $ ${product.price}</p>
                                           </div>
                                           <p>${product.description}</p>
                                       </div>
                                   </div>
                               </div>                                                                               
                               `
                        document.getElementById("info").innerHTML = htmlContentToAppend;
                }

           })


           botonLimpiar.addEventListener("click", function() {
            location.reload();
           })
    }); 
});



