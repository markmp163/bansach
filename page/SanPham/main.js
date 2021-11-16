import { listBooks } from "../common/data.js";

console.log(listBooks,111)

const listBook = document.querySelector("#listBook");
let lists = "";
listBooks.forEach((x) => {
   (lists += `
     <li style="text-align: center;">
       <div style="padding: 10px; max-width: 200px">
         <img src="${x.linkImg}" alt="this is image of cai om dieu ki" style="width: 150px">
         <p class="title1">${x.title}</p>
         <p class="title1">Giá: ${x.cost}</p>
         <div style="display: flex; justify-content: center;">
           <button class="btn__item">Mua ngay</button>
         </div>
       </div>
     </li>
  `);
});

listBook.innerHTML = lists;





