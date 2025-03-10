function solution(genres, plays) {
    const n = genres.length;
    
    // Map<genre, number>
    // 노래가 가장 많이 재생된 장르를 찾기 위함
    const genrePlaysMap = new Map();
    // Map<genre, {play: number, index: numer}[]>
    // 장르 내에서 가장 많이 재생된 노래를 찾기 위함
    const genreSongsMap = new Map();
    
    
    for (let index = 0; index < n; index ++) {
        const genre = genres[index];
        const play = plays[index];
    
        genrePlaysMap.set(genre, (genrePlaysMap.get(genre) || 0) + play)
        genreSongsMap.set(genre, (genreSongsMap.get(genre) || []).concat({play, index}))
    }
    
    // 노래가 재생된 횟수에 따라 내림차순 정렬
    const sortedGenrePlays = [...genrePlaysMap.entries()].sort((a, b) => b[1] - a[1]);
    
    // 정렬된 장르에 따라 속한 노래의 재생된 횟수에 따라 내림차순 정렬후 가장 많이 재생된 2곡의 index 를 추출
    const answer = sortedGenrePlays.map(([genre]) => {
        return genreSongsMap
            .get(genre)
            .sort((a, b) => b.play - a.play || a.index - b.index)
            .slice(0, 2)
            .map(song => song.index);
    }).flat();
    
    return answer
}