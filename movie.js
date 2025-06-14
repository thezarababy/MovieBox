const movieDisplay = document.getElementById('movieDisplay');
const browseMovie = document.getElementById('browseMovie');
 async function fetchMovies(){
  try{
     movieDisplay.innerHTML="";
     const response= await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=2594b313a8dd028dd39fd6439a4b84a7");
     const data =await response.json();
    
  for(i=0; i<20; i++ ){
    const movie = data.results[i];
    const movieHolder = document.createElement("div");
    const imgSrc= `https://image.tmdb.org/t/p/w400${movie.backdrop_path}`;
    movieHolder.innerHTML=`
    <img src=" ${imgSrc}"/>
    <h3> ${movie.title}</h3>
    <p>${movie.overview}<p>`
     movieDisplay.appendChild(movieHolder);
  }
   
  }catch(error){
    console.error("Error fetching movies:", error);
    movieDisplay.textContent = "Failed to load movies.";
  
  }
}
 


browseMovie.addEventListener("click", fetchMovies);