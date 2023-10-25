function Card({anilist}) {
    const animes = anilist.map(ani=>
        <a href={ani?.url}>
            <div class="border-4 border-fuchsia-600 relative mx-auto hover:opacity-80 hover:scale-105 scroll-ml-6 flex-none rounded-3xl w-48 h-72 mb-8 mr-8">
                <img 
                    src={ani?.images.jpg.large_image_url}
                    alt={ani?.title}
                    class="object-fit h-72 w-48 rounded-3xl mx-auto"
                >
                </img>
                <h2 class="absolute min-w-full max-w-fit mx-auto hover:opacity-80 opacity-0 bg-slate-500 text-xl rounded-3xl bottom-0 p-2 pb-6 font-bold text-center text-fuchsia-300">{ani?.title}</h2>
            </div>
        </a>
    )
    return(
        <div class="overflow-y-hidden overflow-x-scroll max-w-full">
            <div class="max-w-full bg-slate-800 p-6 relative snap-x flex flex-row pt-4 pb-4">{animes}</div>
        </div>
    ) 
}

export default Card;