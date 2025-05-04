//APIs :-
//userInfo - 'alfa-leetcode-api.onrender.com/username';
// Badges - alfa-leetcode-api.onrender.com/username/badges
// Solved - alfa-leetcode-api.onrender.com/username/solved
// Calander - alfa-leetcode-api.onrender.com/username/calendar
// Languages - alfa-leetcode-api.onrender.com/languageStats?username=nishantrana07

const input = document.querySelector('.ip');
    const submit = document.getElementById("submit");
    let userName='Loading...';
    let Name='Loading...';
    let rank='Loading...';
    let skill='Loading...';
    let solved='Loading...';
    let easySolved='Loading...';
    let mediumSolved='Loading...';
    let hardSolved='Loading...';

    function render()
    {
        document.querySelector('body').innerHTML = `<div class="info">
        <button class="leftImg"><img src="left.png" alt="back" onclick="ip()"></button>
        <div class="da">
        <p>Name : ${Name}</p>
        <p>Rank : ${rank}</p>
        <p>Skill : ${skill}</p>
        <p>solved Problem: ${solved}</p>
        <p>Easy Solved : ${easySolved}</p>
        <p>Medium Solved : ${mediumSolved}</p>
        <p>Hard Solved : ${hardSolved}</p>
        `;
    }
    function show()
    {
        console.log(input.value);
        render();
        userName = input.value;
        getUserInfo();
        getCalendar();
    }

    function ip()
    {
        document.querySelector('body').innerHTML = ` <div class="form">
    <input type="text" id="ip" class="ip" placeholder="Enter leetcode username">
    <button id="submit" onclick="show()">Submit</button>
    </div>  `;
    }
    async function getUserInfo()
    {
        (userName=== '') ? console.log('Please enter a username') : console.log("Loading Data...");
        const userInfo =await fetch(`https://alfa-leetcode-api.onrender.com/${input.value}`).then (data => data.json())
        console.log(userInfo);

        if(userInfo.status === 404)
        {
            alert('User not found!');
            return;
        }

        Name = userInfo.name;
        rank = userInfo.ranking;
        skill = userInfo.skillTags;
        console.log(Name, rank, skill);
        render();

    }

    //Calander
    async function getCalendar()
    {
        try
        {
        console.log("Loading Calendar...");
        const calendar =await fetch(`https://alfa-leetcode-api.onrender.com/${userName}/calendar`)
        .then(data => data.json());

        console.log(calendar);

        for (const [timestamp, count] of Object.entries(calendar)) {
            const date = new Date(parseInt(timestamp) * 1000); // convert seconds to milliseconds
            const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
            console.log(`${formattedDate}: ${count} submissions`);
          }
          render();
        }
        catch(Err)
        {
            console.log("Calendar not loaded : ",Err);
            return;
        }    
    }

    async function getProblems()
    {
        console.log("Loading Solved problems...");
        try{
            const solved= await fetch(`https://alfa-leetcode-api.onrender.com/${userName}/solved`)
            .then(data => data.json());

            console.log(solved);
            render();
        }
        catch(Err)
        {
            console.log("Solved Problems not loaded : ",Err);
            return;
        }
    }