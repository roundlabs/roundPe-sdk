export const isNonNullObject = (input: {}) => {
    return !!input && typeof input === "object" && !Array.isArray(input);
}

export const filterResponse = (response: any) => {
    if (response && response.data) {
        return response.data.data;
    }
    return response;
}