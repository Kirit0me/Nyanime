function Card({anilist}) {
    const animes = anilist.map(ani=>
        <div class="flex-none rounded-3xl w-96 mb-5 mr-4 bg-slate-700 hover:bg-gradient-to-tr from-slate-800 via-slate-500 to-slate-800">
        <h2 class="text-xl pt-4 pb-4 font-bold text-center text-fuchsia-300">{ani?.title}</h2>
        <img 
          src={ani?.images.jpg.large_image_url}
          alt={ani?.title}
          class="relative mx-auto rounded-3xl h-60 w-30 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] hover:opacity-75 hover:scale-105"
        >
        </img>
        </div>
    )
    return(
        <div class="bg-black flex rounded-3xl flex-row flex-wrap pt-4 pb-4">{animes}</div>
    ) 
}

export default Card;