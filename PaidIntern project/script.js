const button=document.querySelector('.navbar button');
const nav=document.querySelector('.right');
let cartarr=[];
var add='';
let price=0;

/* To toggle the cart button */
button.addEventListener('click',function()
{
    nav.classList.toggle('show');
})
const slider = document.querySelector('.slider');
const cartButton = document.querySelector('.btn-cart');

// Toggle slider when clicking the cart button
cartButton.addEventListener('click', function(event) {
  console.log('clicked cart button');
  slider.classList.toggle('activated');
});
document.querySelector('.body').addEventListener('click',function(event)
{
  slider.classList.remove('activated');
})

/* for text change */
const words = ["Education", "Learning", "Knowledge", "Growth"];
let currentWordIndex = 0;
let currentCharIndex = 0;
const wordElement = document.getElementById("changingWord");
let isDeleting = false;
let typingSpeed = 100; // Adjust typing speed (milliseconds)

function typeWord() {
    const currentWord = words[currentWordIndex];

    // If deleting, decrease the length of text; else, increase it
    if (isDeleting) {
        currentCharIndex--;
        wordElement.textContent = currentWord.substring(0, currentCharIndex);
    } else {
        currentCharIndex++;
        wordElement.textContent = currentWord.substring(0, currentCharIndex);
    }

    // If the word is completely typed out
    if (!isDeleting && currentCharIndex === currentWord.length) {
        // Pause before starting to delete
        setTimeout(() => {
            isDeleting = true;
        }, 1000); // Pause before deleting
    }

    // If the word is completely deleted
    if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length; // Move to next word
    }

    // Adjust speed for typing vs deleting
    const speed = isDeleting ? typingSpeed / 2 : typingSpeed;

    // Recursively call `typeWord` with a small delay
    setTimeout(typeWord, speed);
}

// Start typing the words
typeWord();


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
    <p class="text-title">${obj.title}</p>
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
  {url:'images/5th-person.png',title:'HR Manager',name:'Ankita'}
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

/* What makes us deffernt section  */

const features = [
  {
    title: "Personalized Learning",
    subtitle: "Customized learning paths tailored to individual goals."
  },
  {
    title: "Expert Instructors",
    subtitle: "Industry professionals with real-world experience."
  },
  {
    title: "Interactive Courses",
    subtitle: "Hands-on projects and live sessions for practical learning."
  },
  {
    title: "Flexible Scheduling",
    subtitle: "Learn at your own pace with 24/7 course access."
  },
  {
    title: "Career Support",
    subtitle: "Guidance and resources for career advancement."
  },
  {
    title: "Cutting-Edge Content",
    subtitle: "Courses updated with the latest industry trends."
  },
  {
    title: "Global Community",
    subtitle: "Collaborate with peers and experts worldwide."
  }
];

function addfeatures()
{
  let content=''
  features.forEach(obj=>
  {
    content+=`<div class="cardn">
          <div class="title">
            <h3>${obj.title}</h3>
          </div>
          <div class="sub">
            <h4>${obj.subtitle}</h4>
          </div>
        </div>`;
  }
  )

  document.querySelector('.cardnwrapper').innerHTML=content;
}
addfeatures();

/* Javascript for moving these cards */

// script.js
document.addEventListener('DOMContentLoaded', function() {
  const cardnWrapper = document.querySelector('.cardnwrapper');
  const cardns = Array.from(cardnWrapper.children);

  // Duplicate cardns for infinite scrolling
  function duplicatecardns() {
    cardns.forEach(cardn => {
      cardnWrapper.appendChild(cardn.cloneNode(true));
    });
  }

  duplicatecardns();

  let scrollAmount = 0;
  const scrollSpeed = 1; // Adjust scroll speed as needed
  const wrapperWidth = cardnWrapper.offsetWidth;
  const cardnWidth = cardns[0].offsetWidth;
  const totalWidth = cardnWidth * cardns.length;

  // Function to continuously scroll the cardn wrapper
  function autoScroll() {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= totalWidth) {
      scrollAmount = 0;
      cardnWrapper.scrollLeft = 0;
    } else {
      cardnWrapper.scrollLeft = scrollAmount;
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();


  // Call updateActivecardn function on scroll
  cardnWrapper.addEventListener('scroll', updateActivecardn);

  // Initialize active cardn
  updateActivecardn();
});


var reviewContent=[
  {url:'images/1st-person.jpg',title:'The course content is spot on, and the mentors are always ready to support you.',name:'Nishant Rana'},
  {url:'images/2nd-person.avif',title:'The practical projects were a game-changer. I built a portfolio that impressed interviewers!',name:'Sanjeevani'},
  {url:'images/3rd-person.jpeg',title:'Loved the flexible schedule! I could manage my job and still learn at my own pace.',name:'Akash'},
  {url:'images/4th-person.avif',title:'Thanks to the skills I got here, I got a web developer job right after the course!',name:'Sunita Sharma'},
  {url:'images/5th-person.png',title:'The personalized approach really helped me focus on what I needed. Teachers were super helpful!',name:'Ankita'}
]

function addreviews()
{
  let content=''
  reviewContent.forEach(obj =>
  {
    content+=`<div class="cardx review-cardx">
        <div class="header">
          <div class="image">
          <img src='${obj.url}'>
          </div>
          <div>
            <div class="stars">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p class="name">${obj.name}</p>
          </div>
        </div>

        <p class="message">
          ${obj.title}
        </p>
</div>`;
  }
  );
  document.querySelector('.reviews-cardxs').innerHTML=content;
}
addreviews();


/* About Us */
const aboutLink = document.querySelectorAll('.abt');
aboutLink.forEach(obj=>{
obj.addEventListener('click',function()
{
  removebody();
  addAbout();
})
})


function removebody()
{
    let body=document.querySelector('.body');
    let headings=document.querySelectorAll('.per ');
    let prod=document.querySelector('.products');
    let ment=document.querySelector('.mentors');
    let abot=document.querySelector('.about');
    let rev=document.querySelector('.reviews-section');
    body.style.display='none';
    prod.style.display='none';
    ment.style.display='none';
    abot.style.display='none';
    rev.style.display='none';
    headings.forEach(obj=>{
      obj.style.display='none'}
    )    
}


function addHeadings()
{
  let headings=document.querySelectorAll('.per ');
  headings.forEach(obj=>{
    obj.style.display='block'}
  )    
}
function addAbout()
{
  let body=document.querySelector('.body');
  body.style.display='flex';
  body.innerHTML=`<section class="about-us-x">
        <div class="container">
            <h1>About Us</h1>
            <p>Welcome to Er hub, a dedicated platform for online education and personal growth. Our mission is to provide accessible, high-quality courses that empower learners to achieve their goals. With expert instructors, interactive content, and a community-driven approach, we aim to make learning a seamless and enriching experience.</p>
            <p>At Er Hub, we believe that education is the key to unlocking potential. Our courses are designed to cater to a wide range of learners, from beginners to advanced professionals, ensuring that everyone can find something valuable to enhance their skills.</p>
            <p>Join us on this journey of knowledge and growth. Whether you're looking to acquire new skills, advance your career, or simply explore new interests, we're here to support you every step of the way.</p>
        </div>
    </section>`;
}


/* Home button */
let homelink=document.querySelector('.home');
homelink.addEventListener('click',function()
{
  addHeadings();
})

/* Contact Us  */

const contactUs=document.querySelectorAll('.contactUs');
contactUs.forEach(obj=>{
  obj.addEventListener('click',function()
  {
    removebody();
    addContactUs();
  })
})

function addContactUs() {
  let body = document.querySelector('.body');
  body.style.display = 'block'; // Use block instead of flex
  body.innerHTML = `
    <section class="contact-us">
      <div class="container">
        <h1 style='margin-bottom:40px'>Contact Us</h1>
        <div class="contact-details">
          <div class="company-info">
            <h2>Our Office</h2>
            <p>Er Hub</p>
            <p>1234 Learning Lane, Suite 101</p>
            <p>Dehradun, India</p>
            <p>Phone: +91 123-456-7890</p>
            <p>Email: support@erhub.com</p>
            <p>Office Hours: Mon-Fri, 9 AM - 5 PM</p>
          </div>
          <div class="contact-form">
            <h2>Get in Touch</h2>
            <form>
              <label for="name">Your Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required>
              
              <label for="email">Your Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required>
              
              <label for="phone">Your Phone (optional):</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
              
              <label for="message">Your Message:</label>
              <textarea id="message" name="message" rows="5" placeholder="Write your message here" required></textarea>
              
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div class="social-media">
          <h2>Follow Us</h2>
          <a href="https://facebook.com" target="_blank" class="social-icon"><i class="fa-brands fa-facebook"></i> Facebook</a>
          <a href="https://twitter.com" target="_blank" class="social-icon"><i class="fa-brands fa-square-x-twitter"></i> Twitter</a>
          <a href="https://github.com" target="_blank" class="social-icon"><i class="fa-brands fa-square-github"></i> Github</a>
          <a href="https://linkedin.com" target="_blank" class="social-icon"><i class="fa-brands fa-linkedin"></i>  LinkedIn</a>
        </div>
        <div class="map">
          <h2 style='font-size:1.5em;text-align:center;margin:20px 0px'>Our Location</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.0336246896964!2d77.8228730743976!3d30.378403074757184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2979f9b8644d%3A0x75190c6c52a7d600!2sJB%20Institute%20of%20Technology%20%7C%20Engineering%20College%20in%20Dehradun%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sin!4v1724649590272!5m2!1sen!2sin"
            width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
          </iframe>
        </div>
      </div>
    </section>`;
}
