// function func(){
// let search_text = prompt("Son kiriting")
// let search_value = document.getElementById("search_value");
// let position = search_text.search(search_value);
// console.log(search_text.search("Lorem"))






search.addEventListener("click"), () => 
func() 
function find(e) {
    let result = document.getElementById('result');
    console.log(e);
    let searchValue = e.target.value;
    let text = document.getElementById("box").innerText;
    let hasInText = text.includes(searchValue);
    if(hasInText) {
      result.style.background = 'green';
      result.innerText = "Ushbu so'z matnda mavjud"
    } else {
      result.style.background = 'red';
      result.innerText = "Ushbu so'z matnda mavjud emas"
    }
  }

// let num = 0
// while (num < 5){
//     ++num
//     console.log(num)
    
// }


// for (let num = 0 ; num < 10 ; num++){
//     console.log(num)
// }

// function num() {
//       for (son = 1; son <= 50; son++) {
//           if (son % 2 == 0) {
//               console.log(son + ' = bu juft son')
//           } else {
//               console.log(son + ' = bu toq son')
//           }
//       }
//   }
// num()