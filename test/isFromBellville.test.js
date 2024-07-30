import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('isFromBellville test' , function(){
    it('it should return True, when the number plate from Bellville startswith "CY"' , function(){
       
        assert.equal(isFromBellville('CY 123'), true);
    });

});