let db;
let products = document.querySelector(".offermain");
let btn = document.getElementById("pagi")

let page = 1
let limit =4

async function getProducts() {
    let skip = (page - 1) * limit;
  const response = await axios.get(`https://655c8cc025b76d9884fd82fe.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
  const data = await response.data;
  db = data;
  db.map((item) => {
    const myDiv = document.createElement("div");
    myDiv.className= "box"
    myDiv.innerHTML = `
    <img src="${item.image}" alt="">
    <h1>${item.title}</h1>
    <p>${item.name}</p>
    <p>${item.price}</p>
    <button onclick="addToCart(${item.id})"> Add to Cart</button>
    `;
    products.appendChild(myDiv);
  });
}

btn.addEventListener('click', getProducts)


function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item=>item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
   
  }

window.onload = () =>{
    getProducts()
  }





  const btnn = document.getElementById('btn')
  const inp = document.getElementById('inpp')
  const list = document.querySelector('.list')
  const abc = document.getElementById('abc')
  const abcd = document.getElementById('abcd')
  
  function getPro () {
    abcd.style.display='none'
      axios.get('https://655c8cc025b76d9884fd82fe.mockapi.io/products')
      .then(res => {
          db = res.data
          console.log(db);
          db.map(item => {
              const div = document.createElement('div')
              div.innerHTML = `
              <p>${item.title}</p>`
              list.appendChild(div)
          })
      })
  }
  getPro()
  
  
  function getbyname () {
      abcd.innerHTML = ``
      abc.style.display='none'
      abcd.style.display='block'
  
      axios.get(`https://655c8cc025b76d9884fd82fe.mockapi.io/products?title=${inpp.value}`)
      .then(res => {
          db = res.data
          db.map(item => {
              const div = document.createElement('div')
              div.innerHTML = `
              <p>${item.title}</p>`
              abcd.append(div)
          })
  
      })
  }
  btnn.addEventListener('click', getbyname)
