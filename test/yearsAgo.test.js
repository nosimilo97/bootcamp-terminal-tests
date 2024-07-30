import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('yearsAgo function', function() {
    it("should return the difference between current year and 1976", function() {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });

    it("should return the difference between current year and 2000", function() {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});