document.addEventListener("DOMContentLoaded", function() {
    const stores = [
        { name: "Downtown Brew", address: "123 Main St, Metropolis", lat: 40.7128, lon: -74.0060 },
        { name: "Seaside Coffee", address: "456 Ocean View Rd, Seatown", lat: 37.7749, lon: -122.4194 },
        { name: "Mountain Joe", address: "789 Hilltop St, Mountainville", lat: 39.7392, lon: -104.9903 },
        { name: "Riverbank Cafe", address: "101 River Rd, Riverside", lat: 34.0522, lon: -118.2437 },
        { name: "Old Town Coffee", address: "202 Historical Ave, Oldtown", lat: 41.8781, lon: -87.6298 }
    ];

    // Initialize Leaflet map
    var map = L.map('map').setView([40.7128, -74.0060], 13); // Default location
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Create markers for each store and add to the map
    var markers = [];
    stores.forEach(store => {
        var marker = L.marker([store.lat, store.lon]).addTo(map)
            .bindPopup(`<b>${store.name}</b><br>${store.address}`);
        markers.push(marker);
    });

    // Function to add stores to the table and map interaction
    const tableBody = document.querySelector('#storesTable tbody');
    stores.forEach((store, index) => {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.textContent = store.name;
        cell2.textContent = store.address;
        const btn = document.createElement('button');
        btn.textContent = 'Show on Map';
        btn.onclick = function() {
            map.setView([store.lat, store.lon], 13);
            markers[index].openPopup();
        };
        cell3.appendChild(btn);
    });
});
