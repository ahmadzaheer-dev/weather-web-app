let searchedLocation = localStorage.getItem('loc');

((searchedLoc)=>{
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.currently').style.display = 'none';
    document.querySelector('.weekly').style.display = 'none';
    fetch(`/weather-api?location=${searchedLoc}`).then((response)=>{
        response.json().then((data) =>{
            if(data.error){
                console.log(data.error);
            } else{
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.currently').style.display = 'block';
                document.querySelector('.weekly').style.display = 'block';
                UIUpdate(data);
                localStorage.removeItem('loc')
            }
        })
    })
})(searchedLocation);

//UI Updater
const UIUpdate = (data)=>{

    document.querySelector('.location__text').textContent = data.location;
    //Updating Current Box
    let formattedSplit = data.formatted.split(" ");
    document.querySelector('.conditionbox__time').textContent = formattedSplit[1];
    document.querySelector('.conditionbox__temp').textContent = Math.trunc(data.currently.temperature) + '°F';
    document.querySelector('.conditionbox__icon').src = "/images/" + data.currently.icon + '.png';
    document.querySelector('.conditionbox__summary').textContent = data.currently.summary;

    document.querySelector('.current-humidity').textContent = data.currently.humidity;
    document.querySelector('.current-visibility').textContent = data.currently.visibility;
    document.querySelector('.current-pressure').textContent = data.currently.pressure;
    document.querySelector('.current-wind').textContent = data.currently.windSpeed;
    document.querySelector('.current-uv').textContent = data.currently.uvIndex;
    document.querySelector('.current-cloud').textContent = data.currently.cloudCover;

    //Updating Weekly Weather Conditions

    let weeklyWeather = document.querySelectorAll('.weatherbox')
    let counter = 0;
    let retrievedDate = new Date(data.formatted);
    let today = retrievedDate.getDay();

    let weekDays = [{index: 0, day: 'Sun'},{index: 1, day: 'Mon'},{index: 2, day: 'Tue'},{index: 3, day: 'Wed'},{index: 4, day: 'Thu'},{index: 5, day: 'Fri'},{index: 6, day: 'Sat'}];
    
    [].forEach.call(weeklyWeather, (cur)=>{
        cur.querySelector('.weatherbox__img').src = '/images/' + data.daily[counter].icon + '.png';
        cur.querySelector('.weatherbox__temp--high').textContent = Math.trunc(data.daily[counter].tempHigh) + '°';
        cur.querySelector('.weatherbox__temp--low').textContent = Math.trunc(data.daily[counter].tempLow) + '°';
        if(counter === 0){
            cur.querySelector('.weatherbox__day').textContent = "Today";
        } else {
            cur.querySelector('.weatherbox__day').textContent = weekDays[today].day;
        }
        counter++;
        if(today === 6){
            today = 0;
        } else {
            today++;
        }
        
    });
    counter = 0;


}

document.querySelector('.searchbox__btn').addEventListener('click', ()=> {
    let area = document.querySelector('.search__input').value;
    localStorage.setItem('loc', area);
    location.reload();
})
