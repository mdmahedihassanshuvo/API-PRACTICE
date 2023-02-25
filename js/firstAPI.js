const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};

function loadData(person){
    console.log(person);
    const header = document.getElementById('person-name1');
    header.innerText = person.result[0].name.fullName
    const age = document.getElementById('age1');
    age.innerText = person.result[0].age;
    const location = document.getElementById('location1');
    location.innerText = person.result[0].address.street;
    const location1 = document.getElementById('location1.0');
    location1.innerText = person.result[0].address.house
}
loadData(person)

function loadData2(person){
    console.log(person);
    const header = document.getElementById('person-name2');
    header.innerText = person.result[1].name.fullName
    const age = document.getElementById('age2');
    age.innerText = person.result[1].age;
    const location = document.getElementById('location2');
    location.innerText = person.result[1].address.street;
    const location1 = document.getElementById('location2.0');
    location1.innerText = person.result[1].address.house
}
loadData2(person)