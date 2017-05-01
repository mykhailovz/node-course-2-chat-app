var expect = require('expect');
var mocha = require('mocha');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        // store res in variable
        // assert from match
        // assert text match
        // assert createdAt number

        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);



        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });



    });
});



describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Deb';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://google.com/maps?q=15,19';
        var message = generateLocationMessage(from, latitude, longitude);
        
        // console.log(message)
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});