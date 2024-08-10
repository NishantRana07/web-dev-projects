document.addEventListener('DOMContentLoaded',function(){
    const output=document.querySelector('.op');
    const buttons=document.querySelectorAll('button');
    let input='';
    let operator='';
    let prev='';
    buttons.forEach((button) =>
    {
        button.addEventListener('click',function()
        {
        let val=button.textContent;
        
        if (val == 'C' || val == '=' || val == '←') {
            if (val == '=') {
                try {
                    prev = eval(prev).toString(); 
                    output.textContent = prev; 
                } catch (error) {
                    output.textContent = 'Sahi se Expression Likh Bc'; 
                }
            }
            if(val=='C')
            {
                prev='';
                output.textContent=prev;
            }
            if(val=='←')
            {
                let l=prev.length;
                prev=prev.slice(0,l-1);
                output.textContent=prev;
            }
        }       
        else
        {
        prev=prev+val;
        console.log(val);
        output.textContent=prev;
        }
        })
    })

})