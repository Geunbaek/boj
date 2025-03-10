function solution(genres, plays) {
    const n = genres.length;
    const genrePlaysMap = new Map();
    const genreSongsMap = new Map();
    
    for (let index = 0; index < n; index ++) {
        const genre = genres[index];
        const play = plays[index];
    
        genrePlaysMap.set(genre, (genrePlaysMap.get(genre) || 0) + play)
        genreSongsMap.set(genre, (genreSongsMap.get(genre) || []).concat({play, index}))
    }
    const sortedGenrePlays = [...genrePlaysMap.entries()].sort((a, b) => b[1] - a[1]);
    
    const answer = sortedGenrePlays.map(([genre]) => {
        return genreSongsMap
            .get(genre)
            .sort((a, b) => b.play - a.play)
            .slice(0, 2)
            .map(song => song.index);
    }).flat();
    
    return answer
}