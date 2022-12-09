const header = document.getElementById("header");
const menuofgame = document.getElementById("menuofgame");
const game = document.getElementById("game");
const play = document.getElementById("play");
const settingb = document.getElementById("settingb");
const setting = document.getElementById("setting");

//firstblock
const wood = document.getElementById("wood");
const stone = document.getElementById("stone");
const coalore = document.getElementById("coalore");
const ironore = document.getElementById("ironore");
const diaore = document.getElementById("diaore");

//secondblock
const attack = document.getElementById("attack");
const startfight = document.getElementById("startfight");
const woodgone = document.getElementById("woodgone");
const stonegone = document.getElementById("stonegone");
const coalgone = document.getElementById("coalgone");
const irongone = document.getElementById("irongone");
const diagone = document.getElementById("diagone");

const player = document.getElementById("player");
const enemy = document.getElementById("enemy");

//započítávání čísel
const hits = document.getElementById("hits");
const lomitko = document.getElementById("lomitko");
const maxhits = document.getElementById("maxhits");
const counter = document.getElementById("counter");
//zničené óréčka
const wooddest = document.getElementById("wooddest");
const stonedest = document.getElementById("stonedest");
const coaldest = document.getElementById("coaldest");
const diadest = document.getElementById("diadest");
const irondest = document.getElementById("irondest");
//crafting+item
const ironingot = document.getElementById("ironingot");
const craftironingot = document.getElementById("craftironingot");

const plank = document.getElementById("plank");
const craftplank = document.getElementById("craftplank");

const stick = document.getElementById("stick");
const craftstick = document.getElementById("craftstick");

//toolsbutton
const tools = document.getElementById("tools");
const toolsbutton = document.getElementById("toolsbutton");

const craftingtabletool = document.getElementById("craftingtabletool");
const craftcraftingtable = document.getElementById("craftcraftingtable");
const furnacetool = document.getElementById("furnacetool");
const craftfurnace = document.getElementById("craftfurnace");
//crafting swords
const woodsword = document.getElementById("woodsword");
const craftwoodsword = document.getElementById("craftwoodsword");
const stonesword = document.getElementById("stonesword");
const craftstonesword = document.getElementById("craftstonesword");
const ironsword = document.getElementById("ironsword");
const craftironsword = document.getElementById("craftironsword");
const diasword = document.getElementById("diasword");
const craftdiasword = document.getElementById("craftdiasword");
//crafting tools+tool (axe)
const woodaxe = document.getElementById("woodaxe");
const craftwoodaxe = document.getElementById("craftwoodaxe");
const stoneaxe = document.getElementById("stoneaxe");
const craftstoneaxe = document.getElementById("craftstoneaxe");
const ironaxe = document.getElementById("ironaxe");
const craftironaxe = document.getElementById("craftironaxe");
const diaaxe = document.getElementById("diaaxe");
const craftdiaaxe = document.getElementById("craftdiaaxe");
//crafting tools+tool (pickaxe)
const woodpickaxe = document.getElementById("woodpickaxe");
const craftwoodpickaxe = document.getElementById("craftwoodpickaxe");
const stonepickaxe = document.getElementById("stonepickaxe");
const craftstonepickaxe = document.getElementById("craftstonepickaxe");
const ironpickaxe = document.getElementById("ironpickaxe");
const craftironpickaxe = document.getElementById("craftironpickaxe");
const diapickaxe = document.getElementById("diapickaxe");
const craftdiapickaxe = document.getElementById("craftdiapickaxe");
//příkaz pro pick
const command = document.getElementById("command");

const toolbutton = document.getElementById("toolbutton");
const toolclose = document.getElementById("toolclose");
const change = document.getElementById("change");
const biome = document.getElementById("biome");

const playerhp = document.getElementById("playerhp");
const enemyhp = document.getElementById("enemyhp");
const bn = document.getElementById("bn");
const inventar = document.getElementById("inventar");
const bclose = document.getElementById("bclose");
const cn = document.getElementById("cn");
const crafting = document.getElementById("crafting");
const cclose = document.getElementById("cclose");

const overWorld = document.getElementById("overWorld");
const cave = document.getElementById("cave");
const dungeon = document.getElementById("dungeon");

const firstblock = document.getElementById("firstblock");
const secondblock = document.getElementById("secondblock");

let hp = 25;
let axe = 1;
let pickaxe = 0;
let sword = 1;

let kills = 0;
let woodznicen = 0;
let stoneznicen = 0;
let coalznicen = 0;
let ironznicen = 0;
let diaznicen = 0;

// pro podmínky IF
let craftingplank = 0;
let craftingstick = 0;
let craftingironingot = 0;

let craftingtabletoolIF = 0;
let furnacetoolIF = 0;

// tady se ukládá náhodná proměná na proměnu bloků a později i mobů
let x = 0;
function randomnumber() {
  if (localStorage.getItem("woodpickaxec") == 1) {
    x = Math.floor(Math.random() * 2 + 1);
  }
  else if (localStorage.getItem("stonepickaxec") == 1) {
    x = Math.floor(Math.random() * 3 + 1);
  }
  else if (localStorage.getItem("ironpickaxec") == 1) {
    x = Math.floor(Math.random() * 4 + 1);
  }
};
let y = 0;
function randomnumberenemy() {
  //zombie,skeleton,spider,enderman,pilliger asi udělat na meče aby se tam nespawnul někdo OP;
    //y = Math.floor(Math.random() * 5 + 1); zakladní
    if (localStorage.getItem("woodswordc") == 1) {
      y = Math.floor(Math.random() * 3 + 1);
    }
    else if (localStorage.getItem("stoneswordc") == 1) {
      y = Math.floor(Math.random() * 4 + 1);
    }
    else if (localStorage.getItem("ironswordc") == 1) {
      y = Math.floor(Math.random() * 5 + 1);
    }
}

//damage od enemy
let zdmg = 3;
let enemydmg;

function enemydmgg() {
  enemydmg = setInterval(() => {
    if (enemy.style.display == "block") {
      hits.innerHTML -= zdmg;
      player.style.transition = ".2s";
      player.style.transform = "scale(0.8)";
      setTimeout(() => {
        player.style.transition = ".2s";
        player.style.transform = "scale(1)";
      }, 100);
    }
  }, 3000);
}

let stonex = 1;
let coalx = 2;
let ironx = 3;
let goldx = 5;
let diax = 4;

let zombiey = 1;
let skeletony = 2;
let spidery = 3;
let endermany = 4;
let pilligery = 5;

let woodswordtool = 0;
let stoneswordtool = 0;
let ironswordtool = 0;
let diaswordtool = 0;

let woodaxetool = 0;
let stoneaxetool = 0;
let ironaxetool = 0;
let diaaxetool = 0;

let woodpickaxetool = 0;
let stonepickaxetool = 0;
let ironpickaxetool = 0;
let diapickaxetool = 0;
//time
const d = new Date();
let hour = d.getHours();
window.onload = () => {
  if (hour >= 18 || hour <= 7) {
    header.style.backgroundImage =
      "url('https://wallpaperaccess.com/full/2984716.png')";
    document.body.style.backgroundColor = "#5A5A5A";
    document.body.style.color = "white";
  } else {
    header.style.backgroundImage =
      "url('https://cdn.wallpapersafari.com/93/96/oTLvsW.png')";
  }
  if (localStorage.getItem("woodc") > 0) {
    woodznicen = parseInt(localStorage.getItem("woodc", woodznicen));
    wooddest.innerHTML = `${woodznicen}`;
  }
  if (localStorage.getItem("plankc") > 0) {
    craftingplank = parseInt(localStorage.getItem("plankc", craftingplank));

    plank.innerHTML = `${craftingplank}`;
  }
  if (localStorage.getItem("stickc") > 0) {
    craftingstick = parseInt(localStorage.getItem("stickc", craftingstick));
    stick.innerHTML = `${craftingstick}`;
  }
  if (localStorage.getItem("stonec") > 0) {
    stoneznicen = parseInt(localStorage.getItem("stonec", stoneznicen));
    stonedest.innerHTML = `${stoneznicen}`;
  }
  if (localStorage.getItem("coalc") > 0) {
    coalznicen = parseInt(localStorage.getItem("coalc", coalznicen));
    coaldest.innerHTML = `${coalznicen}`;
  }
  if (localStorage.getItem("ironorec") > 0) {
    ironznicen = parseInt(localStorage.getItem("ironorec", ironznicen));
    irondest.innerHTML = `${ironznicen}`;
  }
  if (localStorage.getItem("ironingotc") > 0) {
    craftingironingot = parseInt(
      localStorage.getItem("ironingotc", craftingironingot)
    );
    ironingot.innerHTML = `${craftingironingot}`;
  }
  if (localStorage.getItem("diac") > 0) {
    diaznicen = parseInt(localStorage.getItem("diac", diaznicen));
    diadest.innerHTML = `${diaznicen}`;
  }
  if (localStorage.getItem("craftingc") == 1) {
    craftingtabletool.style.display = "block";
    craftcraftingtable.style.display = "none";
  }
  if (localStorage.getItem("furnacec") == 1) {
    furnacetool.style.display = "block";
    craftfurnace.style.display = "none";
  }
  if (localStorage.getItem("woodswordc") == 1) {
    if (player.style.display == "block") {
      woodsword.style.display = "block";
    }
    craftwoodsword.style.display = "none";
  }
  if (localStorage.getItem("stoneswordc") == 1) {
    if (player.style.display == "block") {
      stonesword.style.display = "block";
    }
    craftstonesword.style.display = "none";
  }
  if (localStorage.getItem("ironswordc") == 1) {
    if (player.style.display == "block") {
      ironsword.style.display = "block";
    }
    craftironsword.style.display = "none";
  }
  if (localStorage.getItem("diaswordc") == 1) {
    if (player.style.display == "block") {
      diasword.style.display = "block";
    }
    craftdiasword.style.display = "none";
  }
  if (localStorage.getItem("woodaxec") == 1) {
    woodaxe.style.display = "block";
    craftwoodaxe.style.display = "none";
  }
  if (localStorage.getItem("stoneaxec") == 1) {
    stoneaxe.style.display = "block";
    craftstoneaxe.style.display = "none";
  }
  if (localStorage.getItem("ironaxec") == 1) {
    ironaxe.style.display = "block";
    craftironaxe.style.display = "none";
  }
  if (localStorage.getItem("diaaxec") == 1) {
    diaaxe.style.display = "block";
    craftdiaaxe.style.display = "none";
  }
  if (localStorage.getItem("woodpickaxec") == 1) {
    if (stone.style.display == "block") {
      woodpickaxe.style.display = "block";
    }
    craftwoodpickaxe.style.display = "none";
  }
  if (localStorage.getItem("stonepickaxec") == 1) {
    if (stone.style.display == "block") {
      stonepickaxe.style.display = "block";
    }
    craftstonepickaxe.style.display = "none";
  }
  if (localStorage.getItem("ironpickaxec") == 1) {
    if (stone.style.display == "block") {
      ironpickaxe.style.display = "block";
    }
    craftironpickaxe.style.display = "none";
  }
  if (localStorage.getItem("diapickaxec") == 1) {
    if (stone.style.display == "block") {
      diapickaxe.style.display = "block";
    }
    craftdiapickaxe.style.display = "none";
  }
  if (localStorage.getItem("swordcd") > 0) {
    sword = parseInt(localStorage.getItem("swordcd", sword));
  }
  if (localStorage.getItem("axecd") > 1) {
    axe = parseInt(localStorage.getItem("axecd", axe));
  }
  if (localStorage.getItem("pickaxecd") > 0) {
    pickaxe = parseInt(localStorage.getItem("pickaxecd", pickaxe));
  }
  //save pickaxe last
};
play.onclick = () => {
  menuofgame.style.display = "none";
  game.style.display = "block";
  document.body.style.backgroundImage = "none";
  wood.style.display = "block";
};
settingb.onclick = () => {
  setting.style.display = "block";
  menuofgame.style.display = "none";
  game.style.display = "none";
};
setting.onclick = () => {
  localStorage.clear();
  location.reload();
};
//responzivita
bn.onclick = () => {
  inventar.style.display = "block";
  //crafting.style.display="none"
};
cn.onclick = () => {
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
attack.onclick = () => {
  maxhits.innerHTML -= sword;
  enemy.style.transition = ".2s";
  enemy.style.transform = "scale(0.8)";
  setTimeout(() => {
    enemy.style.transition = ".2s";
    enemy.style.transform = "scale(1)";
  }, 100);
  if (maxhits.innerHTML <= 0) {
    clearInterval(enemydmg);
    setTimeout(() => {
      enemy.style.transition = ".3s";
      enemy.style.transform = "rotate(90deg)";
    }, 100);
    attack.style.display = "none";
    kills += 1;
    localStorage.setItem("killsc", kills);
    setTimeout(() => {
      enemy.style.transition = ".1s";
      enemy.style.transform = "rotate(0deg)";
      enemy.style.display = "none";
      attack.style.display = "none";
      hits.innerHTML = 20;
      maxhits.innerHTML = 20;
      maxhits.style.display = "none";
      startfight.style.display = "block";
      enemyhp.style.display = "none";
      if (player.style.display == "none" && enemy.style.display == "none") {
        clearInterval(enemydmg);
        enemy.style.display = "none";
        attack.style.display = "none";
        startfight.style.display = "none";
        maxhits.innerHTML = 25;
      }
    }, 3000);
  } else if (hits.innerHTML <= 0) {
    setTimeout(() => {
      clearInterval(enemydmg);
      player.style.transition = ".3s";
      player.style.transform = "rotate(-90deg)";
    }, 100);
    setTimeout(() => {
      enemy.style.transition = ".1s";
      enemy.style.transform = "rotate(0deg)";
      enemy.style.display = "none";
      attack.style.display = "none";
      hits.innerHTML = 20;
      maxhits.innerHTML = 20;
      maxhits.style.display = "none";
      startfight.style.display = "block";
      enemyhp.style.display = "none";
      if (player.style.display == "none" && enemy.style.display == "none"){
        clearInterval(enemydmg);
        enemy.style.display = "none";
        player.style.display = "none";
        attack.style.display = "none";
        startfight.style.display = "none";
        maxhits.innerHTML = 25;
      }
    }, 3000);
  }
};
startfight.onclick = () => {
  enemydmgg();
  startfight.style.display = "none";
  enemy.style.display = "block";
  attack.style.display = "block";
  maxhits.style.display = "block";
  enemyhp.style.display = "block";
};
wood.onclick = () => {
  hits.innerHTML -= axe;
  wood.style.transition = ".1s";
  wood.style.transform = "scale(0.9)";
  setTimeout(() => {
    wood.style.transition = ".1s";
    wood.style.transform = "scale(1)";
  }, 100);
  if (hits.innerHTML <= 0) {
    wood.style.display = "none";
    woodgone.style.display = "block";
    command.style.display = "block";
    woodgone.onclick = () => {
      if (hits.innerHTML <= 0) {
        hits.innerHTML = hp;
        wood.style.display = "block";
        woodgone.style.display = "none";
        command.style.display = "none";
        woodznicen += 1;
        localStorage.setItem("woodc", woodznicen);
        wooddest.innerHTML = `${woodznicen}`;
      }
    };
  }
};

stone.onclick = () => {
  if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
    hits.innerHTML -= pickaxe;
    stone.style.transition = ".1s";
    stone.style.transform = "scale(0.9)";
    setTimeout(() => {
      stone.style.transition = ".1s";
      stone.style.transform = "scale(1)";
    }, 100);
    if (hits.innerHTML <= 0) {
      stone.style.display = "none";
      stonegone.style.display = "block";
      command.style.display = "block";
      stonegone.onclick = () => {
        if (hits.innerHTML <= 0) {
          hits.innerHTML = hp;
          stonegone.style.display = "none";
          command.style.display = "none";
          stoneznicen += 1;
          localStorage.setItem("stonec", stoneznicen);
          stonedest.innerHTML = `${stoneznicen}`;
          randomnumber();
          if (x == stonex) {
            stone.style.display = "block";
            coalore.style.display = "none";
            ironore.style.display = "none";
            diaore.style.display = "none";
          }
          if (x == coalx) {
            stone.style.display = "none";
            coalore.style.display = "block";
            ironore.style.display = "none";
            diaore.style.display = "none";
          }
          if (x == ironx) {
            stone.style.display = "none";
            coalore.style.display = "none";
            ironore.style.display = "block";
            diaore.style.display = "none";
          }
          if (x == diax) {
            stone.style.display = "none";
            coalore.style.display = "none";
            ironore.style.display = "none";
            diaore.style.display = "block";
          }
        }
      };
    }
  }
};
coalore.onclick = () => {
  if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
    hits.innerHTML -= pickaxe;
    coalore.style.transition = ".1s";
    coalore.style.transform = "scale(0.9)";
    setTimeout(() => {
      coalore.style.transition = ".1s";
      coalore.style.transform = "scale(1)";
    }, 100);
    if (hits.innerHTML <= 0) {
      coalore.style.display = "none";
      coalgone.style.display = "block";
      command.style.display = "block";
      coalgone.onclick = () => {
        if (hits.innerHTML <= 0) {
          hits.innerHTML = hp;
          //coalore.style.display = "block";
          coalgone.style.display = "none";
          command.style.display = "none";
          coalznicen += 1;
          localStorage.setItem("coalc", coalznicen);
          coaldest.innerHTML = `${coalznicen}`;
          randomnumber();
          if (x == stonex) {
            stone.style.display = "block";
            coalore.style.display = "none";
            ironore.style.display = "none";
            diaore.style.display = "none";
          }
          if (x == coalx) {
            stone.style.display = "none";
            coalore.style.display = "block";
            ironore.style.display = "none";
            diaore.style.display = "none";
          }
          if (x == ironx) {
            stone.style.display = "none";
            coalore.style.display = "none";
            ironore.style.display = "block";
            diaore.style.display = "none";
          }
          if (x == diax) {
            stone.style.display = "none";
            coalore.style.display = "none";
            ironore.style.display = "none";
            diaore.style.display = "block";
          }
        }
      };
    }
  }
};
ironore.onclick = () => {
  if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
    hits.innerHTML -= pickaxe;
    ironore.style.transition = ".1s";
    ironore.style.transform = "scale(0.9)";
    setTimeout(() => {
      ironore.style.transition = ".1s";
      ironore.style.transform = "scale(1)";
    }, 100);
    if (hits.innerHTML <= 0) {
      ironore.style.display = "none";
      irongone.style.display = "block";
      command.style.display = "block";
      irongone.onclick = () => {
        if (hits.innerHTML <= 0) {
          hits.innerHTML = hp;
          irongone.style.display = "none";
          command.style.display = "none";
          if (
            stonepickaxetool == 1 ||
            localStorage.getItem("stonepickaxec") == 1
          ) {
            ironznicen += 1;
            localStorage.setItem("ironorec", ironznicen);
            irondest.innerHTML = `${ironznicen}`;
          }
          randomnumber();
          if (x == stonex) {
            stone.style.display = "block";
            coalore.style.display = "none";
            ironore.style.display = "none";
            diaore.style.display = "none";
          }
          if (x == coalx) {
            stone.style.display = "none";
            coalore.style.display = "block";
            ironore.style.display = "none";
            diaore.style.display = "none";
          }
          if (x == ironx) {
            stone.style.display = "none";
            coalore.style.display = "none";
            ironore.style.display = "block";
            diaore.style.display = "none";
          }
          if (x == diax) {
            stone.style.display = "none";
            coalore.style.display = "none";
            ironore.style.display = "none";
            diaore.style.display = "block";
          }
        }
      };
    }
  }
};
diaore.onclick = () => {
  if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
    hits.innerHTML -= pickaxe;
    diaore.style.transition = ".1s";
    diaore.style.transform = "scale(0.9)";
    setTimeout(() => {
      diaore.style.transition = ".1s";
      diaore.style.transform = "scale(1)";
    }, 100);
    if (hits.innerHTML <= 0) {
      diaore.style.display = "none";
      diagone.style.display = "block";
      command.style.display = "block";
      diagone.onclick = () => {
        if (hits.innerHTML <= 0) {
          hits.innerHTML = hp;
          //ironore.style.display = "block";
          diagone.style.display = "none";
          command.style.display = "none";
          if (
            ironpickaxetool == 1 ||
            localStorage.getItem("ironpickaxec") == 1
          ) {
            diaznicen += 1;
            localStorage.setItem("diaorec", diaznicen);
            diadest.innerHTML = `${diaznicen}`;
          }
          randomnumber();
          if (x == stonex) {
            stone.style.display = "block";
            coalore.style.display = "none";
            ironore.style.display = "none";
            diaore.style.display = "none";
          }
          if (x == coalx) {
            stone.style.display = "none";
            coalore.style.display = "block";
            ironore.style.display = "none";
            diaore.style.display = "none";
          }
          if (x == ironx) {
            stone.style.display = "none";
            coalore.style.display = "none";
            ironore.style.display = "block";
            diaore.style.display = "none";
          }
          if (x == diax) {
            stone.style.display = "none";
            coalore.style.display = "none";
            ironore.style.display = "none";
            diaore.style.display = "block";
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
  lomitko.style.display = "none";
  maxhits.style.display = "none";
  toolbutton.style.display = "none";
  change.style.display = "none";

  tools.style.left = "50%";

  if (woodswordtool == 1 || localStorage.getItem("woodswordc") == 1) {
    woodsword.style.display = "block";
  }
  if (stoneswordtool == 1 || localStorage.getItem("stoneswordc") == 1) {
    stonesword.style.display = "block";
  }
  if (ironswordtool == 1 || localStorage.getItem("ironswordc") == 1) {
    ironsword.style.display = "block";
  }
  if (diaswordtool == 1 || localStorage.getItem("diaswordc") == 1) {
    diasword.style.display = "block";
  }

  if (woodaxetool == 1 || localStorage.getItem("woodaxec") == 1) {
    woodaxe.style.display = "block";
  }
  if (stoneaxetool == 1 || localStorage.getItem("stoneaxec") == 1) {
    stoneaxe.style.display = "block";
  }
  if (ironaxetool == 1 || localStorage.getItem("ironaxec") == 1) {
    ironaxe.style.display = "block";
  }
  if (diaaxetool == 1 || localStorage.getItem("diaaxec") == 1) {
    diaaxe.style.display = "block";
  }

  if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
    woodpickaxe.style.display = "block";
  }
  if (stonepickaxetool == 1 || localStorage.getItem("stonepickaxec") == 1) {
    stonepickaxe.style.display = "block";
  }
  if (ironpickaxetool == 1 || localStorage.getItem("ironpickaxec") == 1) {
    ironpickaxe.style.display = "block";
  }
  if (diapickaxetool == 1 || localStorage.getItem("diapickaxec") == 1) {
    diapickaxe.style.display = "block";
  }
  toolclose.style.display = "block";
};
toolclose.onclick = () => {
  firstblock.style.display = "block";
  secondblock.style.display = "flex";
  hits.style.display = "block";
  lomitko.style.display = "block";
  maxhits.style.display = "block";
  toolbutton.style.display = "block";
  change.style.display = "block";

  tools.style.left = "0%";

  if (wood.style.display == "block") {
    woodpickaxe.style.display = "none";
    stonepickaxe.style.display = "none";
    ironpickaxe.style.display = "none";
    diapickaxe.style.display = "none";
    woodsword.style.display = "none";
    stonesword.style.display = "none";
    ironsword.style.display = "none";
    diasword.style.display = "none";
    if (woodaxetool == 1 || localStorage.getItem("woodaxec") == 1) {
      woodaxe.style.display = "block";
    }
    if (stoneaxetool == 1 || localStorage.getItem("stoneaxec") == 1) {
      stoneaxe.style.display = "block";
    }
    if (ironaxetool == 1 || localStorage.getItem("ironaxec") == 1) {
      ironaxe.style.display = "block";
    }
    if (diaaxetool == 1 || localStorage.getItem("diaaxec") == 1) {
      diaaxe.style.display = "block";
    }
  }

  if (stone.style.display == "block") {
    woodaxe.style.display = "none";
    stoneaxe.style.display = "none";
    ironaxe.style.display = "none";
    diaaxe.style.display = "none";
    woodsword.style.display = "none";
    stonesword.style.display = "none";
    ironsword.style.display = "none";
    diasword.style.display = "none";
    if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1 || localStorage.getItem("stonepickaxec") == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1 || localStorage.getItem("ironpickaxec") == 1) {
      ironpickaxe.style.display = "block";
    }
    if (diapickaxetool == 1 || localStorage.getItem("diapickaxec") == 1) {
      diapickaxe.style.display = "block";
    }
  }
  if (coalore.style.display == "block") {
    woodaxe.style.display = "none";
    stoneaxe.style.display = "none";
    ironaxe.style.display = "none";
    diaaxe.style.display = "none";
    woodsword.style.display = "none";
    stonesword.style.display = "none";
    ironsword.style.display = "none";
    diasword.style.display = "none";
    if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1 || localStorage.getItem("stonepickaxec") == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1 || localStorage.getItem("ironpickaxec") == 1) {
      ironpickaxe.style.display = "block";
    }
    if (diapickaxetool == 1 || localStorage.getItem("diapickaxec") == 1) {
      diapickaxe.style.display = "block";
    }
  }
  if (ironore.style.display == "block") {
    woodaxe.style.display = "none";
    stoneaxe.style.display = "none";
    ironaxe.style.display = "none";
    diaaxe.style.display = "none";
    woodsword.style.display = "none";
    stonesword.style.display = "none";
    ironsword.style.display = "none";
    diasword.style.display = "none";
    if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1 || localStorage.getItem("stonepickaxec") == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1 || localStorage.getItem("ironpickaxec") == 1) {
      ironpickaxe.style.display = "block";
    }
    if (diapickaxetool == 1 || localStorage.getItem("diapickaxec") == 1) {
      diapickaxe.style.display = "block";
    }
  }
  if (diaore.style.display == "block") {
    woodaxe.style.display = "none";
    stoneaxe.style.display = "none";
    ironaxe.style.display = "none";
    diaaxe.style.display = "none";
    woodsword.style.display = "none";
    stonesword.style.display = "none";
    ironsword.style.display = "none";
    diasword.style.display = "none";
    if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1 || localStorage.getItem("stonepickaxec") == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1 || localStorage.getItem("ironpickaxec") == 1) {
      ironpickaxe.style.display = "block";
    }
    if (diapickaxetool == 1 || localStorage.getItem("diapickaxec") == 1) {
      diapickaxe.style.display = "block";
    }
  }

  if (player.style.display == "block") {
    woodaxe.style.display = "none";
    stoneaxe.style.display = "none";
    ironaxe.style.display = "none";
    diaaxe.style.display = "none";
    woodpickaxe.style.display = "none";
    stonepickaxe.style.display = "none";
    ironpickaxe.style.display = "none";
    diapickaxe.style.display = "none";
    if (woodswordtool == 1 || localStorage.getItem("woodswordc") == 1) {
      woodsword.style.display = "block";
    }
    if (stoneswordtool == 1 || localStorage.getItem("stoneswordc") == 1) {
      stonesword.style.display = "block";
    }
    if (ironswordtool == 1 || localStorage.getItem("ironswordc") == 1) {
      ironsword.style.display = "block";
    }
    if (diaswordtool == 1 || localStorage.getItem("diaswordc") == 1) {
      diasword.style.display = "block";
    }
  }

  toolclose.style.display = "none";
};
//světy
change.onclick = () => {
  biome.style.display = "block";
  firstblock.style.display = "none";
  secondblock.style.display = "none";
  clearInterval(enemydmg);
  // pojistka proti pickování jiných blocku jinde
  woodgone.style.display = "none";
  stonegone.style.display = "none";
  coalgone.style.display = "none";
  irongone.style.display = "none";
  diagone.style.display = "none";
  command.style.display = "none";
  hits.style.display = "none";
  lomitko.style.display = "none";
  maxhits.style.display = "none";
  hits.innerHTML = hp;
  //tools
  woodsword.style.display = "none";
  stonesword.style.display = "none";
  ironsword.style.display = "none";
  diasword.style.display = "none";
  woodpickaxe.style.display = "none";
  stonepickaxe.style.display = "none";
  ironpickaxe.style.display = "none";
  diapickaxe.style.display = "none";
  woodaxe.style.display = "none";
  stoneaxe.style.display = "none";
  ironaxe.style.display = "none";
  diaaxe.style.display = "none";
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
  diaore.style.display = "none";

  player.style.display = "none";
  enemy.style.display = "none";
  attack.style.display = "none";
  startfight.style.display = "none";

  hits.innerHTML = 25;
  maxhits.innerHTML = 25;
  playerhp.style.display = "none";
  enemyhp.style.display = "none";

  if (hour >= 18 || hour <= 6) {
    header.style.backgroundImage =
      "url('https://wallpaperaccess.com/full/2984716.png')";
    header.style.backgroundPosition = "bottom";
    header.style.height = "450px";
  } else {
    header.style.backgroundImage =
      "url('https://cdn.wallpapersafari.com/93/96/oTLvsW.png')";
    header.style.backgroundPosition = "bottom";
    header.style.height = "450px";
  }
  secondblock.style.display = "flex";

  hits.style.display = "block";
  lomitko.style.display = "block";
  maxhits.style.display = "block";
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    craftingtabletool.style.display = "block";
    if (furnacetoolIF == 1 || localStorage.getItem("furnacec") == 1) {
      furnacetool.style.display = "block";
    }
  }
  if (wood.style.display == "block") {
    if (woodaxetool == 1 || localStorage.getItem("woodaxec") == 1) {
      woodaxe.style.display = "block";
    }
    if (stoneaxetool == 1 || localStorage.getItem("stoneaxec") == 1) {
      stoneaxe.style.display = "block";
    }
    if (ironaxetool == 1 || localStorage.getItem("ironaxec") == 1) {
      ironaxe.style.display = "block";
    }
    if (diaaxetool == 1 || localStorage.getItem("diaaxec") == 1) {
      diaaxe.style.display = "block";
    }
  }
  woodsword.style.display = "none";
  stonesword.style.display = "none";
  ironsword.style.display = "none";
  diasword.style.display = "none";
  woodpickaxe.style.display = "none";
  stonepickaxe.style.display = "none";
  ironpickaxe.style.display = "none";
  diapickaxe.style.display = "none";
};
cave.onclick = () => {
  biome.style.display = "none";
  firstblock.style.display = "block";
  wood.style.display = "none";
  stone.style.display = "block";
  coalore.style.display = "none";
  ironore.style.display = "none";
  diaore.style.display = "none";

  player.style.display = "none";
  enemy.style.display = "none";
  attack.style.display = "none";
  startfight.style.display = "none";

  hits.innerHTML = 25;
  maxhits.innerHTML = 25;

  header.style.backgroundImage = "url('https://i.redd.it/l0pagi2byg391.png')"; // snaha o změnu pozadí //(../img/cave.png)
  header.style.backgroundPosition = "bottom";
  header.style.height = "450px";

  secondblock.style.display = "flex";

  hits.style.display = "block";
  lomitko.style.display = "block";
  maxhits.style.display = "block";
  playerhp.style.display = "none";
  enemyhp.style.display = "none";

  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    craftingtabletool.style.display = "block";
    if (furnacetoolIF == 1 || localStorage.getItem("furnacec") == 1) {
      furnacetool.style.display = "block";
    }
  }
  if (stone.style.display == "block") {
    if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1 || localStorage.getItem("stonepickaxec") == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1 || localStorage.getItem("ironpickaxec") == 1) {
      ironpickaxe.style.display = "block";
    }
    if (diapickaxetool == 1 || localStorage.getItem("diapickaxec") == 1) {
      diapickaxe.style.display = "block";
    }
  }
  if (coalore.style.display == "block") {
    if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1 || localStorage.getItem("stonepickaxec") == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1 || localStorage.getItem("ironpickaxec") == 1) {
      ironpickaxe.style.display = "block";
    }
    if (diapickaxetool == 1 || localStorage.getItem("diapickaxec") == 1) {
      diapickaxe.style.display = "block";
    }
  }
  if (ironore.style.display == "block") {
    if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1 || localStorage.getItem("stonepickaxec") == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1 || localStorage.getItem("ironpickaxec") == 1) {
      ironpickaxe.style.display = "block";
    }
    if (diapickaxetool == 1 || localStorage.getItem("diapickaxec") == 1) {
      diapickaxe.style.display = "block";
    }
  }
  if (diaore.style.display == "block") {
    if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
      woodpickaxe.style.display = "block";
    }
    if (stonepickaxetool == 1 || localStorage.getItem("stonepickaxec") == 1) {
      stonepickaxe.style.display = "block";
    }
    if (ironpickaxetool == 1 || localStorage.getItem("ironpickaxec") == 1) {
      ironpickaxe.style.display = "block";
    }
    if (diapickaxetool == 1 || localStorage.getItem("diapickaxec") == 1) {
      diapickaxe.style.display = "block";
    }
  }
  woodaxe.style.display = "none";
  stoneaxe.style.display = "none";
  ironaxe.style.display = "none";
  diaaxe.style.display = "none";
  woodsword.style.display = "none";
  stonesword.style.display = "none";
  ironsword.style.display = "none";
  diasword.style.display = "none";
};
dungeon.onclick = () => {
  biome.style.display = "none";
  firstblock.style.display = "block";
  secondblock.style.display = "flex";
  wood.style.display = "none";
  stone.style.display = "none";
  coalore.style.display = "none";
  ironore.style.display = "none";
  diaore.style.display = "none";

  player.style.display = "block";
  /*enemy.style.display = "block";*/
  /*attack.style.display = "block";*/
  startfight.style.display = "block";

  header.style.backgroundImage =
    "url(https://preview.redd.it/cfitznchjei61.png?width=3840&format=png&auto=webp&s=def486be2b8feaa12c02e483115056d7d4997247)";
  header.style.backgroundPosition = "center";
  header.style.height = "600px";

  hits.style.display = "block";

  lomitko.style.display = "block";
  /*maxhits.style.display = "block";*/
  hits.innerHTML = 20;
  maxhits.innerHTML = 20;
  playerhp.style.display = "block";
  /*enemyhp.style.display = "block";*/

  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    craftingtabletool.style.display = "block";
    if (furnacetoolIF == 1 || localStorage.getItem("furnacec") == 1) {
      furnacetool.style.display = "block";
    }
  }
  if (player.style.display == "block") {
    if (woodswordtool == 1 || localStorage.getItem("woodswordc") == 1) {
      woodsword.style.display = "block";
    }
    if (stoneswordtool == 1 || localStorage.getItem("stoneswordc") == 1) {
      stonesword.style.display = "block";
    }
    if (ironswordtool == 1 || localStorage.getItem("ironswordc") == 1) {
      ironsword.style.display = "block";
    }
    if (diaswordtool == 1 || localStorage.getItem("diaswordc") == 1) {
      diasword.style.display = "block";
    }
  }

  woodaxe.style.display = "none";
  stoneaxe.style.display = "none";
  ironaxe.style.display = "none";
  diaaxe.style.display = "none";
  woodpickaxe.style.display = "none";
  stonepickaxe.style.display = "none";
  ironpickaxe.style.display = "none";
  diapickaxe.style.display = "none";
};
//inventar + crafting buttons

//craftig
craftplank.onclick = () => {
  if (woodznicen >= 1) {
    //upravit pak save system
    craftingplank += 4;
    localStorage.setItem("plankc", craftingplank);
    plank.innerHTML = `${craftingplank}`;
    woodznicen -= 1;
    localStorage.setItem("woodc", woodznicen);
    wooddest.innerHTML = `${woodznicen}`;
  }
};
craftstick.onclick = () => {
  if (craftingplank >= 2) {
    //upravit pak save system
    craftingstick += 4;
    localStorage.setItem("stickc", craftingstick);
    stick.innerHTML = `${craftingstick}`;
    craftingplank -= 2;
    localStorage.setItem("plankc", craftingplank);
    plank.innerHTML = `${craftingplank}`;
  }
};
//craftingtable + furnace
craftcraftingtable.onclick = () => {
  if (craftingplank >= 4) {
    craftingplank -= 4;
    localStorage.setItem("plankc", craftingplank);
    plank.innerHTML = `${craftingplank}`;
    craftingtabletoolIF += 1;
    localStorage.setItem("craftingc", craftingtabletoolIF);
    if (wood.style.display == "block") {
      craftingtabletool.style.display = "block";
    }
    if (stone.style.display == "block") {
      craftingtabletool.style.display = "block";
    }
    if (craftingtabletoolIF == 1) {
      craftcraftingtable.style.display = "none";
    }
  }
};
craftfurnace.onclick = () => {
  if (stoneznicen >= 8) {
    stoneznicen -= 8;
    localStorage.setItem("stonec", stoneznicen);
    stonedest.innerHTML = `${stoneznicen}`;
    furnacetoolIF += 1;
    localStorage.setItem("furnacec", furnacetoolIF);
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
  if (furnacetoolIF == 1 || localStorage.getItem("furnacec") == 1) {
    if (ironznicen >= 1 && coalznicen >= 1) {
      ironznicen -= 1;
      localStorage.setItem("ironorec", ironznicen);
      irondest.innerHTML = `${ironznicen}`;
      coalznicen -= 1;
      localStorage.setItem("coalc", coalznicen);
      coaldest.innerHTML = `${coalznicen}`;
      craftingironingot += 1;
      localStorage.setItem("ironingotc", craftingironingot);
      ironingot.innerHTML = `${craftingironingot}`;
    }
  }
};
//axes
craftwoodaxe.onclick = () => {
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    if (craftingplank >= 3 && craftingstick >= 2) {
      craftingstick -= 2;
      localStorage.setItem("stickc", craftingstick);
      stick.innerHTML = `${craftingstick}`;
      craftingplank -= 3;
      localStorage.setItem("plankc", craftingplank);
      plank.innerHTML = `${craftingplank}`;
      woodaxetool += 1;
      localStorage.setItem("woodaxec", woodaxetool);
      axe += 1;
      localStorage.setItem("axecd", axe);
      if (wood.style.display == "block") {
        woodaxe.style.display = "block";
      }
      craftwoodaxe.style.display = "none";
    }
  }
};
craftstoneaxe.onclick = () => {
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    if (stoneznicen >= 3 && craftingstick >= 2) {
      craftingstick -= 2;
      localStorage.setItem("stickc", craftingstick);
      stick.innerHTML = `${craftingstick}`;
      stoneznicen -= 3;
      localStorage.setItem("stonec", stoneznicen);
      stonedest.innerHTML = `${stoneznicen}`;
      stoneaxetool += 1;
      localStorage.setItem("stoneaxec", stoneaxetool);
      axe += 1;
      localStorage.setItem("axecd", axe);
      if (wood.style.display == "block") {
        stoneaxe.style.display = "block";
      }
      craftstoneaxe.style.display = "none";
      //toolpickaxes.style.display="block";
    }
  }
};
craftironaxe.onclick = () => {
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    if (craftingironingot >= 3 && craftingstick >= 2) {
      craftingstick -= 2;
      localStorage.setItem("stickc", craftingstick);
      stick.innerHTML = `${craftingstick}`;
      craftingironingot -= 3;
      localStorage.setItem("ironingotc", craftingironingot);
      ironingot.innerHTML = `${craftingironingot}`;
      ironaxetool += 1;
      localStorage.setItem("ironaxec", ironaxetool);
      axe += 1;
      localStorage.setItem("axecd", axe);
      if (wood.style.display == "block") {
        ironaxe.style.display = "block";
      }
      craftironaxe.style.display = "none";
      //toolpickaxes.style.display="block";
    }
  }
};
craftdiaaxe.onclick = () => {
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    if (diaznicen >= 3 && craftingstick >= 2) {
      craftingstick -= 2;
      localStorage.setItem("stickc", craftingstick);
      stick.innerHTML = `${craftingstick}`;
      diaznicen -= 3;
      localStorage.setItem("diac", diaznicen);
      diadest.innerHTML = `${diaznicen}`;
      diaaxetool += 1;
      localStorage.setItem("diaaxec", diaaxetool);
      axe += 1;
      localStorage.setItem("axecd", axe);
      if (wood.style.display == "block") {
        diaaxe.style.display = "block";
      }
      craftdiaaxe.style.display = "none";
      //toolpickaxes.style.display="block";
    }
  }
};
//pickaxes
craftwoodpickaxe.onclick = () => {
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    if (craftingplank >= 3 && craftingstick >= 2) {
      craftingstick -= 2;
      localStorage.setItem("stickc", craftingstick);
      stick.innerHTML = `${craftingstick}`;
      craftingplank -= 3;
      localStorage.setItem("plankc", craftingplank);
      plank.innerHTML = `${craftingplank}`;
      woodpickaxetool += 1;
      localStorage.setItem("woodpickaxec", woodpickaxetool);
      pickaxe += 1;
      localStorage.setItem("pickaxecd", pickaxe);
      if (stone.style.display == "block") {
        woodpickaxe.style.display = "block";
      }
      craftwoodpickaxe.style.display = "none";
      //toolpickaxes.style.display="block";
    }
  }
};
craftstonepickaxe.onclick = () => {
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    if (stoneznicen >= 3 && craftingstick >= 2) {
      craftingstick -= 2;
      localStorage.setItem("stickc", craftingstick);
      stick.innerHTML = `${craftingstick}`;
      stoneznicen -= 3;
      localStorage.setItem("stonec", stoneznicen);
      stonedest.innerHTML = `${stoneznicen}`;
      stonepickaxetool += 1;
      localStorage.setItem("stonepickaxec", stonepickaxetool);
      pickaxe += 1;
      localStorage.setItem("pickaxecd", pickaxe);
      if (stone.style.display == "block") {
        stonepickaxe.style.display = "block";
      }
      craftstonepickaxe.style.display = "none";
      //toolpickaxes.style.display="block";
    }
  }
};
craftironpickaxe.onclick = () => {
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    if (craftingironingot >= 3 && craftingstick >= 2) {
      craftingstick -= 2;
      localStorage.setItem("stickc", craftingstick);
      stick.innerHTML = `${craftingstick}`;
      craftingironingot -= 3;
      localStorage.setItem("ironingotc", craftingironingot);
      ironingot.innerHTML = `${craftingironingot}`;
      ironpickaxetool += 1;
      localStorage.setItem("ironpickaxec", ironpickaxetool);
      pickaxe += 1;
      localStorage.setItem("pickaxecd", pickaxe);
      if (stone.style.display == "block") {
        ironpickaxe.style.display = "block";
      }
      craftironpickaxe.style.display = "none";
      //toolpickaxes.style.display="block";
    }
  }
};
craftdiapickaxe.onclick = () => {
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    if (diaznicen >= 3 && craftingstick >= 2) {
      craftingstick -= 2;
      localStorage.setItem("stickc", craftingstick);
      stick.innerHTML = `${craftingstick}`;
      diaznicen -= 3;
      localStorage.setItem("diac", diaznicen);
      diadest.innerHTML = `${diaznicen}`;
      diapickaxetool += 1;
      localStorage.setItem("diapickaxec", diapickaxetool);
      pickaxe += 1;
      localStorage.setItem("pickaxecd", pickaxe);
      if (stone.style.display == "block") {
        diapickaxe.style.display = "block";
      }
      craftdiapickaxe.style.display = "none";
    }
  }
};
//swords
craftwoodsword.onclick = () => {
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    if (craftingplank >= 2 && craftingstick >= 1) {
      craftingstick -= 1;
      localStorage.setItem("stickc", craftingstick);
      stick.innerHTML = `${craftingstick}`;
      craftingplank -= 2;
      localStorage.setItem("plankc", craftingplank);
      plank.innerHTML = `${craftingplank}`;
      woodswordtool += 1;
      localStorage.setItem("woodswordc", woodswordtool);
      if (stoneswordtool != 1) {
        /*attack.style.cursor = "url(https://ani.cursors-4u.net/games/gam-16/gam1556.cur), auto !important";*/
        sword = 4;
      }
      localStorage.setItem("swordcd", sword);
      if (player.style.display == "block") {
        woodsword.style.display = "block";
      }
      craftwoodsword.style.display = "none";
    }
  }
};
craftstonesword.onclick = () => {
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    if (stoneznicen >= 2 && craftingstick >= 1) {
      craftingstick -= 1;
      localStorage.setItem("stickc", craftingstick);
      stick.innerHTML = `${craftingstick}`;
      stoneznicen -= 2;
      localStorage.setItem("stonec", stoneznicen);
      stonedest.innerHTML = `${stoneznicen}`;
      stoneswordtool += 1;
      localStorage.setItem("stoneswordc", stoneswordtool);
      if (ironswordtool != 1) {
        sword = 5;
      }
      localStorage.setItem("swordcd", sword);
      if (player.style.display == "block") {
        stonesword.style.display = "block";
      }
      craftstonesword.style.display = "none";
      //toolpickaxes.style.display="block";
    }
  }
};
craftironsword.onclick = () => {
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    if (craftingironingot >= 2 && craftingstick >= 1) {
      craftingstick -= 1;
      localStorage.setItem("stickc", craftingstick);
      stick.innerHTML = `${craftingstick}`;
      craftingironingot -= 2;
      localStorage.setItem("ironingotc", craftingironingot);
      ironingot.innerHTML = `${craftingironingot}`;
      ironswordtool += 1;
      localStorage.setItem("ironswordc", ironswordtool);
      if (diaswordtool != 1) {
        sword = 6;
      }
      localStorage.setItem("swordcd", sword);
      if (player.style.display == "block") {
        ironsword.style.display = "block";
      }
      craftironsword.style.display = "none";
      //toolpickaxes.style.display="block";
    }
  }
};
craftdiasword.onclick = () => {
  if (craftingtabletoolIF == 1 || localStorage.getItem("craftingc") == 1) {
    if (diaznicen >= 2 && craftingstick >= 1) {
      craftingstick -= 1;
      localStorage.setItem("stickc", craftingstick);
      stick.innerHTML = `${craftingstick}`;
      diaznicen -= 2;
      localStorage.setItem("diac", diaznicen);
      diadest.innerHTML = `${diaznicen}`;
      diaswordtool += 1;
      localStorage.setItem("diaswordc", diaswordtool);
      sword = 7;
      localStorage.setItem("swordcd", sword);
      if (player.style.display == "block") {
        diasword.style.display = "block";
      }
      craftdiasword.style.display = "none";
    }
  }
};
