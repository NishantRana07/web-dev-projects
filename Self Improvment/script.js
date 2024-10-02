// Time and date display
function displayDateTime() {
    const time = document.querySelector('.time-text');
    const date = document.querySelector('.day-text');
    let now = new Date();

    // Get hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let meridian = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Set time and meridian
    time.innerHTML = `<span>${hours}:${minutes}</span><span class="time-sub-text"> ${meridian}</span>`;

    // Format and set date
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = now.toLocaleDateString('en-US', options);
    date.innerHTML = formattedDate;
}

// Call displayDateTime every second
displayDateTime();
setInterval(displayDateTime, 1000);

// Function to generate calendar for the current month
function generateCalendar() {
    const calendarContainer = document.getElementById('calendar-container');
    calendarContainer.innerHTML = '';

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();

    let daysInMonth = new Date(year, month + 1, 0).getDate(); // Get number of days in the month
    let firstDay = new Date(year, month, 1).getDay(); // Get first day of the month (0 for Sunday)

    // Create calendar table
    let calendar = '<table><tr>';

    // Fill in days of the week
    const daysOfWeek = ['Sun ', 'Mon ', 'Tue ', 'Wed ', 'Thu ', 'Fri ', 'Sat '];
    daysOfWeek.forEach(day => {
        calendar += `<th>${day}</th>`;
    });
    calendar += '</tr><tr>';

    // Add empty cells for the days before the 1st of the month
    for (let i = 0; i < firstDay; i++) {
        calendar += '<td></td>';
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        let today = now.getDate();
        let isToday = day === today ? 'style="background-color: #f67280;" class="td"' : '';
        calendar += `<td ${isToday}>${day}</td>`;

        // Start a new row after Saturday
        if ((day + firstDay) % 7 === 0) {
            calendar += '</tr><tr>';
        }
    }

    calendar += '</tr></table>';
    calendarContainer.innerHTML = calendar;
}

// Save progress in localStorage for the current day
const progressCheck = document.getElementById('progressCheck');

const today = new Date().toLocaleDateString(); // Today's date as a string
const streakKey = 'streak'; // Key for storing streak count
const datesKey = 'completedDates'; // Key for storing dates of progress
let streak = localStorage.getItem(streakKey) ? parseInt(localStorage.getItem(streakKey)) : 0; // Initialize streak
let completedDates = JSON.parse(localStorage.getItem(datesKey)) || []; // Initialize completed dates array

// Load saved progress for the current day
progressCheck.checked = completedDates.includes(today);
if (progressCheck.checked) {
    document.querySelector('.td').style.backgroundColor = 'green'; // Change background if today is marked as complete
}

// Event listener to save progress when checkbox is clicked
progressCheck.addEventListener('change', function () {
    if (progressCheck.checked) {
        completedDates.push(today); // Add today to completed dates
        document.querySelector('.td').style.backgroundColor = 'green'; // Mark day as complete
    } else {
        completedDates = completedDates.filter(date => date !== today); // Remove today from completed dates
        document.querySelector('.td').style.backgroundColor = ''; // Reset color if unchecked
    }

    localStorage.setItem(datesKey, JSON.stringify(completedDates)); // Save completed dates to localStorage

    // Calculate streak
    calculateStreak();
});

// Function to calculate streak
function calculateStreak() {
    completedDates.sort(); // Sort dates to ensure they're in order
    let count = 0;
    let currentDate = new Date();

    for (let i = 0; i < completedDates.length; i++) {
        let date = new Date(completedDates[i]);
        // Check if the date is consecutive
        if (currentDate.toLocaleDateString() === completedDates[i]) {
            count++;
            currentDate.setDate(currentDate.getDate() - 1); // Move to the previous day
        } else {
            break; // Stop if a non-consecutive date is found
        }
    }

    streak = count; // Update streak count
    localStorage.setItem(streakKey, streak); // Save updated streak to localStorage

    // Update streak display
    document.querySelector('.streak').innerHTML = `
      <i class="fa-solid fa-fire-flame-curved"></i>
      <p>${streak}</p>`; // Display the streak
}

// Streak display
document.querySelector('.streak').innerHTML = `
  <i class="fa-solid fa-fire-flame-curved"></i>
  <p>${streak}</p>`; // Display the streak

/* For P2 */
// Timer variables
let goalTime = new Date();
let timerInterval;
let timerStarted = false;
let timeWasted = 0; // Seconds wasted after the goal time

// Helper function to format time for display
function formatTime(hour, minute) {
    let ampm = hour >= 12 ? 'p.m.' : 'a.m.';
    hour = hour % 12;
    hour = hour ? hour : 12; // Hour '0' should be '12'
    return `${hour}:${String(minute).padStart(2, '0')} ${ampm}`;
}

// Retrieve goal time from localStorage if it exists, otherwise set to default (5:00 AM)
function loadGoalTime() {
    const storedGoal = localStorage.getItem('goalTime');
    
    if (storedGoal) {
        let [hour, minute] = storedGoal.split(":");
        goalTime.setHours(parseInt(hour));
        goalTime.setMinutes(parseInt(minute));
        goalTime.setSeconds(0);
    } else {
        // Default to 5:00 AM if no goal time is stored
        goalTime.setHours(5);
        goalTime.setMinutes(0);
        goalTime.setSeconds(0);
        localStorage.setItem('goalTime', '5:00'); // Store default goal time
    }
    
    // Update UI to show goal time
    document.getElementById('goalTime').innerHTML = `Goal: ${formatTime(goalTime.getHours(), goalTime.getMinutes())}`;
}

// Save goal time to localStorage
function saveGoalTime(hour, minute) {
    localStorage.setItem('goalTime', `${hour}:${minute}`);
}

// When gear is clicked, update the goal time
document.getElementById('setGoalTime').addEventListener('click', function() {
    let newGoalTime = prompt("Set your new goal time (e.g., 5:30 a.m.)", "5:00 a.m.");
    
    if (newGoalTime) {
        let [time, period] = newGoalTime.split(" "); // Split into time and period (a.m./p.m.)
        let [hour, minute] = time.split(":");

        hour = parseInt(hour);
        minute = parseInt(minute);
        
        // Convert to 24-hour format if necessary
        if (period === "p.m." && hour !== 12) {
            hour += 12;
        } else if (period === "a.m." && hour === 12) {
            hour = 0; // Midnight case
        }

        // Set the goal time
        goalTime.setHours(hour);
        goalTime.setMinutes(minute);
        goalTime.setSeconds(0);

        // Save new goal time to localStorage
        saveGoalTime(hour, minute);

        // Update the UI
        document.getElementById('goalTime').innerHTML = `Goal: ${formatTime(goalTime.getHours(), goalTime.getMinutes())}`;
    }
});

// Calculate the difference between now and the goal time in seconds
function getTimeDifference() {
    let now = new Date();
    let diffInSeconds = Math.floor((now - goalTime) / 1000);
    return diffInSeconds > 0 ? diffInSeconds : 0; // Only return positive difference
}

// Start tracking wasted time after goal time is passed
function startWastedTimeTimer() {
    timerStarted = true;
    
    // Initialize the time wasted if goal time is already passed
    timeWasted = getTimeDifference();
    
    // Start the timer from the calculated wasted time
    timerInterval = setInterval(function() {
        timeWasted++;
        displayWastedTime();
    }, 1000); // Increment timer every second
}

// Display the time wasted in HH:MM:SS format
function displayWastedTime() {
    let hours = Math.floor(timeWasted / 3600);
    let minutes = Math.floor((timeWasted % 3600) / 60);
    let seconds = timeWasted % 60;
    document.getElementById('wastedTime').innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Check goal time and start timer if needed
function checkGoalTime() {
    let now = new Date();
    if (now > goalTime && !timerStarted) {
        startWastedTimeTimer(); // Start the timer if goal time is passed
    }
}

// Load goal time on page load
loadGoalTime();
generateCalendar();
// Call checkGoalTime every second
setInterval(checkGoalTime, 1000);
