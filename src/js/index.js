/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){
    
    console.log('Hello Rigo from the console!');
    document.querySelector('.error').style.display = "none";
    
    var first = 'A ';
    var adj = [ 'amazing ', 'marvelous ', 'funky '];
    var noun = ['rabbit ', 'cat ','ostrich '];
    var action = ['dropped my ','left my ', 'kicked my '];
    var possetion= ['car ','keys ', 'purse '];
    var where = ['in the driveway ','at the circus','at the zoo'];
    
    
    var rdm1 = Math.floor((Math.random() * adj.length) );
    var rdm2 = Math.floor((Math.random() * adj.length) );
    var rdm3 = Math.floor((Math.random() * adj.length) );
    var rdm4 = Math.floor((Math.random() * adj.length) );
    var rdm5 = Math.floor((Math.random() * adj.length) );
    
    
    var finalSentence = "A "+adj[rdm1]+noun[rdm2]+action[rdm3]+possetion[rdm4]+where[rdm5];
  
    document.querySelector("#excuse").innerHTML = finalSentence;
    
    
};