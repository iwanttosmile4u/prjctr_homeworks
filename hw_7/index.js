// Task 1

function detonatorTimerInterval(delay) {
  const timerId = setInterval(
    () => {
      if (delay === 0) {
        console.log('BOOM!');
        clearInterval(timerId);
      } else {
        console.log(delay);
        delay--;
      }
    },
    1000
  )
}

detonatorTimerInterval(3);

// Task 2

function detonatorTimerTimeout(delay) {
  if (delay === 0) {
    console.log('BOOM!');
    return;
  }

  console.log(delay);
  setTimeout(() => detonatorTimerTimeout(--delay), 1000);
}

detonatorTimerTimeout(3);

// Task 3

const movie = {
  title: 'Interstellar',
  genre: 'Science fiction',
  releaseYear: 2014,
  director: 'Christopher Nolan',
  imdbRaiting: 8.7,
  cast: ['Matthew McConaughey', 'Jessica Chastain', 'Anne Hathaway', 'Mackenzie Foy', 'Bill Irwin', 'Ellen Burstyn', 'Michael Caine'],
  watched: false,

  describeMovie() {
    console.log(`${this.title} is a ${this.genre} movie directed by ${this.director}, released in ${this.releaseYear}.`);
  },

  introduceCast() {
    const castList = this.cast.join(', ');
    console.log(`The main cast of ${this.title} includes: ${castList}.`);
  },

  recommendMovie() {
    if (this.imdbRaiting >= 7) {
      console.log(`Highly recommended! IMDb raiting is ${this.imdbRaiting}/10.`);
    } else {
      console.log('Don\'t waste your time =)');
    }
  },

  isWatched() {
    if (!this.watched) {
      this.watched = true;
      console.log(`You've marked ${this.title} as watched.`)
    } else {
    console.log(`You've watched ${this.title}.`);
    }
  },

  updateRaiting(newRaitingMark) {
    const condition = typeof newRaitingMark === 'number' && this.imdbRaiting >= 0 && this.imdbRaiting <= 10; 
    if (condition) {
      this.imdbRaiting = newRaitingMark;
      console.log(`The IMDb raiting ${this.title} was updated to ${this.imdbRaiting}/10.`)
    } else {
      console.log(`Rate ${this.title}.`);
    }
  }
}

movie.describeMovie();
movie.introduceCast();
movie.recommendMovie();
movie.isWatched();
movie.updateRaiting(3);

// Task 4

const securedMovieDescribing = movie.describeMovie.bind(movie);
const securedCastIntroducing = movie.introduceCast.bind(movie);
const securedMovieRecommendation = movie.recommendMovie.bind(movie);
const securedMarkedAsWatched = movie.isWatched.bind(movie);
const securedRaitingUpdating = movie.updateRaiting.bind(movie);

setTimeout(securedMovieDescribing, 1000);
setTimeout(securedCastIntroducing, 2000);
setTimeout(securedMovieRecommendation, 3000);
setTimeout(securedMarkedAsWatched, 4000);
setTimeout(() => securedRaitingUpdating(9), 5000);

// Task 5

function someFunction(...numbers) {
  const numbersList = [...numbers].join(', ');
  console.log(`Congrats! This is your result: ${numbersList}`);
}

function slower(func, seconds) {
  return function(...args) {
    console.log(`Chill out, you will get you result in ${seconds} seconds`);
    console.log({args});
    
    setTimeout(() => func(...args), seconds * 1000);
  }
}

const slowedSomeFunction = slower(someFunction, 1);

slowedSomeFunction(10, 20, 30);