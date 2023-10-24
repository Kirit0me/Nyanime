import React, { useState } from 'react';
import AnimeMain from './AnimeMain';
import Home from './Home';
import Music from './Music';

function TitleBar(){
    let content;
    const [anime_pages, set_anime] = useState(false);
    const [home_pages, set_home] = useState(true);
    const [music_pages, set_music] = useState(false);
    function HomePage() {
        if(!home_pages){
            set_anime(false);
            set_home(true);
            set_music(false);
        }
    };
    function AnimePage() {
        if(!anime_pages){
            set_anime(true);
            set_home(false);
            set_music(false);
        }
    };
    function MusicPage() {
        if(!anime_pages){
            set_anime(false);
            set_home(false);
            set_music(true);
        }
    };
    if(anime_pages){
        content = <AnimeMain />
    } else if(home_pages) {
        content = <Home />
    } else if(music_pages) {
        content = <Music />
    }
    return(
        <>
        <div class="flex flew-row content-center w-96 object-center bg-slate-900 mx-auto pb-4 justify-center space-x-2 p-2 rounded-b-3xl">
            <div class="p-2 shrink text-red-400 text-2xl rounded-xl bg-stone-700">
                <button onClick={AnimePage}><span class="font-bold">Nyan</span>ime</button>
            </div>
            <div class="p-2 shrink text-red-400 text-2xl rounded-xl bg-stone-700">
                <button onClick={HomePage}><span class="font-bold">Cat</span>Cafe</button>
            </div>
            <div class="p-2 shrink text-red-400 text-2xl rounded-xl bg-stone-700">
                <button onClick={MusicPage}><span class="font-bold">Meow</span>sic</button>
            </div>
        </div>
        {content}
        </>
    )
}

export default TitleBar;