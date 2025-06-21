document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Simulate DHT sensor data
function updateSensorData() {
  document.getElementById('temperature').textContent = (20 + Math.random() * 10).toFixed(1);
  document.getElementById('humidity').textContent = (40 + Math.random() * 20).toFixed(1);
}
setInterval(updateSensorData, 3000); // Refresh every 3 sec

// Fetch GitHub Repos
fetch('https://api.github.com/users/francis-mukuna/repos')
  .then(res => res.json())
  .then(repos => {
    const list = document.getElementById('repoList');
    repos.slice(0, 5).forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      list.appendChild(li);
    });
  });
