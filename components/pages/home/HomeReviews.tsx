"use client";
import Section from "@/components/base/Section";
import SectionHeading from "@/components/base/SectionHeading";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

export default function HomeReviews() {
    const featurableWidgetId = "87e828ca-acb7-44f6-a2c4-36c2384d3fed";

    return (
        <Section>
            <Section.Content>
                <SectionHeading
                    heading="Reviews"
                    number="05"
                    text="Pare słów od naszych klientów"
                />
                <ReactGoogleReviews
                    layout="carousel"
                    featurableId={featurableWidgetId}
                />
            </Section.Content>
        </Section>
    );
}
