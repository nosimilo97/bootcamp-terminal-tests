import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('isWeekday test' , function(){
    it('it should return True, when it is a weekday ' , function(){
       
       

        assert.equal(isWeekday('Monday'), true); 
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    });

});