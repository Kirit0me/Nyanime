function Card({anilist}) {
    const animes = anilist.map(ani=>
        <div class="scroll-ml-6 snap-start relative">  
            <div class="hover:opacity-75 hover:scale-105 scroll-ml-6 snap-start flex-none rounded-3xl w-48 h-72 mb-5 mr-4 bg-slate-700 hover:bg-gradient-to-tr from-slate-800 via-slate-500 to-slate-800">
            <img 
            src={ani?.images.jpg.large_image_url}
            alt={ani?.title}
            class="object-fit h-72 w-48 rounded-3xl mx-auto"
            >
            </img>
            <h2 class=" absolute mx-auto hover:opacity-100 opacity-0 bg-slate-700 bottom-4 text-xl rounded-3xl font-bold text-center text-fuchsia-300">{ani?.title}</h2>
            </div>
        </div>
    )
    return(
        <div class="snap-x bg-black flex rounded-3xl flex-row flex-wrap pt-4 pb-4">{animes}</div>
    ) 
}

export default Card;