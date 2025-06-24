# Part2 --> Data-for-countries

# Ejercicios 2.18

# Ejercicios 2.19

# Ejercicios 2.20
https://openweathermap.org.
usuario:wayeli9986@asimarif.com
email: wayeli9986@asimarif.com
pass: wayeli9986@asimarif.com

API_KEY: 3b1d6c0586e1cc4f82e5f4c63ab8aac0



EndPoint
https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric



icon endpoint
https://openweathermap.org/img/wn/{icon_code}@2x.png



	...
	  "weather": [
		{
		  "id": 500,
		  "main":"Rain",
		  "description": "light rain",
		  "icon": "10n"
		}
	  ],
	...


> nota: la Api key puede ser colocada en el archivo **.env**

o ser usada temporalmente en la sesión temporal de la terminal con:

```bash
export VITE_SOME_KEY=54l41n3n4v41m34rv0 && npm run dev // Para Linux/macOS Bash
($env:VITE_SOME_KEY="54l41n3n4v41m34rv0") -and (npm run dev) // Para Windows PowerShell
set "VITE_SOME_KEY=54l41n3n4v41m34rv0" && npm run dev // Para Windows cmd.exe
```

```js
const api_key = import.meta.env.VITE_SOME_KEY
// variable api_key ahora tiene el valor configurado
```