(() => {
  const $events = document.querySelector(".events");

  async function loadEvents() {
    const events = await getData("https://www.pgm.gent/data/dekoninck/events.json");
    let html = "";
    events.forEach((event) => {
      html += generateEventHTML(event);
    });
    $events.innerHTML = html;
  }

  async function getData(url) {
    const response = await fetch(url);
    return await response.json();
  }

  function generateEventHTML(event) {
    return `
    <li class="event">
    <h2 class="event__sub-title">${event.subtitle}</h2>
    <h3 class="event__main-title">${event.title}</h3>
    <h4 class="event__event-date">${event.date_day} ${event.date_day_number} ${event.date_month} / <span>${event.time_start} - ${event.time_end}</span></h4>
    <a href="${event.link_url}">${event.link_title}</a>
    </li>
    `;
  }

  loadEvents();
})();
