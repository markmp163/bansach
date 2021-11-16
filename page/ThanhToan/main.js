let cartElement = document.querySelector("#cart");
let listInLocal = JSON.parse(localStorage.getItem("item"));

const hanlderClickX = (x) => {
  listInLocal = listInLocal.filter((t) => t.id !== x);
  localStorage.setItem("item", JSON.stringify(listInLocal));
  console.log(listInLocal);
  let html = "";
  cartElement.innerHTML = '';
  listInLocal.forEach(x => {
    return (html += `
        <tr class="style__row">
            <td>
                <div class="detailSP" style="margin: 20px">
                    <button class="btn__delete" onclick='hanlderClickX(${x.id})' style="margin-right: 12px">X</button>
                    <img src="${x.linkImg}" alt="this is image" class="img-cart" />
                    <p>${x.title}</p>
                </div>
            </td>
            <td></td>
            <td>sdsd</td>
            <td>sds</td>
        </tr>
        `);
  })
  cartElement.innerHTML = html;
};

console.log(listInLocal);

const handlerAddQuantity = (o) =>{
  console.log(11111,o)
}

let html = "";
listInLocal.forEach((x) => {
  return (html += `
        <tr class="style__row">
            <td>
                <div class="detailSP" style="margin: 20px">
                    <button class="btn__delete" onclick='hanlderClickX(${x.id})' style="margin-right: 12px">X</button>
                    <img src="${x.linkImg}" alt="this is image" class="img-cart">
                    <p>${x.title}</p>
                </div>
            </td>
            <td>${x.cost}</td>
            <td>
              <div style="display: flex; justify-content: center;>              ">
                <div class="bd-sl" onclick='handlerAddQuantity(${x.quantity})'>-</div>
                <div><input type="number" min="1" value="${x.quantity}"style="width: 25px;"/></div>
                <div class="bd-sl">+</div>
              </div>
            </td>
            <td>
              <div style="text-align: center;">
                ${x.quantity * x.cost}
              </div>
            </td>
        </tr>
        `);
});

cartElement.innerHTML = html;

