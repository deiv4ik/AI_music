const tracks = [];
let generatedMusicUrl = '';
let generatedMusicTitle = '';

// Simulate generating music by providing a dummy URL and title
function generateMusic() {
    const genre = document.getElementById('genre').value;
    const length = document.getElementById('length').value;
    const bpm = document.getElementById('bpm').value;

    // Dummy URL for generated music
    generatedMusicUrl = 'path/to/generated-music.mp3'; // Use a dummy path or local file
    generatedMusicTitle = `Generated Music ${new Date().toLocaleString()}`; // Dummy title based on current date/time

    document.getElementById('result').innerHTML = `
        <h2>The music is generated!</h2>
        <p>Genre: ${genre}</p>
        <p>Duration: ${length} seconds</p>
        <p>Temp: ${bpm} BPM</p>
        <audio controls>
            <source src="${generatedMusicUrl}" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
        <br>
        <button onclick="saveGeneratedMusic()">Save Generated Music</button>
    `;
}

function saveGeneratedMusic() {
    if (generatedMusicUrl) {
        // Use the stored title for the generated music
        const id = new Date().getTime().toString();
        tracks.push({ id, title: generatedMusicTitle, url: generatedMusicUrl, genre: document.getElementById('genre').value, length: document.getElementById('length').value, bpm: document.getElementById('bpm').value });
        displayTracks();
        generatedMusicTitle = ''; // Clear the stored title after saving
    }
}

function saveTrack() {
    const trackId = document.getElementById('track-id').value;
    const title = document.getElementById('track-title').value;
    const genre = document.getElementById('genre').value;
    const length = document.getElementById('length').value;
    const bpm = document.getElementById('bpm').value;

    if (trackId) {
        const track = tracks.find(t => t.id === trackId);
        track.title = title;
        track.genre = genre;
        track.length = length;
        track.bpm = bpm;
    } else {
        const id = new Date().getTime().toString();
        tracks.push({ id, title, genre, length, bpm });
    }

    document.getElementById('track-form').reset();
    document.getElementById('track-id').value = '';
    displayTracks();
}

function displayTracks() {
    const trackTableBody = document.querySelector('#track-table tbody');
    trackTableBody.innerHTML = '';
    tracks.forEach(track => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="color: white;">${track.title}</td>
            <td>
                <button onclick="deleteTrack('${track.id}')">Delete</button>
                <button onclick="searchSimilar('${track.genre}')">Find Similar</button>
                <button onclick="downloadTrack()">Download</button>
            </td>
        `;
        trackTableBody.appendChild(row);
    });
}

function deleteTrack(id) {
    const index = tracks.findIndex(t => t.id === id);
    tracks.splice(index, 1);
    displayTracks();
    document.getElementById('result').innerHTML = '';
}

function searchSimilar(genre) {
    const similarTracks = tracks.filter(t => t.genre === genre);
    document.getElementById('result').innerHTML = `
        <h2>Similar Tracks</h2>
        <ul>
            ${similarTracks.map(track => `<li>${track.title}</li>`).join('')}
        </ul>
    `;
}

function downloadTrack() {
    // Redirect to a specified URL
    window.location.href = 'https://www.youtube.com/watch?v=xFYQQPAOz7Y&ab_channel=EminemMusic';
}

// Initial display
displayTracks();
