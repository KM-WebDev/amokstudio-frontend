import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import SectionHeading from "@/components/base/SectionHeading";
import Image from "next/image";

export function HomeAbout() {
    return (
        <Section>
            <Section.Content>
                <div className="flex flex-col gap-15">
                    <SectionHeading
                        heading="about"
                        number="02"
                        text="Pare słów o mnie"
                    />

                    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
                        <div className="relative h-[500px] w-[30%]">
                            <Image
                                src={"/anastazja.jpg"}
                                alt="kobieta robiąca zdjęcie telefon"
                                fill
                                className="rounded-2xl object-cover"
                            />
                        </div>

                        <div className="flex w-[50%] flex-col gap-5">
                            <Heading
                                semantic="h3"
                                text="Design i grafika to moja pasja"
                            />

                            <p className="text-clr-text-muted">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Distinctio, id nam libero iure
                                ipsam illum quisquam aperiam, maxime explicabo
                                quidem delectus modi tempora dicta quis aut esse
                                placeat? Necessitatibus, accusantium. Lorem
                                ipsum dolor, sit amet consectetur adipisicing
                                elit. Iusto, quae.
                            </p>

                            <div className="flex flex-col">
                                <p className="text-clr-brand-red font-bold">
                                    Anastazja Mokwa
                                </p>
                                <p>CEO of Amok Studio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section.Content>
        </Section>
    );
}
