const categories = [
  {name:"Famous People",icon:"👑",desc:"Leaders and personalities"},
  {name:"Actors & Celebrities",icon:"🎬",desc:"Stars and entertainers"},
  {name:"Sports Stars",icon:"🏏",desc:"Athletes and champions"},
  {name:"Historical Figures",icon:"📜",desc:"People from history"},
  {name:"Superheroes",icon:"🦸",desc:"Heroes and villains"},
  {name:"Gaming Characters",icon:"🎮",desc:"Video game worlds"},
  {name:"Animals & Birds",icon:"🦁",desc:"The animal kingdom"},
  {name:"Cars & Vehicles",icon:"🏎️",desc:"Machines and automobiles"},
  {name:"Countries & Places",icon:"🌍",desc:"Explore the world"},
  {name:"Objects & Inventions",icon:"💡",desc:"Things around us"}
];

const database = {
0: [
 {name:"Albert Einstein",desc:"The legendary theoretical physicist.",traits:{person:true,male:true,scientist:true,historical:true,alive:false}},
 {name:"Mahatma Gandhi",desc:"Leader of India's independence movement.",traits:{person:true,male:true,indian:true,historical:true,politician:true,alive:false}},
 {name:"Narendra Modi",desc:"Prime Minister of India.",traits:{person:true,male:true,indian:true,politician:true,alive:true}},
 {name:"Elon Musk",desc:"Technology entrepreneur.",traits:{person:true,male:true,american:true,alive:true,technology:true}},
 {name:"Marie Curie",desc:"Pioneering scientist.",traits:{person:true,male:false,scientist:true,historical:true,alive:false}},
 {name:"A. P. J. Abdul Kalam",desc:"Indian aerospace scientist and former President.",traits:{person:true,male:true,indian:true,scientist:true,historical:true,politician:true,alive:false}}
],

1: [
 {name:"Shah Rukh Khan",desc:"Famous Indian film star.",traits:{person:true,male:true,indian:true,actor:true,alive:true}},
 {name:"Amitabh Bachchan",desc:"Legendary Indian actor.",traits:{person:true,male:true,indian:true,actor:true,alive:true}},
 {name:"Leonardo DiCaprio",desc:"Hollywood actor.",traits:{person:true,male:true,american:true,actor:true,alive:true}},
 {name:"Deepika Padukone",desc:"Indian film actress.",traits:{person:true,male:false,indian:true,actor:true,alive:true}},
 {name:"Robert Downey Jr.",desc:"Actor famous for playing Iron Man.",traits:{person:true,male:true,american:true,actor:true,alive:true}}
],

2: [
 {name:"Virat Kohli",desc:"Indian cricket superstar.",traits:{person:true,male:true,indian:true,sports:true,cricket:true,alive:true}},
 {name:"Sachin Tendulkar",desc:"Legendary Indian cricketer.",traits:{person:true,male:true,indian:true,sports:true,cricket:true,alive:true}},
 {name:"MS Dhoni",desc:"Former Indian cricket captain.",traits:{person:true,male:true,indian:true,sports:true,cricket:true,alive:true}},
 {name:"Cristiano Ronaldo",desc:"Portuguese football superstar.",traits:{person:true,male:true,sports:true,football:true,alive:true}},
 {name:"Lionel Messi",desc:"Argentine football legend.",traits:{person:true,male:true,sports:true,football:true,alive:true}},
 {name:"PV Sindhu",desc:"Indian badminton champion.",traits:{person:true,male:false,indian:true,sports:true,alive:true}}
],

3: [
 {name:"Ashoka",desc:"Ancient Indian emperor.",traits:{person:true,male:true,indian:true,historical:true,politician:true,alive:false}},
 {name:"Akbar",desc:"Famous Mughal emperor.",traits:{person:true,male:true,indian:true,historical:true,politician:true,alive:false}},
 {name:"Rani Lakshmibai",desc:"Queen of Jhansi.",traits:{person:true,male:false,indian:true,historical:true,alive:false}},
 {name:"Napoleon Bonaparte",desc:"French military and political leader.",traits:{person:true,male:true,historical:true,politician:true,alive:false}},
 {name:"Cleopatra",desc:"Ancient Egyptian queen.",traits:{person:true,male:false,historical:true,politician:true,alive:false}}
],

4: [
 {name:"Iron Man",desc:"Marvel superhero and genius inventor.",traits:{fictional:true,superhero:true,marvel:true,technology:true,male:true}},
 {name:"Spider-Man",desc:"Marvel superhero.",traits:{fictional:true,superhero:true,marvel:true,male:true}},
 {name:"Batman",desc:"The Dark Knight of Gotham City.",traits:{fictional:true,superhero:true,dc:true,male:true}},
 {name:"Superman",desc:"Superhero from Krypton.",traits:{fictional:true,superhero:true,dc:true,male:true}},
 {name:"Wonder Woman",desc:"Amazonian superhero.",traits:{fictional:true,superhero:true,dc:true,male:false}},
 {name:"Harry Potter",desc:"Young wizard.",traits:{fictional:true,magic:true,male:true}}
],

5: [
 {name:"Mario",desc:"Famous Nintendo game character.",traits:{fictional:true,gaming:true,nintendo:true,male:true}},
 {name:"Sonic",desc:"The speedy blue hedgehog.",traits:{fictional:true,gaming:true,animal:true,male:true}},
 {name:"Pikachu",desc:"Electric Pokémon.",traits:{fictional:true,gaming:true,animal:true}},
 {name:"Steve",desc:"The iconic Minecraft character.",traits:{fictional:true,gaming:true,minecraft:true,male:true}},
 {name:"Lara Croft",desc:"Adventurer from Tomb Raider.",traits:{fictional:true,gaming:true,male:false}},
 {name:"Kratos",desc:"Warrior from God of War.",traits:{fictional:true,gaming:true,male:true}}
],

6: [
 {name:"Lion",desc:"Powerful wild cat.",traits:{animal:true,wild:true,mammal:true,land:true,big:true}},
 {name:"Elephant",desc:"Largest living land animal.",traits:{animal:true,wild:true,mammal:true,land:true,big:true}},
 {name:"Dolphin",desc:"Intelligent marine mammal.",traits:{animal:true,wild:true,mammal:true,water:true}},
 {name:"Eagle",desc:"Powerful bird of prey.",traits:{animal:true,bird:true,wild:true,flies:true}},
 {name:"Penguin",desc:"Flightless swimming bird.",traits:{animal:true,bird:true,wild:true,water:true}},
 {name:"Dog",desc:"Popular domesticated animal.",traits:{animal:true,pet:true,mammal:true,land:true}},
 {name:"Parrot",desc:"Colourful bird.",traits:{animal:true,bird:true,pet:true,flies:true}}
],

7: [
 {name:"Bugatti Chiron",desc:"High-performance hypercar.",traits:{vehicle:true,car:true,luxury:true,sports:true,fast:true}},
 {name:"Tesla Model S",desc:"Electric luxury sedan.",traits:{vehicle:true,car:true,electric:true,luxury:true}},
 {name:"Rolls-Royce Phantom",desc:"Ultra-luxury automobile.",traits:{vehicle:true,car:true,luxury:true}},
 {name:"Ferrari SF90",desc:"Italian sports car.",traits:{vehicle:true,car:true,sports:true,fast:true}},
 {name:"Boeing 747",desc:"Famous passenger aircraft.",traits:{vehicle:true,aircraft:true,flies:true}},
 {name:"Royal Enfield Bullet",desc:"Iconic Indian motorcycle.",traits:{vehicle:true,bike:true,indian:true}}
],

8: [
 {name:"India",desc:"South Asian country.",traits:{place:true,country:true,asia:true,indian:true}},
 {name:"Japan",desc:"Island country in East Asia.",traits:{place:true,country:true,asia:true}},
 {name:"France",desc:"European country.",traits:{place:true,country:true,europe:true}},
 {name:"United States",desc:"Country in North America.",traits:{place:true,country:true,america:true}},
 {name:"Paris",desc:"Capital of France.",traits:{place:true,city:true,europe:true}},
 {name:"Mount Everest",desc:"World's highest mountain above sea level.",traits:{place:true,mountain:true,asia:true}},
 {name:"Taj Mahal",desc:"Famous Indian monument.",traits:{place:true,monument:true,indian:true}}
],

9: [
 {name:"Smartphone",desc:"Portable touchscreen device.",traits:{object:true,electronic:true,portable:true}},
 {name:"Computer",desc:"Electronic computing machine.",traits:{object:true,electronic:true,technology:true}},
 {name:"Telephone",desc:"Communication device.",traits:{object:true,electronic:true,communication:true}},
 {name:"Light Bulb",desc:"An invention that produces light.",traits:{object:true,electronic:true,invention:true}},
 {name:"Airplane",desc:"Powered aircraft.",traits:{object:true,vehicle:true,flies:true,invention:true}},
 {name:"Telescope",desc:"Instrument for viewing distant objects.",traits:{object:true,scientific:true,invention:true}},
 {name:"Camera",desc:"Device used to capture photographs.",traits:{object:true,electronic:true,portable:true}}
]
};

const questions = [
["Is your answer a person?","person"],
["Is it male?","male"],
["Is it Indian?","indian"],
["Is it alive today?","alive"],
["Is it a scientist?","scientist"],
["Is it connected with sports?","sports"],
["Is it a cricketer?","cricket"],
["Is it an actor?","actor"],
["Is it a politician?","politician"],
["Is it historical?","historical"],
["Is it American?","american"],
["Is it fictional?","fictional"],
["Is it a superhero?","superhero"],
["Is it from Marvel?","marvel"],
["Is it from DC?","dc"],
["Is it associated with magic?","magic"],
["Is it an animal?","animal"],
["Is it a bird?","bird"],
["Is it a pet?","pet"],
["Does it live in water?","water"],
["Can it fly?","flies"],
["Is it a vehicle?","vehicle"],
["Is it a car?","car"],
["Is it a luxury vehicle?","luxury"],
["Is it electric?","electric"],
["Is it a country?","country"],
["Is it a city?","city"],
["Is it in Asia?","asia"],
["Is it an invention?","invention"],
["Is it electronic?","electronic"],
["Is it connected with technology?","technology"],
["Is it a gaming character?","gaming"],
["Is it associated with Nintendo?","nintendo"],
["Is it known for being fast?","fast"]
];
