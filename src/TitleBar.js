import React, { useState } from 'react';
import AnimeMain from './AnimeMain';
import Home from './Home';

function TitleBar(){
    let content;
    const [anime_pages, set_anime] = useState(false);
    const [home_pages, set_home] = useState(true);
    function HomePage() {
        if(!home_pages){
            set_anime(prevpage => !prevpage);
            set_home(prevpage => !prevpage);
        }
    };
    function AnimePage() {
        if(!anime_pages){
            set_anime(prevpage => !prevpage);
            set_home(prevpage => !prevpage);
        }
    };
    if(anime_pages){
        content = <AnimeMain />
    } else if(home_pages) {
        content = <Home />
    }
    return(
        <>
        <div class="flex flew-row content-center w-1/2 object-center bg-slate-900 mx-auto pb-4 justify-center space-x-2 p-2 rounded-b-3xl">
            <div class="p-2 shrink text-red-400 text-2xl font-bold rounded-xl bg-stone-700">
                <button onClick={AnimePage}>NYANIME</button>
            </div>
            <div class="p-2 shrink text-red-400 text-2xl font-bold rounded-xl bg-stone-700">
                <button onClick={HomePage}>NYA-HOME</button>
            </div>
        </div>
        {content}
        </>
    )
}

export default TitleBar;