export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}

export function getBackgroundImage(srcSet = "") {
    const imageSet = srcSet
        .split(", ")
        .map((str) => {
            const [url, dpi] = str.split(" ");
            return `url("${url}") ${dpi}`;
        })
        .join(", ");
    return `image-set(${imageSet})`;
}
