function handlerClickHatHang(x) {
  if (localStorage.getItem("item")) {
    let list = JSON.parse(localStorage.getItem("item"));
    x.quantity = 1;
    list.push(x);
    localStorage.setItem("item", JSON.stringify(list));
  } else {
    localStorage.setItem("item", []);
    x.quantity = 1;
    let list = [];
    list.push(x);
    localStorage.setItem("item", JSON.stringify(list));
  }
}
