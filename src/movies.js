import axios from 'axios';

//API URL
const Api_url = "http://www.omdbapi.com/?apikey=b502738f&s=matrix";

async function loadMovies() {
    try {
      let response = await axios.get(Api_url);
      const after2002 = response.data.Search.filter(movie => movie.Year > 2002)
      console.log(after2002); 
    } catch (e) {
      console.error(e); // 💩
    }
  }


export { loadMovies }