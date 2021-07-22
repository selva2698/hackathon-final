async function getdata()
{
    const apidata = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json",{
        method:"GET"
    });
    const data = await apidata.json();
    loaddata(data);
}
function loaddata(data)
{
    const datalist = document.createElement("div");
    datalist.className = "data-list";
    data.forEach((makeup)=>{
    const datacontainer = document.createElement("div");
    datacontainer.className="data-container";
    datacontainer.innerHTML=
        `
        <img class="get-image"  src=${makeup.image_link}> </img>
        <div class ="get-name">Name: ${makeup.name}</div>
        <div class ="get-brand">Brand: ${makeup.brand}</div>
        <div class ="get-price">Price:$${makeup.price}</div>
        <button class ="get-plink" onclick="${makeup.product_link}">BUY NOW</button>
        `;
        datalist.append(datacontainer);
    });
    document.body.append(datalist);
}
getdata();