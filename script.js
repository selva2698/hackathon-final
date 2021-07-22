async function getdata()
{
    const apidata = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json",{
        method:"GET"
    });
    const data = await apidata.json();
    loaddata(data);
}
function loaddata(data)
{
    const datalist = document.createElement("div");
    datalist.className = "data-list";
    for(let i=0; i<500; i++) {
        const datacontainer = document.createElement("div");
        datacontainer.className="data-container";
        datacontainer.innerHTML=
        `
        <img class="get-image" src=${data[i].image_link}></img>
        <div class ="get-name">Name: ${data[i].name}</div>
        <div class ="get-brand">Brand: ${data[i].brand}</div>
        <div class ="get-price">Price:$${data[i].price}</div>
        <button class ="get-plink" onclick="${data[i].product_link}">BUY NOW</button>
        `;
        datalist.append(datacontainer);
    }
    document.body.append(datalist);
}
getdata();