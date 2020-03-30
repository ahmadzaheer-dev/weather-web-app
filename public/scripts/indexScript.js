document.querySelector('.search__btn').addEventListener('click', ()=>{
    let searchedLocation = document.querySelector('.header__search').value;
    searchWeather(searchedLocation);
})

document.querySelector('.islamabad-link').addEventListener('click', ()=>{
    let searchedLocation = 'Islamabad';
    searchWeather(searchedLocation);
})

document.querySelector('.istanbul-link').addEventListener('click', ()=>{
    let searchedLocation = 'Istanbul';
    searchWeather(searchedLocation);
})

document.querySelector('.jeddah-link').addEventListener('click', ()=>{
    let searchedLocation = 'jeddah';
    searchWeather(searchedLocation);
})

document.querySelector('.berlin-link').addEventListener('click', ()=>{
    let searchedLocation = 'berlin';
    searchWeather(searchedLocation);
})

document.querySelector('.paris-link').addEventListener('click', ()=>{
    let searchedLocation = 'paris';
    searchWeather(searchedLocation);
})

document.querySelector('.london-link').addEventListener('click', ()=>{
    let searchedLocation = 'london';
    searchWeather(searchedLocation);
})

document.querySelector('.tokyo-link').addEventListener('click', ()=>{
    let searchedLocation = 'tokyo';
    searchWeather(searchedLocation);
})

document.querySelector('.hongkong-link').addEventListener('click', ()=>{
    let searchedLocation = 'hong kong';
    searchWeather(searchedLocation);
})

document.querySelector('.moscow-link').addEventListener('click', ()=>{
    let searchedLocation = 'moscow';
    searchWeather(searchedLocation);
})

let searchWeather = (loc)=>{
    localStorage.setItem('loc', loc);
    window.location.href = "/weather";
}