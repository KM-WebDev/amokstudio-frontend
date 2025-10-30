type SanityRef = {
    _ref: string;
    _type: "reference";
};

type SanityImage = {
    _type: "image";
    asset: SanityRef;
};

type SanityIdObject = {
    _id: String;
};

type SanityFetchData = {
    data: any;
    sourceMap: ContentSourceMap | null;
    tags: string[];
};
