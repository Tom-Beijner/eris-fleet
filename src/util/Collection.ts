/** Collection-ish */
export class Collection extends Map {
    public constructor() {
        super();
    }
    public find(func: Function) {
        for (const item of this.values()) {
            if (func(item)) {
                return item;
            }
        }
        return undefined;
    }
}