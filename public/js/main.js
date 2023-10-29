let submitBtn = document.getElementById('submitBtn')
let cityName = document.getElementById('cityName')
let city_name =document.getElementById('city_name')
let temp = document.getElementById('temp')
let temp_status = document.getElementById('temp_status')
let datahide = document.querySelector('.middle_layer')

let getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText=`Plz , write city name before search...`
        datahide.classList.add('data_hide')
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6b77658bbbd10429f60c4c52a6a90fdf`
            const response = await fetch(url);
            // console.log(response);
            const data = await response.json()
            // console.log(data);
            const arr = [data];
            // console.log(arr);
            temp.innerText = arr[0].main.temp;
            const temp_mood = `${arr[0].weather[0].main}`;
            city_name.innerText = `${arr[0].name}, ${arr[0].sys.country} `

            if(temp_mood==='Rain'){
                temp_status.src = "http://openweathermap.org/img/w/10d.png"
            }else if(temp_mood==='Clouds'){
                temp_status.src = "http://openweathermap.org/img/w/02d.png"
            }else if(temp_mood==='Clear'){
                temp_status.src = "http://openweathermap.org/img/w/01d.png"
            }else if(temp_mood==='Haze'){
                temp_status.src = "http://openweathermap.org/img/w/50d.png"
            }else if(temp_mood==='Fog'){
                temp_status.src = "http://openweathermap.org/img/w/50d.png"
            }else if(temp_mood==='Snow'){
                temp_status.src = "http://openweathermap.org/img/w/13d.png"
            }

            datahide.classList.remove('data_hide')

        }catch{
            city_name.innerText = `Plz , enter city name properly...`
            datahide.classList.add('data_hide')
        }
    }
    
}

submitBtn.addEventListener('click',getInfo);

