import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";


describe('find Items Over 20 test', function () {
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];
    
    it('return items with quantity over 20', function () {
        const items = [
            { name: 'apple', qty: 10 },
            { name: 'banana', qty: 25 },
            { name: 'grapes', qty: 30 }
        ];
        const result = findItemsOver20(items);
        assert.deepEqual(result, [
            { name: 'banana', qty: 25 },
            { name: 'grapes', qty: 30 }
        ]);
    });

    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 19},
        {name : 'bananas', qty : 17},
        {name : 'apples', qty : 3},
    ];
    
    var results2 = [];
    
    it('return an empty array if no items have quantity over 20', function () {
        const items = [
            { name: 'apple', qty: 10 },
            { name: 'banana', qty: 15 },
            { name: 'grapes', qty: 5 }
        ];
        const result = findItemsOver20(items);
        assert.deepEqual(result, []);
    });
    
    var itemList3 = [
        {name : 'apples', qty : 40},
        {name : 'pears', qty : 20},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];
    
    var results3 = [
        {name : 'apples', qty : 40},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];


    it('return all items if all have quantity over 20', function () {
        const items = [
            { name: 'apple', qty: 25 },
            { name: 'banana', qty: 30 },
            { name: 'grapes', qty: 35 }
        ];
        const result = findItemsOver20(items);
        assert.deepEqual(result, [
            { name: 'apple', qty: 25 },
            { name: 'banana', qty: 30 },
            { name: 'grapes', qty: 35 }
        ]);
    });
});