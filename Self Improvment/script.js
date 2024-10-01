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

// Call generateCalendar to display the calendar for the current month
generateCalendar();

// Save progress in localStorage for the current day
const progressCheck = document.getElementById('progressCheck');
const todayKey = new Date().toLocaleDateString();

// Load saved progress for the current day
if (localStorage.getItem(todayKey)) {
   progressCheck.checked = JSON.parse(localStorage.getItem(todayKey));
   document.querySelector('.td').style.backgroundColor = 'green';
}

// Event listener to save progress when checkbox is clicked
progressCheck.addEventListener('change', function () {
   localStorage.setItem(todayKey, JSON.stringify(progressCheck.checked));
   
});
