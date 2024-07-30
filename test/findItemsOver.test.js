import assert from "assert";
import findItemsOver from "../findItemsOver.js";

describe('find Items Over test', function () {
    it('return items with large quantities', function () {
        const items = [
            { name: 'apples', qty: 10 },
            { name: 'bananas', qty: 25 },
            { name: 'oranges', qty: 30 },
        ];
        const threshold = 20;
        const result = findItemsOver(items, threshold);
        const expected = [
            { name: 'bananas', qty: 25 },
            { name: 'oranges', qty: 30 },
        ];
        assert.deepEqual(result, expected);
    });

    it('return an empty array if no items have quantities which are too large', function () {
        const items = [
            { name: 'apples', qty: 10 },
            { name: 'bananas', qty: 15 },
            { name: 'oranges', qty: 20 },
        ];
        const threshold = 25;
        const result = findItemsOver(items, threshold);
        const expected = [];
        assert.deepEqual(result, expected);
    });

    it('return an empty array for an empty input list', function () {
        const items = [];
        const threshold = 20;
        const result = findItemsOver(items, threshold);
        const expected = [];
        assert.deepEqual(result, expected);
    });
});

