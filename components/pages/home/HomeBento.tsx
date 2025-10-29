import Section from "@/components/base/Section";
import SectionHeading from "@/components/base/SectionHeading";
import Button from "@/components/ui/Button";
import { BasicComponentProps } from "@/lib/types/global";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";

export default function HomeBento() {
    return (
        <Section className="bg-zinc-200">
            <Section.Content className="flex max-w-[1200px] flex-col items-center">
                <div className="mx-auto flex max-w-2xl flex-col lg:max-w-7xl">
                    <SectionHeading
                        number="01"
                        heading="Usługi"
                        text="Wszystko co potrzebujesz związane z designem"
                    />
                </div>
                <Grid />
                <Button text="Zobacz Więcej" href="/services" as="link" />
            </Section.Content>
        </Section>
    );
}

function Grid() {
    return (
        <div className="gap-xs relative grid items-stretch max-lg:container lg:grid-cols-3">
            <Left className="lg:col-start-1 lg:row-span-5" />
            <Top className="lg:col-start-2 lg:row-span-2 lg:row-start-1" />
            <Bottom className="lg:col-start-2 lg:row-span-3 lg:row-start-3" />
            <Right className="lg:col-start-3 lg:row-span-5 lg:row-start-1" />
        </div>
    );
}

interface TextBoxProps extends BasicComponentProps {
    children: string;
    title: string;
}
function TextBox({ className, children, title }: TextBoxProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-2 max-lg:text-center lg:px-2",
                className
            )}
        >
            <h3 className="text-xl font-medium tracking-tight text-zinc-900">
                {title}
            </h3>
            <p className="text-zinc-500">{children}</p>
        </div>
    );
}

function GridCard({ className, children }: BasicComponentProps) {
    return (
        <div
            className={cn(
                "gap-sm p-sm relative flex h-full flex-col justify-between rounded-xl bg-zinc-50 shadow-lg",
                className
            )}
        >
            {children}
        </div>
    );
}

function ImageContainer({ children, className }: BasicComponentProps) {
    return (
        <div
            className={cn(
                "relative w-full overflow-hidden rounded-xl",
                className
            )}
        >
            {children}
        </div>
    );
}

export function Left({ className }: BasicComponentProps) {
    return (
        <GridCard
            className={cn("max-lg:rounded-t-4xl lg:rounded-l-4xl", className)}
        >
            <TextBox title="Logo i Branding" className="">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
            </TextBox>
            <ImageContainer className="h-full grow max-lg:h-[500px]">
                <Image
                    src={"/torba-amok.jpg"}
                    fill
                    className="object-cover"
                    alt="Kobieta trzymająca bawełnianą torbę z logiem Amok Studio"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </ImageContainer>
        </GridCard>
    );
}

function Top({ className }: BasicComponentProps) {
    return (
        <GridCard className={cn("", className)}>
            <TextBox title="Logo i Branding">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
            </TextBox>
            <ImageContainer className="h-[250px] sm:h-80 lg:h-[170px]">
                <Image
                    src={"/book-1.png"}
                    fill
                    className="object-cover object-center"
                    alt="Kobieta trzymająca bawełnianą torbę z logiem Amok Studio"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </ImageContainer>
        </GridCard>
    );
}

function Bottom({ className }: BasicComponentProps) {
    return (
        <GridCard className={cn("", className)}>
            <ImageContainer className="xs:h-[400px] h-[300px] max-lg:order-1 sm:h-[450px] lg:h-[200px]">
                <Image
                    src={"/menu.jpg"}
                    fill
                    className="object-cover"
                    alt="Kobieta trzymająca bawełnianą torbę z logiem Amok Studio"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </ImageContainer>
            <TextBox title="Logo i Branding">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
            </TextBox>
        </GridCard>
    );
}

function Right({ className }: BasicComponentProps) {
    return (
        <GridCard
            className={cn("max-lg:rounded-b-4xl lg:rounded-r-4xl", className)}
        >
            <ImageContainer className="h-full grow max-lg:order-1 max-lg:h-[550px]">
                <Image
                    src={"/kebab-tshirt.png"}
                    fill
                    className="object-cover object-bottom"
                    alt="Kobieta trzymająca bawełnianą torbę z logiem Amok Studio"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </ImageContainer>
            <TextBox title="Logo i Branding">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
            </TextBox>
        </GridCard>
    );
}
