// function calculadora(n1, n2,suma){
//     return suma(n1,n2)
// }

// calculadora(2,3,(n1,n2) => {
//     return n1+n2
// })

// console.log(resultado);

const pelis = [
    {
  
      id: 1,
  
      titulo: "The Lord of the Rings: The Return of the King",
  
      director: "Peter Jackson",
  
      genero: "Aventura",
  
      anio: 2003,
  
      duracionEnMinutos: 401,
  
      ganoOscar: true,
  
      calificacionIMDB: 8.9,
  
    },
  
    {
      id: 2,
  
      titulo: "Doctor Strange",
  
      director: "Scott Derrickson",
  
      genero: "Accion",
  
      anio: 2016,
  
      duracionEnMinutos: 115,
  
      ganoOscar: true,
  
      calificacionIMDB: 7.5,
  
    },
  
    {
  
      id: 3,
  
      titulo: "The Last Lovecraft: Relic of Cthulhu",
  
      director: "Henry Saine",
  
      genero: "Horror",
  
      anio: 2009,
  
      duracionEnMinutos: 78,
  
      ganoOscar: false,
  
      calificacionIMDB: 5.6,
  
    },
  
    {
  
      id: 4,
  
      titulo: "The Avengers: Age of Ultron",
  
      director: "Joss Whedon",
  
      genero: "Accion",
  
      anio: 2015,
  
      duracionEnMinutos: 141,
  
      ganoOscar: false,
  
      calificacionIMDB: 7.3,
  
    },
  
  ];

  const filmoteca = {
    peliculas:pelis,
    buscarPorID:function(id){
       let arr =  this.peliculas.filter(function(pelicula){
           if(pelicula.id == id){
              return true
           } 
           else{
            false
           }
        })
        return arr[0]
    },
    buscarPorTitulo:function(title){
        let titulo = this.peliculas.filter(function(pelicula){
            if(pelicula.titulo==title){
                return true
            }
            else{
                false
            }
        })
        return titulo[0]
    }
  }

  filmoteca.buscarPorID(4)
  filmoteca.buscarPorTitulo("")