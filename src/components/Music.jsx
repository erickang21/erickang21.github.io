import React from 'react';
import '../css/music.css'; // Import the CSS file


const MusicCard = ({ ranking, title, artist, album, spotifyEmbed, change, changeUp }) => {
    return (
      <div className="music-card">
        <div className="rankings-container">
            <div className="ranking">{ranking}</div>
            <div className="rankingChange">{ranking}</div>
        </div>
        <div className="spotify-embed" dangerouslySetInnerHTML={{ __html: spotifyEmbed }} />
      </div>
    );
  };

  const Card = ({ rank, rankingChange, spotifyEmbed }) => {
    return (
      <div className="card">
        <div className="rank-container">
          <p className="rank">{rank}</p>
          <p className="ranking-change">{rankingChange}</p>
        </div>
        <div className="spotify-embed-container" dangerouslySetInnerHTML={{ __html: spotifyEmbed }}>
        </div>
      </div>
    );
  };

  const CardList = ({ data }) => {
    return (
      <div className="card-list-container">
        {data.map((cardData, index) => (
          <Card key={index} {...cardData} />
        ))}
      </div>
    );
  };

const MusicPage = () => {
  const musicData = [
    { rank: 1, rankingChange: 2, changeUp: true, title: 'Song 1', artist: 'Artist 1', album: 'Album 1', spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1RVsbqAP1WFFXPiBXQYIah?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>' },
    { ranking: 2, title: 'Song 2', artist: 'Artist 2', album: 'Album 2', spotifyEmbed: '' },
    // Add more music data as needed
  ];

  return (
    <div>
      <h1>Music Page</h1>
      <CardList data={musicData} />
    </div>
  );
};

export default MusicPage;