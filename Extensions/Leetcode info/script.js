const input = document.querySelector('.ip');
    const submit = document.getElementById("submit");

    function show()
    {
        console.log(input.value);
        document.querySelector('body').innerHTML = `<h1>${input.value}</h1>`;
    }