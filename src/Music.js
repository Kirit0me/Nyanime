function Music(){
    return(
        <div class="flex flex-col align-center justify-center p-6">
            <h1 class="p-8 text-center text-5xl bg-grey-900 rounded-xl"><span class="text-transparent bg-clip-text bg-gradient-to-l from-lime-300 via-green-500 to-teal-500">TasteOf<span class="font-extrabold">Meow</span>sic</span></h1>
            <div class="grid grid-cols-1 md:grid-cols-2 place-content-center">
                <iframe class="pl-4 rounded-xl" src="https://open.spotify.com/embed/track/5A0d3GnBCF8x4WJgvJhhgO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe class="pl-4 rounded-xl" src="https://open.spotify.com/embed/track/210JJAa9nJOgNa0YNrsT5g?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe class="pl-4 rounded-xl" src="https://open.spotify.com/embed/track/3HkuI61Gcjk5AlZKkS5PQ8?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe class="pl-4 rounded-xl" src="https://open.spotify.com/embed/track/2qb5ASYergjk2qNLvYEQJD?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Music;