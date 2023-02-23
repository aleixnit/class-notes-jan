// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
const directorsListUnfiltered = movies.map((movie) => movie.director);

const directorsListFiltered = directorsListUnfiltered.filter((director, index) => { return directorsListUnfiltered.indexOf(director) === index 
}
)

return directorsListFiltered;
}
console.table(getAllDirectors(movies));



// const directorsRaw = movies.map(movies => movies.director)

// let directorsFiltered = directorsRaw.filter((director, index) =>
// directorsRaw.indexOf(director) === index)
// console.log(directorsFiltered);
// return directorsFiltered;
// }

// function getAllDirectors(moviesArray) {
//   let directores = moviesArray.map((directors) => {
//     return directors.director;
//   });
//   console.log(directores);
//   return directores;
// }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
    const stevenDramaFilteredMovies = movies.filter((movie) => {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    });
    return stevenDramaFilteredMovies.length;
};
console.table(howManyMovies(movies));

// function howManyMovies(movies) {
//     const filteredMovies = movies.filter((movies) => { return {movie.director === "Steven Spielberg" && movie.genre.includes ("Drama")};
//     })
// }
//     const filteredMovies = movies.filter((movie) =>
//     { return {movie.director === "Steven Spielberg" && movie.genre.includes("Drama")};
// })
// return filteredMovies.lenght;
// }


// function howManyMovies(moviesArray) {
//     let total = 0;

//     moviesArray.filter((numSpielberg) => {
//         if (numSpielberg.director == "Steven Spielberg") {
//             for (i = 0; i < numSpielberg.genre.length; i++) {
//                 if (numSpielberg.genre[i] == "Drama") {
//                     total++;
//                 }
//             }
//         }
//     });
//     return total;

// }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (movies) => { 
    if (movies.length === 0) return 0;

    const totalScore = movies.reduce((accumulator, currentValue) => {
        if (currentValue.score) {
            return accumulator + currentValue.score;
        } else {
            return accumulator;
        }
    }, 0);
    const averageScoreString = (totalScore / movies.length).toFixed(2);

    return Number(averageScoreString);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (movies) => {

    if (movies.length === 0) return 0;

    const dramaMoviesUsingIncludes = movies.filter((movie) => movie.genre.includes("Drama"));

    const averageDramaScores = scoresAverage(dramaMoviesUsingIncludes);

    return averageDramaScores;
 }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
    const movieArrayCopy = movies.map((movie) => { return movie});
    movieArrayCopy.sort((movieA, movieB) => {
if (movieA.year > movieB.year) return movieA.year - movieB.year;
if (movieA.year < movieB.year) return movieA.year - movieB.year;
else return movieA.title.localeCompare(movieB.title)
    });
    return movieArrayCopy;

 }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
    return movies.map((movies) => movie.title).sort().slice(0, 20);
 };

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
