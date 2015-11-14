var Nightmare = require('nightmare');
var kuroneko_number = "301062969266";

var option = { width: 800, height: 1600, show: false };

new Nightmare()
    .goto('http://toi.kuronekoyamato.co.jp/cgi-bin/tneko')
    .type('tr td input[name=number01]', kuroneko_number)
    .click('input[name=sch]')
    .wait( 1000 )
    .screenshot( 'kuroneko.png' )
    .run();
