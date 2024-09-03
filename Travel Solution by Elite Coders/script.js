const startLocation = document.querySelector('#startloc');
const destination = document.querySelector('#endloc');
const searchButton = document.querySelector('#searchButton');
const display=document.querySelector('.display');
const hamButton=document.querySelector('.ham');
const nav=document.querySelector('nav .right');
/* For displaying Locations */
function displayLocations(){
    display.innerHTML=`<p> start destinantion : ${startLocation.value}</p>
        <p>end destinantion : ${destination.value}</p>`;
}

/* For toggle Nav */
hamButton.addEventListener('click',function()
{
    nav.classList.toggle('show');
    console.log('nav buton')
})



searchButton.addEventListener('click', function() {
    displayLocations();
});