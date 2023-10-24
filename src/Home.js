import kurisu from "./images/kurisunyan_edited.jpg"
import nekopara from "./images/chocola.jpg"
import faris from "./images/faris-nyannyan.webp"
import rory from "./images/rory.jpg"
import azu from "./images/azunyan.png"
import kal from "./images/kaltsit.jpg"
import yoruichi from "./images/yoruichi.png"

function Home(){
    return(
        <div class="flex flex-col rounded-3xl justify-center">
            <h1 class="p-12 font-bold text-5xl text-center rounded-xl"><span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-red-400 to-fuchsia-500">Welcome to The Cat-Cafe of Nyanime!</span></h1>
            <div class="grid grid-cols-3 gap-10">
                <img 
                src={kurisu}
                alt="kurisu"
                class="rounded-full border-spacing-2 border-pink-500 object-contain p-4 mx-auto"
                ></img>
                            <img 
                src={nekopara}
                alt="kurisu"
                class="rounded-full border-spacing-2 border-pink-500 object-contain p-4 mx-auto"
                ></img>
                            <img 
                src={kal}
                alt="kurisu"
                class="rounded-full border-spacing-2 border-pink-500 object-contain p-4 mx-auto"
                ></img>
                            <img 
                src={rory}
                alt="kurisu"
                class="rounded-full border-spacing-2 border-pink-500 object-contain p-4 mx-auto"
                ></img>
                            <img 
                src={azu}
                alt="kurisu"
                class="rounded-full border-spacing-2 border-pink-500 object-contain p-4 mx-auto"
                ></img>
                            <img 
                src={yoruichi}
                alt="kurisu"
                class="rounded-full border-spacing-2 border-pink-500 object-contain p-4 mx-auto"
                ></img>
                            <img 
                src={faris}
                alt="kurisu"
                class="rounded-full border-spacing-2 border-pink-500 object-contain p-4 mx-auto"
                ></img>
            </div>
        </div>
    )
}

export default Home;