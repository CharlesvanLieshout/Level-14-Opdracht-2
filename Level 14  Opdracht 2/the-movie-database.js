const favoriteMovie = { 
title: "Puff the Magic Dragon",
duration:  30,
stars: ["Puff", "Jackie", "Living Sneezes"],

};

const printMovie = function(){
    console.log(favoriteMovie.title + "  lasts for " +  favoriteMovie.duration + " minutes. Stars: " + favoriteMovie.stars);
}
printMovie()