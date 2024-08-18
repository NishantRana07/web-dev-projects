const button=document.querySelector('.navbar button');
const nav=document.querySelector('.right');
let cartarr=[];
var add='';
let price=0;
button.addEventListener('click',function()
{
    nav.classList.toggle('show');
})

/*for courses*/
var courses=[
    {url:'https://media.istockphoto.com/id/1149101430/photo/c-text.webp?b=1&s=612x612&w=0&k=20&c=LUqEMDc6AzAUep7iQrA2I1UYH4tdUGq_ksyEnmHM0s0=',title:'C++ Course',description:'Ultimate C++ course',price:'69'},
    {url:'https://media.istockphoto.com/id/1335247101/photo/computer-with-elements-of-program-code-on-the-screen-and-the-inscription-java-and-a-keyboard.webp?b=1&s=612x612&w=0&k=20&c=ZgjX06zhkmg3WSnQmKvgGYNTfI6bXvHUE8Teo7ZTI_g=',title:'java Course',description:'Ultimate Java course',price:'69'},
    {url:'https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',title:'Web dev Course',description:'Ultimate Web development course course',price:'69'},
    {url:'https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.webp?b=1&s=612x612&w=0&k=20&c=kpQCCaxIActGQP9ToVrFN3qP55MMXA4Sdnomymdr_64=',title:'javascript course',description:'Ultimate javascript course',price:'69'},
];

function addproducts()
{
    courses.forEach((obj,index)=>{
        add+=`<div class="card">
  <div class="card-img">
    <img src="${obj.url}" style="width:100%;object-fit:fill">
  </div>
  <div class="card-info">
    <p class="text-title">${obj.title} </p>
    <p class="text-body">${obj.description}</p>
  </div>
  <div class="card-footer">
  <span class="text-title">₹${obj.price}</span>
  <div class="card-button btn" value=${index}>
    <svg class="svg-icon" viewBox="0 0 20 20">
      <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    </svg>
  </div>
</div></div>`;
    });
    document.querySelector('.products').innerHTML=add;
}
addproducts();

/* Cart handling */
var count=0;
var buttn=document.querySelectorAll('.btn');

function cart() {
    buttn.forEach((obj)=>{
        obj.addEventListener('click', function (x) {
            count++;
            document.querySelector('.btn-cart').setAttribute('data-quantity', count);
            let index=obj.getAttribute('value');
            cartarr.push(courses[index]);
            productadded();
            //add the price to price var
            price+=parseFloat(courses[index].price);
            //add the content to slider
            addcontent();  
        });
        })
}

// Call the cart function to set up the event listener
cart();

//activating slider
const slider = document.querySelector('.slider');
const cartbutton=document.querySelector('.btn-cart');
cartbutton.addEventListener('click',function(){
  console.log('clicked cart button');
  
  slider.classList.toggle('activated');
})

// Select the slider container
function addcontent()
{
let prod='';
cartarr.forEach((obj,index)=>{
  prod+=`<div class="cart-cards">

          <div class="prod-image" style="background-image: url('${obj.url}');"></div>

          <div class="prod-info">
              <div class="prod-title">${obj.title}</div>
              <div class="prod-desc">${obj.description}</div>
              <div class="prod-price">₹${obj.price}</div>
          </div><!--prod info-->

          <div class="prod-del"><i class="fa-solid fa-xmark" data-index='${index}'></i></div>

      </div><!--cards-->

`;
document.querySelector('.checkout .amount').innerHTML=`<p>₹${price}</p>`;
});
document.querySelector('.master').innerHTML=prod;
console.log('products added');


//to provide delete funtionality to all delete buttons
document.querySelectorAll('.prod-del i').
forEach(obj => 
{
  obj.addEventListener('click',function()
{
  idx=obj.getAttribute('data-index');
  console.log('clicked the del button'+idx);
  deleteProduct(idx);
})
});
}

//delete the product from the cart 
function deleteProduct(index) {
  index = parseInt(index);
  price -= parseFloat(cartarr[index].price);
  document.querySelector('.checkout .amount').innerHTML=`<p>₹${price}</p>`;
  cartarr.splice(index, 1);
  count--;
  document.querySelector('.btn-cart').setAttribute('data-quantity', count);
  addcontent(); 
}


//alert
function productadded()
{
  let alert=document.querySelector('.alert');
  console.log('clicked');
    alert.classList.add("show");
    alert.classList.remove('hide');
    alert.classList.add("showAlert");
    setTimeout(function(){
      alert.classList.remove("showALert");
      alert.classList.remove("show");
      alert.classList.add("hide");
    },2000);
  document.querySelector('.close-btn').click(function(){
    alert.classList.remove("show");
    alert.classList.add("hide");
  });

}


/* Mentors */
let personInfo=[
  {url:'images/1st-person.jpg',title:'Front-End Dev',name:'Nishant Rana'},
  {url:'images/2nd-person.avif',title:'Back-End Dev',name:'Sanjeevani'},
  {url:'images/3rd-person.jpeg',title:'Cloud Engineer',name:'Akash'},
  {url:'images/4th-person.avif',title:'Data Scientist',name:'Sunita Sharma'},
  {url:'images/5th-person.png',title:'HR Manager',name:'Ankita'},
];

function addMentors()
{
  let info='';
  personInfo.forEach(obj=>
    info+= `<div class="person">
      <div class="person-border-top">
      </div>
      <div class="img">
        <img src='${obj.url}' style="height:100%;border-radius:16px">
      </div>
      <span>${obj.name}</span>
      <p class="job">${obj.title}</p>
      <button> Contact
      </button>
    </div>`
  )
  document.querySelector('.mentors').innerHTML=info;
}
addMentors();
