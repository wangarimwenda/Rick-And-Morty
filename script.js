async function fetchCharacter() {
    try {
        const name = document.getElementById("characterName").value.trim().toLowerCase();
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        
        if (!response.ok) {
            throw new Error("Character not found");
        }

        const data = await response.json();
        const character = data.results[0]; // Get the first match

        const imgElement = document.getElementById("characterSprite");
        imgElement.src = character.image;
        imgElement.style.display = "block";
    } catch (error) {
        console.error("Fetch error:", error);
        alert("Character not found. Try a valid name like 'Rick Sanchez' or 'Morty Smith'.");
        document.getElementById("characterSprite").style.display = "none";
    }
}