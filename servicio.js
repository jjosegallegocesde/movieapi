let uri="https://api.themoviedb.org/3/movie/popular?api_key=47a83b2e635a9efd1281b13315c7eb05"
let parametros={
    method:"GET",
}
let path="https://image.tmdb.org/t/p/original/"
async function consumirAPI(uri,parametros){
    let resultado=await fetch(uri,parametros)
    let peliculas=resultado.json()
    return peliculas
}

let peliculas=await consumirAPI(uri,parametros)
console.log(peliculas)

peliculas.results.forEach(pelicula=>{
    console.log(path+pelicula.backdrop_path)
})

