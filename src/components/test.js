import axios from "axios";

const countries = [
  "Republic of india",
  "australia",
  "brazil",
  "japan",
  "china",
  "sweden",
  "south africa",
  "canada",
  "france",
  "indonesia",
  "denmark",
  "italy",
  "russia",
  "bhutan",
];


const shuffle = (array) => { 
  return array.sort(() => Math.random() - 0.5); 
}; 

const shuffledCountries = shuffle(countries);
axios.get(`https://restcountries.com/v3.1/name/${shuffledCountries[0]}`).then(res => {
  console.log(res.data[0].flags.png)
  console.log(res.data[0].name.common)
})
