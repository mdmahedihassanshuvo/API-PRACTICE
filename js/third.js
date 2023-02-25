function loadData(region) {
    const url = `https://restcountries.com/v3.1/region/${region}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => getData(data))
}
const getData = data => {
    // console.log(data)
    const colContainer = document.getElementById('col-container');
    colContainer.innerHTML = '';
    data.forEach(element => {
        console.log(element);
        const colBody = document.createElement('div')
        colBody.innerHTML = `
        <div class="col">
                    <div class="card h-100">
                        <img src="${element.flags.png}" class="card-img-top" alt="...">
                        <button onclick="getCode('${element.cca2}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
                    </div>
                </div>
        `
        colContainer.appendChild(colBody)

    });
}

const getCode = (code) => {
    // const url = 'https://restcountries.com/v3.1/alpha/pe'
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCode(data[0]))
}

const displayCode = (data) => {
    console.log(data.name.common)
    const modalTitle = document.getElementById('modal-title');
    modalTitle.innerText = data.name.common;
    const body = document.getElementById('body-modal');
    body.innerHTML =`
    <img src="${data.flags.png}">
    `

}

const displayData = () => {
    const inputRegion = document.getElementById('input-filed').value;
    loadData(inputRegion);
}
loadData()