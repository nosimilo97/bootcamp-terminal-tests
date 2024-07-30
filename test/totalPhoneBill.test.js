import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('totalPhoneBill test' , function(){
    it('For the string above totalPhoneBill should return R7.45. ' , function(){
       
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});