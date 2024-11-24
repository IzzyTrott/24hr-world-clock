function displayCities() {
  let londonElement = document.querySelector("#london");

  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let london = moment().tz("Europe/London");
  londonDateElement.innerHTML = london.format("ddd Do MMM YYYY");
  londonTimeElement.innerHTML = london.format("HH:mm:ss");

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let paris = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = paris.format("ddd Do MMM YYYY");
  parisTimeElement.innerHTML = paris.format("HH:mm:ss");

  let newYorkElement = document.querySelector("#new-york");

  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYork = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYork.format("ddd Do MMM YYYY");
  newYorkTimeElement.innerHTML = newYork.format("HH:mm:ss");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydney = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydney.format("ddd Do MMM YYYY");
  sydneyTimeElement.innerHTML = sydney.format("HH:mm:ss");

  let moscowElement = document.querySelector("#moscow");

  let moscowDateElement = moscowElement.querySelector(".date");
  let moscowTimeElement = moscowElement.querySelector(".time");
  let moscow = moment().tz("Europe/Moscow");
  moscowDateElement.innerHTML = moscow.format("ddd Do MMM YYYY");
  moscowTimeElement.innerHTML = moscow.format("HH:mm:ss");

  let bangkokElement = document.querySelector("#bangkok");

  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkok = moment().tz("Asia/Bangkok");
  bangkokDateElement.innerHTML = bangkok.format("ddd Do MMM YYYY");
  bangkokTimeElement.innerHTML = bangkok.format("HH:mm:ss");
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="update-city-grid">
        <div><h2> ${cityName}</h2></div>
        <div class="time">${cityTime.format("HH:mm:ss")}</div>
        <div class="date">${cityTime.format("ddd Do MMM YYYY")}</div>
      </div>`;
}
let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener("change", updateCity);

displayCities();
setInterval(displayCities, 1000);
