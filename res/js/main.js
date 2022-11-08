const header = document.getElementById("header");
const day = document.getElementById("day");

const wood = document.getElementById("wood");
const stone = document.getElementById("stone");
const coalore = document.getElementById("coalore");
const ironore = document.getElementById("ironore");

const woodgone = document.getElementById("woodgone");
const stonegone = document.getElementById("stonegone");
const coalgone = document.getElementById("coalgone");
const irongone = document.getElementById("irongone");

const hits = document.getElementById("hits");
const counter = document.getElementById("counter");
const wooddest = document.getElementById("wooddest");
const stonedest = document.getElementById("stonedest");
const coaldest = document.getElementById("coaldest");

const irondest = document.getElementById("irondest");
const ironingot = document.getElementById("ironingot");
const craftironingot = document.getElementById("craftironingot");


const plank = document.getElementById("plank");
const craftplank = document.getElementById("craftplank");

const stick = document.getElementById("stick");
const craftstick = document.getElementById("craftstick");

//const toolaxes = document.getElementById("toolaxes");
//const toolpickaxes = document.getElementById("toolpickaxes");

const tools = document.getElementById("tools");
const toolsbutton = document.getElementById("toolsbutton");

const craftingtabletool = document.getElementById("craftingtabletool");
const craftcraftingtable = document.getElementById("craftcraftingtable");
const furnacetool = document.getElementById("furnacetool");
const craftfurnace = document.getElementById("craftfurnace");

const woodaxe = document.getElementById("woodaxe");
const craftwoodaxe = document.getElementById("craftwoodaxe");
const stoneaxe = document.getElementById("stoneaxe");
const craftstoneaxe = document.getElementById("craftstoneaxe");
const ironaxe = document.getElementById("ironaxe");
const craftironaxe = document.getElementById("craftironaxe");

const woodpickaxe = document.getElementById("woodpickaxe");
const craftwoodpickaxe = document.getElementById("craftwoodpickaxe");
const stonepickaxe = document.getElementById("stonepickaxe");
const craftstonepickaxe = document.getElementById("craftstonepickaxe");
const ironpickaxe = document.getElementById("ironpickaxe");
const craftironpickaxe = document.getElementById("craftironpickaxe");

const command = document.getElementById("command");

const toolbutton = document.getElementById("toolbutton");
const toolclose = document.getElementById("toolclose");
const change = document.getElementById("change");
const biome = document.getElementById("biome");

const bname = document.getElementById("bname");
const inventar = document.getElementById("inventar");
const bclose = document.getElementById("bclose");
const cname = document.getElementById("cname");
const crafting = document.getElementById("crafting");
const cclose = document.getElementById("cclose");

const overWorld = document.getElementById("overWorld");
const cave = document.getElementById("cave");

const firstblock = document.getElementById("firstblock");
const secondblock = document.getElementById("secondblock");

let hp = 25;
let axe = 1;
let pickaxe = 0;
let sword = 0;
let woodznicen = 0;
let stoneznicen = 0;
let coalznicen = 0;
let ironznicen = 0;

// pro podmínky IF
let craftingplank = 0;
let craftingstick = 0;
let craftingironingot = 0;

let craftingtabletoolIF = 0;
let furnacetoolIF = 0;

let x = 0; // tady se ukládá náhodná proměná na proměnů bloků a později i mobů
let stonex = 1;
let coalx = 2;
let ironx = 3;

let woodaxetool = 0;
let stoneaxetool = 0;
let ironaxetool = 0;

let woodpickaxetool = 0;
let stonepickaxetool = 0;
let ironpickaxetool = 0;
//time
const d = new Date();
let hour = d.getHours();


window.onload = () => {
  if (hour >= 18 || hour <= 6){
    header.style.backgroundImage =
    "url('https://wallpaperaccess.com/full/2984716.png')";
    day.style.color = "white";
    day.style.backgroundColor = "#5A5A5A";
    document.body.style.backgroundColor = "#5A5A5A"
  }
  else{
    header.style.backgroundImage =
    "url('https://cdn.wallpapersafari.com/93/96/oTLvsW.png')";
  }
};
//responzivita
bname.onclick = () => {
  inventar.style.display = "block";
  //crafting.style.display="none"
};
cname.onclick = () => {
  //inventar.style.display="none"
  crafting.style.display = "block";
};
bclose.onclick = () => {
  inventar.style.display = "none";
};
cclose.onclick = () => {
  crafting.style.display = "none";
};

//předměty na klikání
wood.onclick = () => {
  hp -= axe;
  hits.innerHTML = `${hp}/25`;
  wood.style.transition = ".1s";
  wood.style.transform = "scale(0.9)";
  setTimeout(() => {
    wood.style.transition = ".1s";
    wood.style.transform = "scale(1)";
  }, 100);
  if (hp <= 0) {
    wood.style.display = "none";
    woodgone.style.display = "block";
    command.style.display = "block";
    woodgone.onclick = () => {
      if (hp <= 0) {
        hp -= hp;
        hp += 25;
        hits.innerHTML = `${hp}/25`;
        wood.style.display = "block";
        woodgone.style.display = "none";
        command.style.display = "none";
        woodznicen += 1;
        wooddest.innerHTML = `${woodznicen}`;
      }
    };
  }
};

stone.onclick = () => {
  if (woodpickaxetool == 1) {
    hp -= pickaxe; //může být upgradnuto na proměnou let s větším damagem
    hits.innerHTML = `${hp}/25`;
    stone.style.transition = ".1s";
    stone.style.transform = "scale(0.9)";
    setTimeout(() => {
      stone.style.transition = ".1s";
      stone.style.transform = "scale(1)";
    }, 100);
    if (hp <= 0) {
      stone.style.display = "none";
      stonegone.style.display = "block";
      command.style.display = "block";
      stonegone.onclick = () => {
        if (hp <= 0) {
          hp -= hp;
          hp += 25;
          hits.innerHTML = `${hp}/25`;
          //stone.style.display = "block";
          stonegone.style.display = "none";
          command.style.display = "none";
          stoneznicen += 1;
          stonedest.innerHTML = `${stoneznicen}`;
          x = Math.floor(Math.random() * 3 + 1);
          if (x == stonex) {
            stone.style.display = "block";
            coalore.style.display = "none";
            ironore.style.display = "none";
          }
          if (x == coalx) {
            stone.style.display = "none";
            coalore.style.display = "block";
            ironore.style.display = "none";
          }
          if (x == ironx) {
            stone.style.display = "none";
            coalore.style.display = "none";
            ironore.style.display = "block";
          }
        }
      };
    }
  }
};
coalore.onclick = () => {
  if (woodpickaxetool == 1) {
    hp -= pickaxe; //může být upgradnuto na proměnou let s větším damagem
    hits.innerHTML = `${hp}/25`;
    coalore.style.transition = ".1s";
    coalore.style.transform = "scale(0.9)";
    setTimeout(() => {
      coalore.style.transition = ".1s";
      coalore.style.transform = "scale(1)";
    }, 100);
    if (hp <= 0) {
      coalore.style.display = "none";
      coalgone.style.display = "block";
      command.style.display = "block";
      coalgone.onclick = () => {
        if (hp <= 0) {
          hp -= hp;
          hp += 25;
          hits.innerHTML = `${hp}/25`;
          //coalore.style.display = "block";
          coalgone.style.display = "none";
          command.style.display = "none";
          coalznicen += 1;
          coaldest.innerHTML = `${coalznicen}`;
          x = Math.floor(Math.random() * 3 + 1);
          if (x == stonex) {
            stone.style.display = "block";
            coalore.style.display = "none";
            ironore.style.display = "none";
          }
          if (x == coalx) {
            stone.style.display = "none";
            coalore.style.display = "block";
            ironore.style.display = "none";
          }
          if (x == ironx) {
            stone.style.display = "none";
            coalore.style.display = "none";
            ironore.style.display = "block";
          }
        }
      };
    }
  }
};
ironore.onclick = () => {
  if (woodpickaxetool == 1) {
    hp -= pickaxe; //může být upgradnuto na proměnou let s větším damagem
    hits.innerHTML = `${hp}/25`;
    ironore.style.transition = ".1s";
    ironore.style.transform = "scale(0.9)";
    setTimeout(() => {
      ironore.style.transition = ".1s";
      ironore.style.transform = "scale(1)";
    }, 100);
    if (hp <= 0) {
      ironore.style.display = "none";
      irongone.style.display = "block";
      command.style.display = "block";
      irongone.onclick = () => {
        if (hp <= 0) {
          hp -= hp;
          hp += 25;
          hits.innerHTML = `${hp}/25`;
          //ironore.style.display = "block";
          irongone.style.display = "none";
          command.style.display = "none";
          if (stonepickaxetool == 1) {
            ironznicen += 1;
            irondest.innerHTML = `${ironznicen}`;
          }
          x = Math.floor(Math.random() * 3 + 1);
          if (x == stonex) {
            stone.style.display = "block";
            coalore.style.display = "none";
            ironore.style.display = "none";
          }
          if (x == coalx) {
            stone.style.display = "none";
            coalore.style.display = "block";
            ironore.style.display = "none";
          }
          if (x == ironx) {
            stone.style.display = "none";
            coalore.style.display = "none";
            ironore.style.display = "block";
          }
        }
      };
    }
  }
};
//nástroje
toolbutton.onclick = () => {
  biome.style.display = "none";
  firstblock.style.display = "none";
  secondblock.style.display = "none";
  hits.style.display = "none";
  toolbutton.style.display = "none";
  change.style.display = "none";

  tools.style.left = "50%";

  if (woodaxetool == 1) {
    woodaxe.style.display = "block";
  }
  if (stoneaxetool == 1) {
    stoneaxe.style.display = "block";
  }
  if (ironaxetool == 1) {
    ironaxe.style.display = "block"
  }
  if (woodpickaxetool == 1) {
    woodpickaxe.style.display = "block";
  }
  if (stonepickaxetool == 1) {
    stonepickaxe.style.display = "block";
  }
  if (ironpickaxetool == 1) {
    ironpickaxe.style.display = "block"
  }
  toolclose.style.display = "block";
};
toolclose.onclick = () => {
  firstblock.style.display = "block";
  secondblock.style.display = "flex";
  hits.style.display = "block";
  toolbutton.style.display = "block";
  change.style.display = "block";

  tools.style.left = "0%";

  if (wood.style.display == "block") {
    woodpickaxe.style.display = "none";
    stonepickaxe.style.display = "none";
    ironpickaxe.style.display = "none";
    if (woodaxetool == 1) {
      woodaxe.style.display = "block";
    }
    if (stoneaxetool == 1) {
      stoneaxe.style.display = "block";
    }
    if (ironaxetool == 1) {
      ironaxe.style.display = "block"
    }
  }

  if (stone.style.display == "block") {
    woodaxe.style.display = "none";
    stoneaxe.style.display = "none";
    ironaxe.style.display = "none"
    if (woodpickaxetool == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1) {
      ironpickaxe.style.display = "block"
    }
  }
  if (coalore.style.display == "block") {
    woodaxe.style.display = "none";
    stoneaxe.style.display = "none";
    ironaxe.style.display = "none"
    if (woodpickaxetool == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1) {
      ironpickaxe.style.display = "block"
    }
  }
  if (ironore.style.display == "block") {
    woodaxe.style.display = "none";
    stoneaxe.style.display = "none";
    ironaxe.style.display = "none"
    if (woodpickaxetool == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1) {
      ironpickaxe.style.display = "block"
    }
  }

  toolclose.style.display = "none";
};
//světy
change.onclick = () => {
  biome.style.display = "block";
  firstblock.style.display = "none";
  secondblock.style.display = "none";
  hits.style.display = "none";
  //tools
  woodpickaxe.style.display = "none";
  stonepickaxe.style.display = "none";
  ironpickaxe.style.display = "none"
  woodaxe.style.display = "none";
  stoneaxe.style.display = "none";
  ironaxe.style.display = "none"
  craftingtabletool.style.display = "none";
  furnacetool.style.display = "none";
};
overWorld.onclick = () => {
  biome.style.display = "none";
  firstblock.style.display = "block";
  wood.style.display = "block";
  stone.style.display = "none";
  coalore.style.display = "none";
  ironore.style.display = "none";

  if (hour >= 18 || hour <= 6){
    header.style.backgroundImage =
    "url('https://wallpaperaccess.com/full/2984716.png')";
  }
  else{
    header.style.backgroundImage =
    "url('https://cdn.wallpapersafari.com/93/96/oTLvsW.png')";
  }
  secondblock.style.display = "flex";

  hits.style.display = "block";
  if (craftingtabletoolIF == 1) {
    craftingtabletool.style.display = "block";
    if (furnacetoolIF == 1) {
      furnacetool.style.display = "block";
    }
  }
  if (wood.style.display == "block") {
    if (woodaxetool == 1) {
      woodaxe.style.display = "block";
    }
    if (stoneaxetool == 1) {
      stoneaxe.style.display = "block";
    }
    if (ironaxetool == 1) {
      ironaxe.style.display = "block"
    }
  }
  woodpickaxe.style.display = "none";
  stonepickaxe.style.display = "none";
  ironpickaxe.style.display = "none"

  hp -= hp;
  hp += 25;
};
cave.onclick = () => {
  biome.style.display = "none";
  firstblock.style.display = "block";
  wood.style.display = "none";
  stone.style.display = "block";
  coalore.style.display = "none";
  ironore.style.display = "none";

  header.style.backgroundImage = "url('https://i.redd.it/l0pagi2byg391.png')"; // snaha o změnu pozadí //(../img/cave.png)

  secondblock.style.display = "flex";

  hits.style.display = "block";

  if (craftingtabletoolIF == 1) {
    craftingtabletool.style.display = "block";
    if (furnacetoolIF == 1) {
      furnacetool.style.display = "block";
    }
  }
  if (stone.style.display == "block") {
    if (woodpickaxetool == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1) {
      ironpickaxe.style.display = "block"
    }
  }
  if (coalore.style.display == "block") {
    if (woodpickaxetool == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1) {
      ironpickaxe.style.display = "block"
    }
  }
  if (ironore.style.display == "block") {
    if (woodpickaxetool == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1) {
      ironpickaxe.style.display = "block"
    }
  }
  woodaxe.style.display = "none";
  stoneaxe.style.display = "none";
  ironaxe.style.display = "none"

  hp -= hp;
  hp += 25;
};
//inventar + crafting buttons

//craftig
craftplank.onclick = () => {
  if (woodznicen >= 1) {
    craftingplank += 4;
    plank.innerHTML = `${craftingplank}`;
    woodznicen -= 1;
    wooddest.innerHTML = `${woodznicen}`;
  }
};
craftstick.onclick = () => {
  if (craftingplank >= 2) {
    craftingstick += 4;
    stick.innerHTML = `${craftingstick}`;
    craftingplank -= 2;
    plank.innerHTML = `${craftingplank}`;
  }
};
//craftingtable + furnace
craftcraftingtable.onclick = () => {
  if (craftingplank >= 4) {
    craftingplank -= 4;
    plank.innerHTML = `${craftingplank}`;
    craftingtabletoolIF += 1;
    if (wood.style.display == "block") {
      craftingtabletool.style.display = "block";
    }
    if (stone.style.display == "block") {
      craftingtabletool.style.display = "block";
    }
    craftcraftingtable.style.display = "none";
  }
};
craftfurnace.onclick = () => {
  if (stoneznicen >= 8) {
    stoneznicen -= 8;
    stonedest.innerHTML = `${stoneznicen}`;
    furnacetoolIF += 1;
    if (wood.style.display == "block") {
      furnacetool.style.display = "block";
    }
    if (stone.style.display == "block") {
      furnacetool.style.display = "block";
    }
    craftfurnace.style.display = "none";
  }
};
craftironingot.onclick = () => {
  if (furnacetoolIF == 1 && ironznicen >= 1 && coalznicen >= 1){
        ironznicen -= 1;
        irondest.innerHTML = `${ironznicen}`
        coalznicen -= 1;
        coaldest.innerHTML = `${coalznicen}`
        craftingironingot += 1;
        ironingot.innerHTML = `${craftingironingot}`
  }
};
//axes
craftwoodaxe.onclick = () => {
  if (craftingtabletoolIF == 1 && craftingplank >= 3 && craftingstick >= 2) {
        craftingstick -= 2;
        stick.innerHTML = `${craftingstick}`;
        craftingplank -= 3;
        plank.innerHTML = `${craftingplank}`;
        woodaxetool += 1;
        axe += 1;
        if (wood.style.display == "block") {
          woodaxe.style.display = "block";
        }
        craftwoodaxe.style.display = "none";
  }
};
craftstoneaxe.onclick = () => {
  if (craftingtabletoolIF == 1 && stoneznicen >= 3 && craftingstick >= 2) {
        craftingstick -= 2;
        stick.innerHTML = `${craftingstick}`;
        stoneznicen -= 3;
        stonedest.innerHTML = `${stoneznicen}`;
        stoneaxetool += 1;
        axe += 1;
        if (wood.style.display == "block") {
          stoneaxe.style.display = "block";
        }
        craftstoneaxe.style.display = "none";
        //toolpickaxes.style.display="block";
  }
};
craftironaxe.onclick = () => {
  if (craftingtabletoolIF == 1 && craftingironingot >= 3 && craftingstick >= 2) {
        craftingstick -= 2;
        stick.innerHTML = `${craftingstick}`;
        craftingironingot -= 3;
        ironingot.innerHTML = `${craftingironingot}`;
        ironaxetool += 1;
        axe += 1;
        if (wood.style.display == "block") {
          ironaxe.style.display = "block";
        }
        craftironaxe.style.display = "none";
        //toolpickaxes.style.display="block";
  }
};
//pickaxes
craftwoodpickaxe.onclick = () => {
  if (craftingtabletoolIF == 1 && craftingplank >= 3 && craftingstick >= 2) {
        craftingstick -= 2;
        stick.innerHTML = `${craftingstick}`;
        craftingplank -= 3;
        plank.innerHTML = `${craftingplank}`;
        woodpickaxetool += 1;
        pickaxe += 1;
        if (stone.style.display == "block") {
          woodpickaxe.style.display = "block";
        }
        craftwoodpickaxe.style.display = "none";
        //toolpickaxes.style.display="block";
  }
};
craftstonepickaxe.onclick = () => {
  if (craftingtabletoolIF == 1 && stoneznicen >= 3 && craftingstick >= 2) {
        craftingstick -= 2;
        stick.innerHTML = `${craftingstick}`;
        stoneznicen -= 3;
        stonedest.innerHTML = `${stoneznicen}`;
        stonepickaxetool += 1;
        pickaxe += 1;
        if (stone.style.display == "block") {
          stonepickaxe.style.display = "block";
        }
        craftstonepickaxe.style.display = "none";
        //toolpickaxes.style.display="block";
  }
};
craftironpickaxe.onclick = () => {
  if (craftingtabletoolIF == 1 && craftingironingot >= 3 && craftingstick >= 2) {
        craftingstick -= 2;
        stick.innerHTML = `${craftingstick}`;
        craftingironingot -= 3;
        ironingot.innerHTML = `${craftingironingot}`;
        ironpickaxetool += 1;
        pickaxe += 1;
        if (stone.style.display == "block") {
          ironpickaxe.style.display = "block";
        }
        craftironpickaxe.style.display = "none";
        //toolpickaxes.style.display="block";
  }
};