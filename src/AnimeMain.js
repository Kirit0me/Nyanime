import React, { useEffect, useState } from "react";
import Card from "./Card";

function AnimeMain() {
  const [topAnime, setTopAnime] = useState([]);
  const [seasonal, setSeasonal] = useState([]);

  const fetchAnime = async () => {
    const top = await fetch(`https://api.jikan.moe/v4/top/anime?limit=25`);
    const outputTop = await top.json();
    const seasons = await fetch("https://api.jikan.moe/v4/seasons/now");
    const outputSeasonal = await seasons.json();
    setTopAnime(outputTop.data);
    setSeasonal(outputSeasonal.data);
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <div class="text-xl bg-slate-800">
      <h1 class="text-3xl p-6 bg-clip-text text-transparent bg-gradient-to-l from-fuchsia-300 to-pink-400">
        The<b>Top</b>Anime
      </h1>
      <Card anilist={topAnime} />
    </div>
  );
}

export default AnimeMain;