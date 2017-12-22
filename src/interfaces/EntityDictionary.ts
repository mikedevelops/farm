export default interface EntityDictionary {
    [index: string]: {
        factory: () => any
    };
}
