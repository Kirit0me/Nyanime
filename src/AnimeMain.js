import React, { useEffect, useState } from "react";
import Card from "./Card";

function AnimeMain() {
  const [topAnime, setTopAnime] = useState([]);
  const [seasonal, setSeasonal] = useState([]);
  const [randomAnime, setRandom] = useState();

  const fetchAnime = async () => {
    const top = await fetch(`https://api.jikan.moe/v4/top/anime?limit=25`);
    const outputTop = await top.json();
    const seasons = await fetch(`https://api.jikan.moe/v4/seasons/now?limit=25`);
    const outputSeasonal = await seasons.json();
    const random = await fetch(`https://api.jikan.moe/v4/random/anime`);
    const randomout = await random.json();
    setTopAnime(outputTop.data);
    setSeasonal(outputSeasonal.data);
    setRandom(randomout.data);
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <>
    <div class="p-6"></div>
    <div class="text-xl max-w-screen bg-slate-800">
      <div class="flex flex-row-reverse flex-nowrap">
        <div class="w-1/3 flex-none bg-grey-800 p-12 rounded-3xl hover:bg-slate-700 transition-colors ease-in-out">
          <img
            src={randomAnime?.images.webp.large_image_url}
            alt={randomAnime?.title}
            class="rounded-3xl h-96 w-72 object-contain mx-auto"
            >
          </img>
        </div>
        <div class="flex-none w-2/3">
          <h1 class="text-2xl p-6 text-center"><span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-300 font-bold">{randomAnime?.title} ({randomAnime?.title_japanese})</span></h1>
          <p class="p-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">{randomAnime?.synopsis}</p>
          <div class="justify-between flex flex-row-reverse flex-wrap gap-3">
            <div class="hover:bg-slate-600 text-cyan-300 p-6 text-xl font-bold rounded-3xl">Episodes : {randomAnime?.episodes}</div>
            <div class="hover:bg-slate-600 text-cyan-300 p-6 text-xl font-bold rounded-3xl"> Status : {randomAnime?.status}</div>
            <div class="hover:bg-slate-600 text-cyan-300 p-6 text-xl font-bold rounded-3xl">Rank : {randomAnime?.rank}</div>
            <div class="hover:bg-slate-600 text-cyan-300 p-6 text-xl font-bold rounded-3xl">Year : {randomAnime?.year}</div>
            <div class="hover:bg-slate-600 text-cyan-300 p-6 text-xl font-bold rounded-3xl">Rating : {randomAnime?.rating}</div>
          </div>
        </div>
      </div>
      <h1 class="text-3xl p-6 bg-clip-text text-transparent bg-gradient-to-l from-fuchsia-300 to-pink-400">
        The<b>Top</b>Anime
      </h1>
      <Card anilist={topAnime} />
      <h1 class="text-3xl p-6 bg-clip-text text-transparent bg-gradient-to-l from-fuchsia-300 to-pink-400">
        The<b>Seasonal</b>Anime
      </h1>
      <Card anilist={seasonal} />
    </div>
    </>
  );
}

export default AnimeMain;