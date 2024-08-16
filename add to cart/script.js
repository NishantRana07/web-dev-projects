var products=[
    {title:'Java course',price:'690',description:'Best java Course',url:'https://media.istockphoto.com/id/518002738/photo/java-button-on-computer-keyboard.webp?b=1&s=612x612&w=0&k=20&c=Yz8kmgoHCUek5zlS33zxFy5EkWDM411fBop9y28VbX4='},
    {title:'Python course',price:'699',description:'Best python Course',url:'https://media.istockphoto.com/id/1413990965/photo/glowing-python-programming-language-code-on-a-blue-digital-surface-with-a-sphere-grid-design.webp?b=1&s=612x612&w=0&k=20&c=9PdmvR30Ie5fuwIUaS5yY--7wWN4zqS4mFDp7XgzdF4='},
    {title:'C++ course',price:'960',description:'Best c++ Course',url:'https://media.istockphoto.com/id/1413990965/photo/glowing-python-programming-language-code-on-a-blue-digital-surface-with-a-sphere-grid-design.webp?b=1&s=612x612&w=0&k=20&c=9PdmvR30Ie5fuwIUaS5yY--7wWN4zqS4mFDp7XgzdF4='},
];
var course=''
products.forEach((obj,index)=>
{
    course+=`<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                <img src="${obj.url}">
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">
                    ${obj.title}
                    </h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${obj.description}</h3>
                            <h4 class="font-semibold mt-2">${obj.price}</h4>
                        </div>
                        <button value="${index}"  class="w-10  add h-10 rounded-full shader text-yellow-400"><i 
                                class=" add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
}
)
document.querySelector('.products').innerHTML=course;

/* Popular products secrtion*/
var popular=[
   
    {title:'Web developement',description:'Best web dev course',price:'699',url:'https://media.istockphoto.com/id/1201166649/photo/office-responsive-devices-web-design-website.webp?b=1&s=612x612&w=0&k=20&c=cLOwrSE0y9GlEbApDMMQeDCORBk8zvhIU8GaOKabnEI='},
    {title:'Data analytics',description:'Best data analytics course',price:'699',url:'https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.webp?b=1&s=612x612&w=0&k=20&c=bpQMsH07ziELXla0SZJt84-w0JkxsVXs05c7T2Iygks='},
    {title:'Data science',description:'Best data science course',price:'699',url:'https://media.istockphoto.com/id/1493867788/photo/artificial-intelligence-technology-robot-futuristic-data-science-data-analytics-a-i.webp?b=1&s=612x612&w=0&k=20&c=f8E95-NYGLLDaNn8gjRvkfDM47VOMN6_TkYfswnKBlQ='},
]
var pop='';
popular.forEach(obj=>{
    pop+=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${obj.url}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">
                        ${obj.title}
                        </h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.description}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${obj.price}</h4>
                    </div>
                </div>`;
})
document.querySelector('.populars').innerHTML=pop;
/*cart*/
var prod = "";  
const cart = document.querySelector('.cart');
var btns = document.querySelectorAll('.add');

function add() {
    btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            let productIndex = btn.value;
            let product = products[productIndex];
            prod += `<div class="flex prod gap-2 bg-white p-2 rounded-lg">
                        <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
                            <img class="image-k" src="${product.url}" alt="${product.title}">
                        </div>
                        <div>
                            <h3 class="font-semibold">${product.description}</h3>
                            <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>
                        </div>
                    </div>`;
            
            document.querySelector('.cartexpnd').innerHTML=prod;
            console.log(prod);
        });
    });
}
add();