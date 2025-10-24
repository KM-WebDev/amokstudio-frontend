import Fog from "@/components/Fog";

export default function Hero() {
    return (
        <div className="relative">
            <div className="h-[300vh] overflow-hidden md:h-[400vh]">
                <Fog className="h-full"></Fog>
            </div>
            <h1 className="fixed top-[25%] left-[50%] z-10 -translate-x-[50%] -translate-y-[50%] text-center text-5xl text-white md:text-8xl">
                AMOKSTUDIO
            </h1>
        </div>
    );
}
