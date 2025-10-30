import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import SectionHeading from "@/components/base/SectionHeading";
import ButtonWithArrow from "@/components/ui/ButtonWithArrow";
import Image from "next/image";

export function HomeAbout() {
    return (
        <Section>
            <Section.Content>
                <SectionHeading
                    heading="About"
                    number="02"
                    text="Pare słów o mnie"
                />

                <div className="gap-md flex w-full flex-col items-center justify-center lg:flex-row">
                    <div className="relative h-[300px] w-full sm:h-[400px] lg:h-[350px]">
                        <Image
                            src={"/anastazja.jpg"}
                            alt="kobieta robiąca zdjęcie telefon"
                            fill
                            sizes="400px"
                            className="rounded-2xl object-cover shadow-lg"
                        />
                    </div>

                    <div className="gap-sm flex w-full flex-col">
                        <Heading
                            semantic="h3"
                            text="Design i grafika to moja pasja"
                        />

                        <p className="text-clr-text-muted">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Distinctio, id nam libero iure ipsam illum
                            quisquam aperiam, maxime explicabo quidem delectus
                            modi tempora dicta quis aut esse placeat?
                            Necessitatibus, accusantium. Lorem ipsum dolor, sit
                            amet consectetur adipisicing elit. Iusto, quae.
                        </p>

                        <div className="flex w-full justify-between">
                            <div className="flex flex-col">
                                <p className="text-clr-brand-red text-lg font-bold">
                                    Anastazja Mokwa
                                </p>
                                <p className="text-clr-text-extra-muted text-sm">
                                    CEO of Amok Studio
                                </p>
                            </div>
                            <ButtonWithArrow
                                text="Poznaj mnie lepiej"
                                variant="secondary"
                                className="w-fit self-center"
                                href="/about"
                                as="link"
                            />
                        </div>
                    </div>
                </div>
            </Section.Content>
        </Section>
    );
}
