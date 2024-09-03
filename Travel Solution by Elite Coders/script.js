const startLocation = document.querySelector('#startloc');
const destination = document.querySelector('#endloc');
const searchButton = document.querySelector('#searchButton');
const display=document.querySelector('.display');
searchButton.addEventListener('click', function() {
    display.innerHTML=`<p> start destinantion : ${startLocation.value}</p>
        <p>end destinantion : ${destination.value}</p>`;
});
