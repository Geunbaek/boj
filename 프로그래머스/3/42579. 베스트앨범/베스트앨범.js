function solution(genres, plays) {
    const n = genres.length;
    const genreMap = {};
    
    for (let index = 0; index < n; index ++) {
        const genre = genres[index];
        const play = plays[index];
        
        if (genre in genreMap) {
            const { total, songs } = genreMap[genre];
            genreMap[genre] = { 
                total: total + play, 
                songs: [...songs, {play, index}] 
            };
        } else {
            genreMap[genre] = { total: play, songs: [{play, index}]};
        }
    }
    
    const sorted = Object.entries(genreMap).sort((a, b) => {
        const [aGenre, aInfo] = a;
        const [bGenre, bInfo] = b;
        return bInfo.total - aInfo.total;
    })
    
    return sorted.map(info => {
        const {songs} = info[1];
        const sortedSongs = songs.sort((a, b) => b.play - a.play);
        return sortedSongs.slice(0, 2).map(song => song.index);
    }).flat()
}