'use strict';

var chai = require('chai');
var expect = chai.expect;

var Trial = require('./trialLicence');

describe('Trial Model', function () {
    it('should not return error if serial field is missing', function (done) {
        var trial = new Trial();

        trial.validate(function (err) {
            expect(err.errors.fullName).to.not.exist;
            expect(err.errors.username).to.not.exist;
            expect(err.errors.serial).to.exist;
            expect(err.errors.imei).to.not.exist;
            expect(err.errors.phoneSerial).to.not.exist;
            expect(err.errors.email).to.not.exist;
            expect(err.errors.count).to.not.exist;
            expect(err.errors.licenceKey).to.not.exist;

            done();
        });
    });

    it('should have optional field', function (done) {
        var trial = new Trial({
            serial: 'foo',
            email: 'foo@bar.com',
            username: 'foobar'
        });

        expect(trial).to.have.property('serial').to.equal('foo');
        expect(trial).to.have.property('email').to.equal('foo@bar.com');
        expect(trial).to.have.property('username').to.equal('foobar');
        expect(trial).to.have.property('fullName').to.equal(undefined);
        expect(trial).to.have.property('licenceKey').to.equal(undefined);
        expect(trial).to.have.property('phoneSerial').to.equal(undefined);
        done();
    });
});
//# sourceMappingURL=trial.test.js.map