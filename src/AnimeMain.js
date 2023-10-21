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
      <h1>
        Top Anime
      </h1>
      <Card anilist={topAnime} />
    </div>
  );
}

export default AnimeMain;