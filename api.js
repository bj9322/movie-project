const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGFlMjdkZTE4MDAyZTRiNjg2MmY2NzdjNDQ2YjZkZCIsIm5iZiI6MTcyOTA0NzA0NC44Nzg4MzIsInN1YiI6IjY3MGYwNzhmMDQzMzFkYjRiMTEyNTgzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EZk2XXy9p2KGxKE5UqCD6gIWiGAMpIoSnKzinenokRQ'
  }
};

export async function fetchMovies() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options);
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
}


// export function fetchMovies() {
//   return fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
//       .then(response => response.json())
//       .catch(err => console.error(err));
// }