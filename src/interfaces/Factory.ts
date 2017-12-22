export default interface Factory {
    create: (
        x: number,
        y: number,
        foo: string
    ) => any;
}
