import Section from "@/components/base/Section";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../../thirdparty/motion-primitives/Accordion";
import { FaArrowUp } from "react-icons/fa";
import SectionHeading from "@/components/base/SectionHeading";
import Heading from "@/components/base/Heading";

export function HomeFAQ() {
    return (
        <Section>
            <Section.Content>
                <SectionHeading
                    heading="FAQ"
                    number="05"
                    text="Pytasz? Odpowiadam:"
                />
                <Accordion
                    className="flex w-full flex-col divide-y divide-zinc-700"
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    type="multiple"
                >
                    <FAQItem title="Getting Started">
                        Discover the fundamental concepts of Motion-Primitives.
                        This section guides you through the installation process
                        and provides an overview of how to integrate these
                        components into your projects. Learn about the core
                        functionalities and how to set up your first animation
                        effectively.
                    </FAQItem>
                    <FAQItem title="Animation Properties">
                        Explore the comprehensive range of animation properties
                        available in Motion-Primitives. Understand how to
                        manipulate timing, easing, and delays to create smooth,
                        dynamic animations. This segment also covers the
                        customization of animations to fit the flow and style of
                        your web applications.
                    </FAQItem>
                    <FAQItem title="Advanced Usage">
                        Dive deeper into advanced techniques and features of
                        Motion-Primitives. Learn about chaining animations,
                        creating complex sequences, and utilizing motion sensors
                        for interactive animations. Gain insights on how to
                        leverage these advanced features to enhance user
                        experience and engagement.
                    </FAQItem>
                </Accordion>
            </Section.Content>
        </Section>
    );
}

interface FAQItemProps {
    title: string;
    children: React.ReactNode;
}

function FAQItem({ title, children }: FAQItemProps) {
    return (
        <AccordionItem value={title} className="py-2">
            <AccordionTrigger className="w-full cursor-pointer text-left text-zinc-900">
                <div className="flex items-center justify-between">
                    <Heading semantic="h4">{title}</Heading>
                    <FaArrowUp className="h-4 w-4 transition-transform duration-200 group-data-expanded:-rotate-90" />
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <p className="text-clr-text-muted">{children}</p>
            </AccordionContent>
        </AccordionItem>
    );
}
