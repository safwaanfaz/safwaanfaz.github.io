 function getMusicTitlesByYear(tracks) {
    const result = {};

    if (!Array.isArray(tracks)) {
        throw new Error("Input should be an array of tracks.");
    }

    tracks.forEach(track => {

        if (!track || typeof track !== 'object' || !track.title || !track.year || typeof track.title !== 'string' || typeof track.year !== 'number') {
            console.warn("Skipping invalid track:", track);
            return; 
        }

        const { title, year } = track;

        if (isNaN(year)) {
            console.warn("Skipping track with invalid year:", track);
            return;
        }

        if (!result[year]) {
            result[year] = [];
        }

        result[year].push(title);
    });
    for (const year in result) {
        if (result.hasOwnProperty(year)) {
            result[year].sort();
        }
    }

    return result;
}
const tracks = [
    { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020 },
    { title: 'Levitating', artist: 'Dua Lipa', year: 2021 },
    { title: 'Save Your Tears', artist: 'The Weeknd', year: 2020 },
  ];

  const result = getMusicTitlesByYear(tracks);

  console.log(result);