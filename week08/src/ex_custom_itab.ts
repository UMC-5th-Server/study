class CustomIterable implements Iterable<string> {
    [Symbol.iterator]() {
        const iterator: Iterator<string> = {
            next() {
                return {
                    done: false,
                    value: '어렵다'
                }
            }
        };

        return iterator;
    }
}