var elem = document.querySelectorAll(".elem");
elem.forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", function (e) {
    val.childNodes[3].style.left = e.x + "px";
  });
});

const dateTimeElement = document.getElementById("date-time");
const locationElement = document.getElementById("location");

// Function to update date and time
function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  dateTimeElement.textContent = `Date: ${date} | Time: ${time}`;
}

// Function to get location
function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude.toFixed(2);
      const longitude = position.coords.longitude.toFixed(2);
      locationElement.textContent = `Location: ${latitude}, ${longitude}`;
    });
  } else {
    locationElement.textContent = "Location not available";
  }
}

// Update date, time, and location every second
setInterval(updateDateTime, 1000);
getLocation();
// Function to update the visitor count
function updateVisitorCount() {
  // Replace this with your actual logic to get the visitor count
  // For this example, we'll use a random number between 1 and 100 as the count.
  const count = Math.floor(Math.random() * 100) + 1;

  // Update the count element's text
  document.getElementById("count").textContent = count;
}

// Call the function initially and set an interval to update it periodically (e.g., every 5 seconds)
updateVisitorCount();
setInterval(updateVisitorCount, 5000); // 5000 milliseconds = 5 seconds

        // JavaScript for filtering bridges by continent
        document.getElementById("continent-select").addEventListener("change", function () {
            var selectedContinent = this.value;
            var bridges = document.querySelectorAll(".bridge");

            bridges.forEach(function (bridge) {
                var bridgeContinent = bridge.getAttribute("data-continent");
                if (selectedContinent === "all" || selectedContinent === bridgeContinent) {
                    bridge.style.display = "block";
                } else {
                    bridge.style.display = "none";
                }
            });
        });

