function loadAdvice() {
    const url = 'https://api.adviceslip.com/advice'
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.slip))
}
const displayData = data => {
    console.log(data);
    // const id = document.getElementById('advice-title');
    // id.innerText = data.id;
    // const advice = document.getElementById('advice');
    // advice.innerText = data.advice;
    const card = document.getElementById('advice-body');
    const cardBody = document.createElement('div');
    cardBody.innerHTML = `
    <div class="card-body">
    <h5 class="card-title text-center">Advice#<span id="advice-title">${data.id}</span></h5>
                    <p id="advice" class="card-text text-center">${data.advice}</p>
                    <button onclick="refresh()" class="d-block btn btn-primary mx-auto">Refresh</button>
                    </div>
    `
    card.appendChild(cardBody)
}

const refresh = () => {
    window.location.reload();
}
loadAdvice()