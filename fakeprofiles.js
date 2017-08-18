// function school(name, city, province, color1, color2) {
//   this.name = name;
//   this.city = city;
//   this.province = province;
//   this.color1 = color1;
//   this.color2 = color2;
// }

const firstNames = [
  //male
  //female
  //ethn
];

const familyNames = [
  // ethn
];

const age = [
  //id
  //age
  //gender
  //birthdate
  //
];


const emailDomains = [
  "gmail.com",
  "hotmail.com",
  "outlook.com",
  "yahoo.com",
  "mweb.co.za",
]

const schoolsDirectory = [
  {
    name:"Abbotts College",
    city:"Pretoria",
    province:"Gauteng",
    colors:["#ffffff","#207AAF","#055087"],
  },
  {
    name:"Afrikaanse Hoër Seunskool",
    city:"Pretoria",
    province:"Gauteng",
    colors:["#dcb419","#8c191e","#027b3d"],
  },
  {
    name:"Crawford College",
    city:"Pretoria",
    province:"Gauteng",
    colors:["#ffffff","#A83539","#3B3939"],
  },
  {
    name:"Hoërskool Die Wilgers",
    city:"Pretoria",
    province:"Gauteng",
    colors:["#ffffff","#005E39","#D1AF54"],
  },
  {
    name:"Hoërskool Eldoraigne",
    city:"Pretoria",
    province:"Gauteng",
    colors:["#ffffff","#18514B"],
  },
  {
    name:"Hoërskool Garsfontein",
    city:"Pretoria",
    province:"Gauteng",
    colors:["#ffffff","#006182","#AF7735"],
  },
  {
    name:"Hoërskool Menlopark",
    city:"Pretoria",
    province:"Gauteng",
    colors:["#ffffff","#25506F"],
  },
  {
    name:"Hoërskool Montana",
    city:"Pretoria",
    province:"Gauteng",
    colors:["#","#","#"],
  },
  {
    name:"Hoërskool Overkruin",
    city:"Pretoria",
    province:"Gauteng",
    colors:["#","#","#"],
  },
  {
    name:"Hoërskool Waterkloof",
    city:"Pretoria",
    province:"Gauteng",
    colors:["#","#","#"],
  },
  {
    name:"Pretoria Boys High School",
    city:"Pretoria",
    province:"Gauteng",
    colors:["#","#","#"],
  },
  {
    name:"Soshanguve High School",
    city:"Pretoria",
    province:"Gauteng",
    colors:["#","#","#"],
  }
];

// Factories

function person() {
  // names
  // contactDetails
}

function contactDetails() {
  //phone
  //email
  //adress
}



function UserProfile(,,) {
  this.userID = "";
  this.name = "";
  this.surname = "";
  this.playerProfile = new playerProfile()
}

function playerProfile() {
  this.teamName = "";
  this.schoolName = "";
  this.profileImageURL = "";
  this.backgroundColor1 = "";
  this.backgroundColor1 = "";
}

// function school() or club

// function team()

// function event() or match or timeframe

// function sport()

// Math Helpers
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Test Log
const player = {};
player.name = faker.name.findName(); // Caitlyn Kerluke
player.email = faker.internet.email(); // Rusty@arne.info

console.log(player);
