import AnimatedContent from "@/components/thirdparty/reactbits/AnimatedContent";
import Image from "next/image";

export default function Bento() {
    return (
        <div className="bg-zinc-200 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-clr-brand-red text-center text-base/7 font-semibold">
                    Moje usługi
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-4xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-5xl">
                    Wszystko co potrzebujesz związane z designem
                </p>
                {/* <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-5"> */}
                {/* <div className="relative mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-5">
                 */}
                <div className="relative mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto_auto]">
                    <Left />
                    <Top />
                    <Bottom />
                    <Right />
                </div>
            </div>
        </div>
    );
}

export function Left() {
    return (
        <div className="relative lg:col-start-1 lg:row-span-5">
            <AnimatedContent
                distance={-50}
                direction="vertical"
                reverse={true}
                duration={1.2}
                initialOpacity={0}
                scale={1.1}
                threshold={0.5}
                delay={0.3}
            >
                <div className="absolute inset-px rounded-lg bg-zinc-50 max-lg:rounded-t-4xl lg:rounded-l-4xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                        <p className="mt-2 text-lg font-medium tracking-tight text-zinc-800 max-lg:text-center">
                            Logo i Branding
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-zinc-700 max-lg:text-center">
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo.
                        </p>
                    </div>
                    <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-lg">
                        <div className="absolute inset-x-8 top-10 bottom-8 overflow-hidden rounded-2xl outline outline-white/20 lg:inset-x-4 lg:bottom-4">
                            <Image
                                src={"/torba-amok.jpg"}
                                fill
                                className="relative object-cover"
                                alt="Kobieta trzymająca bawełniaą torbę z logiem Amok Studio"
                            />
                        </div>
                    </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg outline outline-white/15 lg:rounded-l-4xl" />
            </AnimatedContent>
        </div>
    );
}

function Top() {
    return (
        <div className="relative lg:col-start-2 lg:row-span-3">
            <AnimatedContent
                distance={-50}
                direction="vertical"
                reverse={true}
                duration={1.2}
                initialOpacity={0}
                scale={1.1}
                threshold={0.1}
                delay={0.3}
            >
                <div className="relative flex h-full flex-col gap-2 overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-zinc-50">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                        <p className="mt-2 text-lg font-medium tracking-tight text-zinc-800 max-lg:text-center">
                            Performance
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-zinc-700 max-lg:text-center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit maiores impedit.
                        </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center overflow-hidden px-8 pt-4 max-lg:pt-8 max-lg:pb-8 sm:px-4 lg:pb-4">
                        <div className="relative inset-x-0 flex h-full min-h-[250px] w-full items-center justify-center">
                            <Image
                                src={"/book-1.png"}
                                fill
                                className="mx-auto max-w-sm rounded-2xl object-cover"
                                alt="Kobieta trzymająca bawełniaą torbę z logiem Amok Studio"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedContent>
        </div>
    );
}

function Bottom() {
    return (
        <div className="relative lg:col-start-2 lg:row-span-2 lg:row-start-4">
            <AnimatedContent
                distance={-50}
                direction="vertical"
                reverse={true}
                duration={1.2}
                initialOpacity={0}
                scale={1.1}
                threshold={0.3}
                delay={0.3}
            >
                <div className="relative flex h-full flex-col gap-2 overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-zinc-50">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                        <p className="mt-2 text-lg font-medium tracking-tight text-zinc-800 max-lg:text-center">
                            Security
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-zinc-700 max-lg:text-center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit maiores impedit.
                        </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center overflow-hidden px-8 pt-4 max-lg:pt-8 max-lg:pb-8 sm:px-4 lg:pb-4">
                        <div className="relative inset-x-0 flex h-full min-h-[150px] w-full items-center justify-center overflow-hidden">
                            <Image
                                src={"/amokstudio-red.svg"}
                                fill
                                className="rounded-2xl object-cover"
                                alt="Kobieta trzymająca bawełniaą torbę z logiem Amok Studio"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedContent>
        </div>
    );
}

function Right() {
    return (
        <div className="relative lg:col-start-3 lg:row-span-5">
            <AnimatedContent
                distance={-50}
                direction="vertical"
                reverse={true}
                duration={1.2}
                initialOpacity={0}
                scale={1.1}
                threshold={0.3}
                delay={0.3}
            >
                <div className="absolute inset-px rounded-lg bg-zinc-50 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                    <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-lg">
                        <div className="absolute inset-x-8 top-8 bottom-4 overflow-hidden rounded-2xl outline outline-white/20 lg:inset-x-4">
                            <Image
                                src={"/kebab-lokal.jpg"}
                                fill
                                className="relative object-cover"
                                alt="Kobieta trzymająca bawełniaą torbę z logiem Amok Studio"
                            />
                        </div>
                    </div>
                    <div className="px-8 pt-3 pb-8 sm:px-10 sm:pt-0">
                        <p className="mt-2 text-lg font-medium tracking-tight text-zinc-800 max-lg:text-center">
                            Powerful APIs
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-zinc-700 max-lg:text-center">
                            Sit quis amet rutrum tellus ullamcorper ultricies
                            libero dolor eget sem sodales gravida.
                        </p>
                    </div>
                </div>
            </AnimatedContent>
        </div>
    );
}
