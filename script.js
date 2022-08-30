const drums = ["snare", "kick", "crash", "tom"];
const containerEl = document.querySelector(".container");

drums.forEach( (drum)=>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = drum;
    btnEl.style.backgroundImage = "url(images/" + drum + ".jpg)";    
    containerEl.appendChild(btnEl);

    const audEl = document.createElement("audio");
    audEl.src = "audios/" + drum + ".mp3" ;
    containerEl.appendChild(audEl);

    btnEl.addEventListener("click", ()=>{
        audEl.play();
    });

    window.addEventListener("keydown" , (event)=>{
        if(event.key  === drum.slice(0,1))
        {
            audEl.play();
            btnEl.style.transform = scale(0.9);
            setTimeout(()=>{
                btnEl.style.transform = scale(1);
            }, 100);
        };
    });

});
