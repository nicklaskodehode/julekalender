try{

const gridContainer = document.querySelector("#grid-container");

let url = `https://icanhazdadjoke.com/search?limit=24`;
fetch(url, {
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => response.json())
.then((data) => {
   
    for (let i = 0; i <= data.results.length; i++) {

        const gridItem = document.createElement("div"); 
        const door = document.createElement("div");
        const joke = document.createElement("div");
        const jokeText = document.createElement("p");
        const dayNum = document.createElement("span");

        gridItem.classList.add("grid-item");
        door.classList.add("door");
        joke.classList.add("joke");
        jokeText.classList.add("joke-text");

        dayNum.textContent = i + 1;
        jokeText.textContent = data.results[i].joke

        door.appendChild(dayNum);
        joke.appendChild(jokeText);
        gridItem.appendChild(door);
        gridItem.appendChild(joke);
        gridContainer.appendChild(gridItem);

        door.addEventListener("click", () => {
            gridItem.classList.add("opened");
        });
    }
});

}catch(err){
    console.log(err);
}