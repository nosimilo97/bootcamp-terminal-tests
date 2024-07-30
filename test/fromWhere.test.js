import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('from Where test', function () {
    it('return Bellville for registration number starting with CY', function () {
        assert.equal(fromWhere('CY 123'), 'Bellville');
    });

    it('return Paarl for registration number starting with CJ', function () {
        assert.equal(fromWhere('CJ 123'), 'Paarl');
    });

    it('return Cape Town for registration number starting with CA', function () {
        assert.equal(fromWhere('CA 123'), 'Cape Town');
    });

});
