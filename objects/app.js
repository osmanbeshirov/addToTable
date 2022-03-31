const text1 = document.getElementById("name");
const text2 = document.getElementById("surName");
const text3 = document.getElementById("age");
const cedvel = document.getElementById("cedvel");
let i = 1;

const user = [];

function myFunk() {
  let ad = text1.value;
  let soyad = text2.value;
  let yas = text3.value;
  

  const obj = { id: i ,name: ad, surName: soyad, age: yas , addId(){
       
       return i++;
  } };
 
  obj.addId()
  user.push(obj);

  
 

  cedvel.innerHTML += `<tr>
  <th scope="row">${obj.id}</th>
  <td>${obj.name}</td>
  <td>${obj.surName}</td>
  <td>${obj.age}</td>
</tr>`;

  console.log(user);

  text1.value = "";
  text2.value = "";
  text3.value = "";
}
