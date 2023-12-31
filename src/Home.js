import kurisu from "./images/kurisunyan_edited.jpg"
import nekopara from "./images/chocola.jpg"
import faris from "./images/faris-nyannyan.webp"
import rory from "./images/rory.jpg"
import azu from "./images/azunyan.png"
import kal from "./images/kaltsit.jpg"
import yoruichi from "./images/yoruichi.png"
import blair from "./images/blair.webp"

function Home(){
    return(
        <div class="flex flex-col rounded-3xl justify-evely">
            <h1 class="p-12 font-bold text-5xl text-center rounded-xl"><span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-red-400 to-fuchsia-500">Welcome to The Cat-Cafe of Nyanime!</span></h1>
            <div class="flex flex-wrap flex-row-reverse justify-center">
                <div class="p-12">
                <img 
                src={kurisu}
                alt="kurisu"
                class="hover:translate-x-4 translate-y-4 hover:skew-y-6 transition-all ease-in-out h-72 w-72 p-6 hover:opacity-70 hover:border-0 border-spacing-2 hover:border-spacing-0 hover:scale-110 border-4 border-pink-500 rounded-full object-contain mx-auto"
                ></img></div>
                            <div class="p-12"><img 
                src={nekopara}
                alt="kurisu"
                class="hover:translate-x-4 translate-y-4 hover:skew-y-6 transition-all ease-in-out h-72 w-72 hover:opacity-70 hover:border-0  hover:border-spacing-0 hover:scale-110 rounded-full border-spacing-2 border-4 border-pink-500 object-contain p-6 mx-auto"
                ></img></div>
                            <div class="p-12"><img 
                src={kal}
                alt="kurisu"
                class="hover:translate-x-4 translate-y-4 hover:skew-y-6 transition-all ease-in-out h-72 w-72 hover:opacity-70 hover:border-0 hover:border-spacing-0 hover:scale-110 rounded-full border-spacing-2 border-4 border-pink-500 object-contain p-6 mx-auto"
                ></img></div>
                            <div class="p-12"><img 
                src={rory}
                alt="kurisu"
                class="hover:translate-x-4 translate-y-4 hover:skew-y-6 transition-all ease-in-out h-72 w-72 hover:opacity-70 hover:border-0 hover:border-spacing-0 hover:scale-110 rounded-full border-spacing-2 border-4 border-pink-500 object-contain p-6 mx-auto"
                ></img></div>
                            <div class="p-12"><img 
                src={azu}
                alt="kurisu"
                class="hover:translate-x-4 translate-y-4 hover:skew-y-6 transition-all ease-in-out h-72 w-72 hover:opacity-70 hover:border-0 hover:border-spacing-0 hover:scale-110 rounded-full border-spacing-2 border-4 border-pink-500 object-contain p-6 mx-auto"
                ></img></div>
                            <div class="p-12"><img 
                src={yoruichi}
                alt="kurisu"
                class="hover:translate-x-4 translate-y-4 hover:skew-y-6 transition-all ease-in-out h-72 w-72 hover:opacity-70 hover:border-0 hover:border-spacing-0 hover:scale-110 rounded-full border-spacing-2 border-4 border-pink-500 object-contain p-6 mx-auto"
                ></img></div>
                            <div class="p-12"><img 
                src={faris}
                alt="kurisu"
                class="hover:translate-x-4 translate-y-4 hover:skew-y-6 transition-all ease-in-out h-72 w-72 hover:opacity-70 hover:border-0 hover:border-spacing-0 hover:scale-110 rounded-full border-spacing-2 border-4 border-pink-500 object-contain p-6 mx-auto"
                ></img></div>
                            <div class="p-12"><img 
                src={blair}
                alt="kurisu"
                class="hover:translate-x-4 translate-y-4 hover:skew-y-6 transition-all ease-in-out h-72 w-72 hover:opacity-70 hover:border-0 hover:border-spacing-0 hover:scale-110 rounded-full border-spacing-2 border-4 border-pink-500 object-contain p-6 mx-auto"
                ></img></div>
            </div>
        </div>
    )
}

export default Home;