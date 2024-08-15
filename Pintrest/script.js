var images=[
    {image:'mountains', url:'https://plus.unsplash.com/premium_photo-1722584996622-46f592165128?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'},
    {image:'guitar on the floor', url:'https://images.unsplash.com/photo-1723714807771-23b5447e2f65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'},
    {image:'night view of the city', url:'https://plus.unsplash.com/premium_photo-1723546155442-b3756cfef971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8'},
    {image:'Buildings Night view', url:'https://plus.unsplash.com/premium_photo-1723433351351-0f6cd5d21537?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D'},
    {image:'building of china', url:'https://images.unsplash.com/photo-1723015891294-e3b121c897b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'},
    {image:'cockpit of the plane', url:'https://plus.unsplash.com/premium_photo-1723527889934-6c1ef11568dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D'}
];
var box=document.querySelector('.container');
function show()
{
    images.forEach(obj => {
        box.innerHTML+=`<div class='box'><img src='${obj.url}'></div>`;
    });
}
show();
document.querySelector('.searchdata').style.display="none";
var input=document.querySelector('#searchinput');
function search()
{
    input.addEventListener('focus',function()
    {
    document.querySelector('.overlay').style.display="block";
    
    });
    input.addEventListener('blur',function()
    {
    document.querySelector('.overlay').style.display="none";
    });
    input.addEventListener('input', function() {
        const filterValue = input.value.toLowerCase();
    
        const filteredArray = images.filter(obj => 
        obj.image.toLowerCase().startsWith(filterValue));
        var res=''
        filteredArray.forEach(obj=>{
            res+=`<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.image}</h3>
        </div>`;
            console.log(res);
        } )
        document.querySelector('.searchdata').innerHTML=res;
        document.querySelector('.searchdata').style.display="block";
    });    
}

search();