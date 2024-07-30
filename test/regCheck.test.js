import assert from "assert";
import regCheck from "../regCheck.js";

describe('regCheck test' , function(){
    it('it should return True, when the reg number plate endswith "GP","ECP", "MP", "L"' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
   assert.equal(regCheck('5566 L', 'L'), true);
   assert.equal(regCheck('ERT 123 ECP', 'ECP'), true);
    assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });
    
    
});