interface SanityRef {
    _ref: string;
    _type: "reference";
}

interface SanityImage {
    _type: "image";
    asset: SanityRef;
}

interface SanityIdObject {
    _id: String;
}
