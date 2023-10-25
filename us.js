fetch('https://fakestoreapi.com/products').then((data)=>{
        // console.log(data);
        return data.json();
}).then((completedata)=>{
    console.log(completedata[2].title);
    // document.getElementById("root")
    // .innerHTML=completedata[2].title
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="card">
        <h2 class="title">${values.title}</h2>
        <img class="image" src="${values.image}" alt="img">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    })
    document.getElementById("cards").innerHTML=data1
}).catch((err)=>{
    console.log(err)
})