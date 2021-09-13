import { Injectable } from '@angular/core';


let moviedata : any [] =  
[

  {"id":"tt0111161",
  "rank":"1",
  "title":"The Shawshank Redemption",
  "fullTitle":"The Shawshank Redemption (1994)",
  "year":"1994",
  "image":"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
  "imDbRating":"9.2",
  "imDbRatingCount":"2457121"
},
{
  "id":"tt0068646",
  "rank":"2",
  "title":"The Godfather",
  "fullTitle":"The Godfather (1972)",
  "year":"1972",
  "image":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
  "crew":"Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
  "imDbRating":"9.1",
  "imDbRatingCount":"1700088"
},
{
  "id":"tt0071562",
  "rank":"3",
  "title":"The Godfather: Part II",
  "fullTitle":"The Godfather: Part II (1974)",
  "year":"1974",
  "image":"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
  "crew":"Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
  "imDbRating":"9.0",
  "imDbRatingCount":"1180818"
},
{
  "id":"tt0468569",
  "rank":"4",
  "title":"The Dark Knight",
  "fullTitle":"The Dark Knight (2008)",
  "year":"2008",
  "image":"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Christopher Nolan (dir.), Christian Bale, Heath Ledger",
  "imDbRating":"9.0",
  "imDbRatingCount":"2412841"
},
{
  "id":"tt0050083",
  "rank":"5",
  "title":"12 Angry Men",
  "fullTitle":"12 Angry Men (1957)",
  "year":"1957",
  "image":"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
  "imDbRating":"8.9",
  "imDbRatingCount":"727398"
},
{
  "id":"tt0108052",
  "rank":"6",
  "title":"Schindler's List",
  "fullTitle":"Schindler's List (1993)",
  "year":"1993",
  "image":"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
  "imDbRating":"8.9",
  "imDbRatingCount":"1263502"
},
{
  "id":"tt0167260",
  "rank":"7",
  "title":"The Lord of the Rings: The Return of the King",
  "fullTitle":"The Lord of the Rings: The Return of the King (2003)",
  "year":"2003",
  "image":"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Peter Jackson (dir.), Elijah Wood, Viggo Mortensen",
  "imDbRating":"8.9",
  "imDbRatingCount":"1705966"
},
{
  "id":"tt0110912",
  "rank":"8",
  "title":"Pulp Fiction",
  "fullTitle":"Pulp Fiction (1994)",
  "year":"1994",
  "image":"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Quentin Tarantino (dir.), John Travolta, Uma Thurman",
  "imDbRating":"8.8",
  "imDbRatingCount":"1903939"
},
{
  "id":"tt0060196",
  "rank":"9",
  "title":"The Good, the Bad and the Ugly",
  "fullTitle":"The Good, the Bad and the Ugly (1966)",
  "year":"1966",
  "image":"https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Sergio Leone (dir.), Clint Eastwood, Eli Wallach",
  "imDbRating":"8.8",
  "imDbRatingCount":"716197"
},
{
  "id":"tt0120737",
  "rank":"10",
  "title":"The Lord of the Rings: The Fellowship of the Ring",
  "fullTitle":"The Lord of the Rings: The Fellowship of the Ring (2001)",
  "year":"2001",
  "image":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Peter Jackson (dir.), Elijah Wood, Ian McKellen",
  "imDbRating":"8.8",
  "imDbRatingCount":"1727226"
},
{
  "id":"tt0137523",
  "rank":"11",
  "title":"Fight Club",
  "fullTitle":"Fight Club (1999)",
  "year":"1999",
  "image":"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"David Fincher (dir.), Brad Pitt, Edward Norton",
  "imDbRating":"8.8",
  "imDbRatingCount":"1935602"
},
{
  "id":"tt0109830",
  "rank":"12",
  "title":"Forrest Gump",
  "fullTitle":"Forrest Gump (1994)",
  "year":"1994",
  "image":"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Robert Zemeckis (dir.), Tom Hanks, Robin Wright",
  "imDbRating":"8.7",
  "imDbRatingCount":"1899729"
},
{
  "id":"tt1375666",
  "rank":"13",
  "title":"Inception",
  "fullTitle":"Inception (2010)",
  "year":"2010",
  "image":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Christopher Nolan (dir.), Leonardo DiCaprio, Joseph Gordon-Levitt",
  "imDbRating":"8.7",
  "imDbRatingCount":"2164546"
},
{
  "id":"tt0167261",
  "rank":"14",
  "title":"The Lord of the Rings: The Two Towers",
  "fullTitle":"The Lord of the Rings: The Two Towers (2002)",
  "year":"2002",
  "image":"https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Peter Jackson (dir.), Elijah Wood, Ian McKellen",
  "imDbRating":"8.7",
  "imDbRatingCount":"1542357"
},
{
  "id":"tt0080684",
  "rank":"15",
  "title":"Star Wars: Episode V - The Empire Strikes Back",
  "fullTitle":"Star Wars: Episode V - The Empire Strikes Back (1980)",
  "year":"1980",
  "image":"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Irvin Kershner (dir.), Mark Hamill, Harrison Ford",
  "imDbRating":"8.7",
  "imDbRatingCount":"1202658"
},
{
  "id":"tt0133093",
  "rank":"16",
  "title":"The Matrix",
  "fullTitle":"The Matrix (1999)",
  "year":"1999",
  "image":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Lana Wachowski (dir.), Keanu Reeves, Laurence Fishburne",
  "imDbRating":"8.6",
  "imDbRatingCount":"1749049"
},
{
  "id":"tt0099685",
  "rank":"17",
  "title":"Goodfellas",
  "fullTitle":"Goodfellas (1990)",
  "year":"1990",
  "image":"https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Martin Scorsese (dir.), Robert De Niro, Ray Liotta",
  "imDbRating":"8.6",
  "imDbRatingCount":"1067110"
},
{
  "id":"tt0073486",
  "rank":"18",
  "title":"One Flew Over the Cuckoo's Nest",
  "fullTitle":"One Flew Over the Cuckoo's Nest (1975)",
  "year":"1975",
  "image":"https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Milos Forman (dir.), Jack Nicholson, Louise Fletcher",
  "imDbRating":"8.6",
  "imDbRatingCount":"952134"
},
{
  "id":"tt0047478",
  "rank":"19",
  "title":"Seven Samurai",
  "fullTitle":"Seven Samurai (1954)",
  "year":"1954",
  "image":"https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
  "crew":"Akira Kurosawa (dir.), Toshirô Mifune, Takashi Shimura",
  "imDbRating":"8.6",
  "imDbRatingCount":"328211"
},
{
  "id":"tt0114369",
  "rank":"20",
  "title":"Se7en",
  "fullTitle":"Se7en (1995)",
  "year":"1995",
  "image":"https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"David Fincher (dir.), Morgan Freeman, Brad Pitt",
  "imDbRating":"8.6",
  "imDbRatingCount":"1512486"
},
{
  "id":"tt0102926",
  "rank":"21",
  "title":"The Silence of the Lambs",
  "fullTitle":"The Silence of the Lambs (1991)",
  "year":"1991",
  "image":"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Jonathan Demme (dir.), Jodie Foster, Anthony Hopkins",
  "imDbRating":"8.6",
  "imDbRatingCount":"1328459"
},
{
  "id":"tt0317248",
  "rank":"22",
  "title":"City of God",
  "fullTitle":"City of God (2002)",
  "year":"2002",
  "image":"https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Fernando Meirelles (dir.), Alexandre Rodrigues, Leandro Firmino",
  "imDbRating":"8.6",
  "imDbRatingCount":"720632"
},
{
  "id":"tt0118799",
  "rank":"23",
  "title":"Life Is Beautiful",
  "fullTitle":"Life Is Beautiful (1997)",
  "year":"1997",
  "image":"https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Roberto Benigni (dir.), Roberto Benigni, Nicoletta Braschi",
  "imDbRating":"8.6",
  "imDbRatingCount":"650476"
},
{
  "id":"tt0038650",
  "rank":"24",
  "title":"It's a Wonderful Life",
  "fullTitle":"It's a Wonderful Life (1946)",
  "year":"1946",
  "image":"https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Frank Capra (dir.), James Stewart, Donna Reed",
  "imDbRating":"8.6",
  "imDbRatingCount":"421551"
},
{
  "id":"tt0076759",
  "rank":"25",
  "title":"Star Wars: Episode IV - A New Hope",
  "fullTitle":"Star Wars: Episode IV - A New Hope (1977)",
  "year":"1977",
  "image":"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"George Lucas (dir.), Mark Hamill, Harrison Ford",
  "imDbRating":"8.6",
  "imDbRatingCount":"1274525"
},
{
  "id":"tt0120815",
  "rank":"26",
  "title":"Saving Private Ryan",
  "fullTitle":"Saving Private Ryan (1998)",
  "year":"1998",
  "image":"https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Steven Spielberg (dir.), Tom Hanks, Matt Damon",
  "imDbRating":"8.5",
  "imDbRatingCount":"1288988"
},
{
  "id":"tt0816692",
  "rank":"27",
  "title":"Interstellar",
  "fullTitle":"Interstellar (2014)",
  "year":"2014",
  "image":"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Christopher Nolan (dir.), Matthew McConaughey, Anne Hathaway",
  "imDbRating":"8.5",
  "imDbRatingCount":"1609070"
},
{
  "id":"tt0245429",
  "rank":"28",
  "title":"Spirited Away",
  "fullTitle":"Spirited Away (2001)",
  "year":"2001",
  "image":"https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Hayao Miyazaki (dir.), Daveigh Chase, Suzanne Pleshette",
  "imDbRating":"8.5",
  "imDbRatingCount":"691267"
},
{
  "id":"tt0120689",
  "rank":"29",
  "title":"The Green Mile",
  "fullTitle":"The Green Mile (1999)",
  "year":"1999",
  "image":"https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Frank Darabont (dir.), Tom Hanks, Michael Clarke Duncan",
  "imDbRating":"8.5",
  "imDbRatingCount":"1200481"
},
{
  "id":"tt6751668",
  "rank":"30",
  "title":"Parasite",
  "fullTitle":"Parasite (2019)",
  "year":"2019",
  "image":"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "crew":"Bong Joon Ho (dir.), Kang-ho Song, Sun-kyun Lee",
  "imDbRating":"8.5",
  "imDbRatingCount":"654941"
}




]

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  getAllMovies(){
      return moviedata;
  }
  






  constructor() { }



}
