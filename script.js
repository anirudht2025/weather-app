const api_key = "";

const checkWeather = async () => {
  const city = input01.value;
  const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  wtext.textContent = data.current.condition.text;
  wicon.src = data.current.condition.icon;
};
