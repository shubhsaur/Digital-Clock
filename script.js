// All variables

const hours = document.querySelector(".hour");
const minutes = document.querySelector(".min");
const seconds = document.querySelector(".sec");
const period = document.querySelector(".period h2");

const dates = document.querySelector(".calendar .date");
const months = document.querySelector(".calendar .month");
const years = document.querySelector(".calendar .year");

const button = document.querySelector(".calendar button");
const calendar = document.querySelector(".calendar");

//function setting time and date
function setDate() {
	const now = new Date();
	const hr = now.getHours();
	const min = now.getMinutes();
	const secs = now.getSeconds();

	const date = now.getDate();
	const month = now.getMonth() + 1;
	const year = now.getFullYear();

	if (hr >= 12 && hr <= 0) {
		period.innerHTML = "PM";
	} else {
		period.innerHTML = "AM";
	}

	seconds.innerHTML = `${secs}`;
	minutes.innerHTML = `${min}`;
	hours.innerHTML = `${hr}`;

	dates.innerHTML = `${date}-`;
	months.innerHTML = `${month}-`;
	years.innerHTML = `${year}`;
}

setInterval(setDate, 1000);

//To animate calendar section

button.addEventListener("click", () => {
	if (calendar.classList.contains("animate")) {
		calendar.classList.remove("animate");
	} else {
		calendar.classList.add("animate");
	}
});
