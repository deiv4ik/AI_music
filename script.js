function generateMusic() {
    const genre = document.getElementById('genre').value;
    const length = document.getElementById('length').value;
    const bpm = document.getElementById('bpm').value;

    document.getElementById('result').innerHTML = `
        <h2>The music is generated!</h2>
        <p>Genre: ${genre}</p>
        <p>Duration: ${length} seconds</p>
        <p>Temp: ${bpm} BPM</p>
        <audio controls>
            <source src="generated_music.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
    `;
}