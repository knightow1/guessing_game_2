'use strict'

var user = prompt('What is your name?');
console.log('user', user);

alert('Hello ' + user + ' ! Let\s play a little game')

var greeting = prompt('You are going to ask me a few questions to see what kind of Pokemon trainer I am. Sound good? (Y|N)').toUpperCase();
console.log(greeting);

  if(greeting === 'Y' || greeting === 'YES'){
    alert('Great, I\'m excited to start this journey');
  }else{
    alert('Too..bad. A Dragonite holds you hostage!');
  }

 var starter = prompt('Out of the 3 original startes, which is the best one by Jake\'s opinion? (Bulbasaur|Squirtle|Charmander)').toLowerCase();
 console.log(starter);

  if(starter === 'squirtle'){
    alert('Yea!! Water turtle for the win!!');
  }else if(starter === 'bulbasaur'){
    alert('Pshh, that weakling?! No way! ');
  }else{
    alert('Not a bad guess, but not the best..');
  }

var favourite = prompt('What is Jake\'s favourite type? (Fire|Physic|Ghost)').toLowerCase();
console.log(favourite);

  if(favourite === 'physic' || favourite === 'p'){
    alert('Mind over body!! You are correct!');
  }else if(favourite === 'fire' || favourite === 'f'){
    alert('A little too hot for my taste..');
  }else{
    alert('I don\'t believe in Ghosts!!');
  }

var dragon = prompt('Which type is the strongest? (Dragon|Steel|Rock)').toLowerCase();
console.log(dragon);

  if (dragon === 'dragon'){
    alert('Hear the Dragon\'s roar!! Dragons are definetly the strongest!!');
  }else if(dragon === 'steel'){
    alert('Not Quite..That would be the most tankish');
  }else{
    alert('Really?! You must know nothing about Pokemon!');
  }

var badge = prompt('What badge is my most favourite by design? (Boulder|Rainbow|Earth)').toLowerCase();
console.log(badge);

  if (badge === 'earth'){
    alert('Correct!! Along with it being the hardest and final!!');
  }else if(badge === 'rainbow'){
    alert('Real life Rainbows are pretty but not this badge..');
  }else{
    alert('No..that is the most plain of them all');
  }

var region = prompt('What region is the best from the options given? (Kanto|Johto|Hoenn)').toLowerCase();
console.log(region);

  if (region === 'kanto'){
    alert('That is correct!! The original is the best!');
  }else if(region === 'Johto'){
    alert('The second generation isn\'t bad, but it still isn\'t the original');
  }else{
    alert('That isn\'t right. The third is a good choice but not that the best');
  }

var pokemonTypes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var types = prompt('How many Pokemon types are there?');
var flag;


  for (var i = 0; i < pokemonTypes.length; i++){
    console.log('Pokemon Types:', pokemonTypes[i]);

    if (types === pokemonTypes[i]){
      alert('You got it!!');
      flag=true;
      break;
    }
  }

if (!flag){
  alert('Sorry.. That is wrong');
}
