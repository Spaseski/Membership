var Registration = require('../lib/registration');

describe("Registration", function(){

    //happy path
    describe("a valid application", function(){
        var regResult = {};
        before(function(){
            regResult = Registration.applyForMembership({
                email: 'user@mail.com',
                password: '123',
                confirm: '123'
            });
        }); 
        it("is succesfull", function(){
            regResult.success.should.equal(true);
        });
        it("create a user", function(){
            regResult.user.should.be.defined;
        });
        it("create a log entry");
        it("sets the user status to approved");        
        it("offers a welcome message");        
    });

    describe("an empty or null email", function(){
        it("is not succesfull");
        it("tells user that email is required");  
    });

    describe("empty or null password", function(){
        it("is not succesfull");
        it("tells user that password is required"); 
    });

    describe("password and confirm mismatch", function(){
        it("is not succesfull");
        it("tells user that passwords don't match"); 
    });

    describe("email already exists", function(){
        it("is not succesfull");
        it("tells user that email already exists"); 
    });

});