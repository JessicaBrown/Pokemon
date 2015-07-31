app.service('pokeService', function($q){
var pokeChar = [
	 {
     name: "Bulbasaur",
     weight: 69,
     speed: 45,
     id: "1",
 },
  {
     name: "Ekans",
     weight: 69,
     speed: 55,
     id: "23",  
 },
  {
     name: "Bellsprout",
     weight: 40,
     speed: 40,
     id: "69",  
 },
   {
     name: "Tentacruel",
     weight: 550,
     speed: 100,
     id: "73",  
 },  {
     name: "Muk",
     weight: 89,
     speed: 50,
     id:  89,  
 },  {
     name: "Gastly",
     weight: 1,
     speed: 80,
     id: "92",  
 },  {
     name: "Drowzee",
     weight: 324,
     speed: 42,
     id: "96",  
 },  {
     name: "Voltorb",
     weight: 104,
     speed: 100,
     id: "100",  
 },  {
     name: "Marowak",
     weight: 450,
     speed: 45,
     id: "105",  
 },  {
     name: "Crobat",
     weight: 750,
     speed: 130,
     id: "169",  
 },
	];

	this.getData = function() { 
    //THIS MAKES IT ASYNCRONOUS
        var defer = $q.defer();
		defer.resolve(pokeChar);
        return defer.promise;
	};

});