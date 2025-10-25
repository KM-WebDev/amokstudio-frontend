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
                <div className="relative mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-5">
                    <Left />
                    <Middle />
                    <Right />
                    <div className="pointer-events-none absolute inset-px rounded-lg outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                </div>
            </div>
        </div>
    );
}

export function Left() {
    return (
        <div className="relative z-10 lg:col-start-1 lg:row-span-5">
            <div className="absolute inset-px rounded-lg bg-zinc-50 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-zinc-800 max-lg:text-center">
                        Logo i Branding
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-zinc-700 max-lg:text-center">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo.
                    </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-lg">
                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-2xl outline outline-white/20">
                        <Image
                            src={"/torba-amok.jpg"}
                            fill
                            className="relative object-cover"
                            alt="Kobieta trzymająca bawełniaą torbę z logiem Amok Studio"
                        />
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
        </div>
    );
}

export function Middle() {
    return (
        <>
            <div className="relative lg:col-start-2 lg:row-span-3">
                <div className="absolute inset-px rounded-lg bg-zinc-50 max-lg:rounded-t-4xl" />
                <div className="relative flex h-full flex-col gap-2 overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                        <p className="mt-2 text-lg font-medium tracking-tight text-zinc-800 max-lg:text-center">
                            Performance
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-zinc-700 max-lg:text-center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit maiores impedit.
                        </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center overflow-hidden px-4 max-lg:pt-10 max-lg:pb-12 sm:px-4 lg:pb-4">
                        <div className="relative h-full w-full">
                            <Image
                                src={"/book-1.png"}
                                fill
                                className="rounded-2xl object-cover max-lg:max-w-sm"
                                alt="Kobieta trzymająca bawełniaą torbę z logiem Amok Studio"
                            />
                        </div>
                    </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
            </div>
            <div className="max relative lg:col-start-2 lg:row-span-2 lg:row-start-4">
                <div className="absolute inset-px rounded-lg bg-zinc-50" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                        <p className="mt-2 text-lg font-medium tracking-tight text-zinc-800 max-lg:text-center">
                            Security
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-zinc-700 max-lg:text-center">
                            Morbi viverra dui mi arcu sed. Tellus semper
                            adipiscing suspendisse semper morbi.
                        </p>
                    </div>
                    <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                        {/* <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                                    className="h-[min(152px,40cqw)] object-cover"
                                /> */}
                    </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
            </div>
        </>
    );
}

function Right() {
    return (
        <div className="relative lg:col-start-3 lg:row-span-5">
            <div className="absolute inset-px rounded-lg bg-zinc-50 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-zinc-800 max-lg:text-center">
                        Powerful APIs
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-zinc-700 max-lg:text-center">
                        Sit quis amet rutrum tellus ullamcorper ultricies libero
                        dolor eget sem sodales gravida.
                    </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                    <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl outline outline-white/10">
                        <Image
                            alt=""
                            src={"/kebab-lokal.jpg"}
                            fill
                            className="rounded-2xl object-cover max-lg:max-w-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
