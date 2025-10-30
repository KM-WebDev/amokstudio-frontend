import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import SectionHeading from "@/components/base/SectionHeading";

interface Feature {
    title: string;
    text: string;
    icon: string;
}

const features: Feature[] = [
    {
        title: "Template feature",
        icon: "/",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, officia. Obcaecati sunt enim eius alias consequatur expedita id, quod architecto!",
    },
    {
        title: "Template feature",
        icon: "/",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, officia. Obcaecati sunt enim eius alias consequatur expedita id, quod architecto!",
    },
    {
        title: "Template feature",
        icon: "/",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, officia. Obcaecati sunt enim eius alias consequatur expedita id, quod architecto!",
    },
    {
        title: "Template feature",
        icon: "/",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, officia. Obcaecati sunt enim eius alias consequatur expedita id, quod architecto!",
    },
];

export default function HomeFeature() {
    const FeatureCards = features.map((feature, i) => (
        <FeatureCard feature={feature} key={feature.title + i} />
    ));

    return (
        <Section className="bg-clr-bg">
            <Section.Content>
                <div className="gap-sm flex flex-col">
                    <SectionHeading
                        heading="Wszystko czego potrzebujesz"
                        number="05"
                        text="Kompleksowa usługa dostosowana do twoich potrzeb"
                    />
                    <p className="text-clr-text-muted max-w-xl lg:mx-auto lg:text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptas cupiditate optio esse alias possimus
                        reiciendis tempore dicta tenetur, ullam earum!
                    </p>
                </div>
                <div className="gap-y-md gap-x-sm grid grid-cols-1 md:grid-cols-2">
                    {FeatureCards}
                </div>
            </Section.Content>
        </Section>
    );
}

function FeatureCard({ feature }: { feature: Feature }) {
    return (
        <div className="gap-sm flex rounded-xl">
            <div className="bg-clr-brand-rose-dark h-10 w-10 shrink-0 rounded-xl" />
            <div className="gap-xs flex flex-col">
                <Heading semantic="h3" text={feature.title} />
                <p className="text-clr-text-muted">{feature.text}</p>
            </div>
        </div>
    );
}
