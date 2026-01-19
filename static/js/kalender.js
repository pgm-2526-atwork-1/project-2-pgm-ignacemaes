(() => {
  const $eventsFeb = document.querySelector(".events--feb");
  const $eventsMrt = document.querySelector(".events--mrt");
  const $eventsApr = document.querySelector(".events--apr");

  async function loadEvents() {
    const events = await getData("https://www.pgm.gent/data/dekoninck/events.json");
    let htmlFeb = "";
    let htmlMrt = "";
    let htmlApr = "";
    events.forEach((event) => {
      if (event.date_month === "Feb") {
        htmlFeb += generateEventHTML(event);
      }
      if (event.date_month === "Mrt") {
        htmlMrt += generateEventHTML(event);
      }
      if (event.date_month === "Apr") {
        htmlApr += generateEventHTML(event);
      }
    });
    $eventsFeb.innerHTML = htmlFeb;
    $eventsMrt.innerHTML = htmlMrt;
    $eventsApr.innerHTML = htmlApr;
  }

  async function getData(url) {
    const response = await fetch(url);
    return await response.json();
  }

  function generateEventHTML(event) {
    return `
    <li class="event">
    <div class="date">
    <p class="date__month">${event.date_month}</p>
    <p class="date__day">${event.date_day_number}</p>
    </div>
    <div class="event__content">
    <h2 class="event__sub-title">${event.subtitle}</h2>
    <h3 class="event__main-title">${event.title}</h3>
    <h4 class="event__event-date">${event.date_day} ${event.date_day_number} ${event.date_month} / <span>${event.time_start} - ${event.time_end}</span></h4>
    <p class="event__description">${event.description}</p>
    </div>
    <a class="event__link" href="${event.link_url}">${event.link_title}</a>
    </li>
    `;
  }

  loadEvents();
})();
