export const isNonNullObject = (input: {}) => {
    return !!input && typeof input === "object" && !Array.isArray(input);
}

