const elList = document.querySelector(".list")

async function  postlarniOlish() {
    try{
        const javob = await fetch('https://rickandmortyapi.com/api/character');
        
        const malumot = await javob.json()
        renderPost(malumot.results)
    } catch(xato){
        console.error("Api bilan boliq xatolik", xato)
    }
}
postlarniOlish()


function renderPost(malumot){
    malumot.forEach((data) => {
      elList.innerHTML += `
      <li class="item">
        <div class="box">
        <img class="people" src="${data.image}" alt="">
        <span>${data.id}</span>
        <h2 class="name">${data.name}</h2>
        <p class="status">${data.status}</p>
        <p class="species">${data.species}</p>
        <p class="loc_name">${data.location.name}</p>
        <p class="loc_url">${data.location.url}</p>
        </div>
      </li>
      `  
    });
}
