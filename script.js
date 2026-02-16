const shows = [
  { city: "Montreal, QC", date: "July 25, 2026" },
  { city: "Brooklyn, NY", date: "July 31, 2026" },
  { city: "Boston, MA", date: "August 7, 2026" },
  { city: "Las Vegas, NV", date: "September 6, 2026" }
];

const list = document.getElementById("show-list");

shows.forEach(show => {
  const li = document.createElement("li");
  li.textContent = `${show.city} — ${show.date}`;
  list.appendChild(li);
});
