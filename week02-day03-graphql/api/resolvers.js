const { data } = require('./data');
const resolvers = {
    Query: {
        people() {
            // TODO
        },
        person(root, { id }) {
            // TODO
        },
        movies() {
            return data.movies;
        },
        movie(root, { id }) {
            return data.movies.find((movie) => movie.id === parseInt(id));
        }
    },
    Movie: {
        stars(movie) {
            return data.people.filter((person) => (
                person.filmography.find((credit) => (
                    credit === movie.id && person.id !== movie.director
                ))
            ));
        },
        director(movie) {
            if (!movie.director) {
                return null;
            };
            return data.people.find((person) => person.id === movie.director);
        }
    }
};

module.exports = resolvers;