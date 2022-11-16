const header = document.getElementById("header");
const menuofgame = document.getElementById("menuofgame");
const game = document.getElementById("game");
const play = document.getElementById("play");
const settingb = document.getElementById("settingb");
const setting = document.getElementById("setting");

const wood = document.getElementById("wood");
const stone = document.getElementById("stone");
const coalore = document.getElementById("coalore");
const ironore = document.getElementById("ironore");
const diaore = document.getElementById("diaore");

const woodgone = document.getElementById("woodgone");
const stonegone = document.getElementById("stonegone");
const coalgone = document.getElementById("coalgone");
const irongone = document.getElementById("irongone");
const diagone = document.getElementById("diagone");

const hits = document.getElementById("hits");
const counter = document.getElementById("counter");
const wooddest = document.getElementById("wooddest");
const stonedest = document.getElementById("stonedest");
const coaldest = document.getElementById("coaldest");
const diadest = document.getElementById("diadest");

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
const diaaxe = document.getElementById("diaaxe");
const craftdiaaxe = document.getElementById("craftdiaaxe");

const woodpickaxe = document.getElementById("woodpickaxe");
const craftwoodpickaxe = document.getElementById("craftwoodpickaxe");
const stonepickaxe = document.getElementById("stonepickaxe");
const craftstonepickaxe = document.getElementById("craftstonepickaxe");
const ironpickaxe = document.getElementById("ironpickaxe");
const craftironpickaxe = document.getElementById("craftironpickaxe");
const diapickaxe = document.getElementById("diapickaxe");
const craftdiapickaxe = document.getElementById("craftdiapickaxe");

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
let diaznicen = 0;

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
let diax = 4;

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
  if (hour >= 18 || hour <= 6) {
    header.style.backgroundImage =
      "url('https://wallpaperaccess.com/full/2984716.png')";
    document.body.style.backgroundColor = "#5A5A5A";
    document.body.style.color = "white";
  } else {
    header.style.backgroundImage =
      "url('https://cdn.wallpapersafari.com/93/96/oTLvsW.png')";
  }
  // menuhry
  

  // save system
  /*if (woodznicen >= 0) {
  setInterval(() => {
    localStorage.setItem('woodc',woodznicen);
  }, 100)
}*/ // v tom to příkaze se woodznicen uloží lokálně do woodc
  /*setInterval(() => {
  localStorage.setItem('woodc',woodznicen);
  localStorage.setItem('plankc', craftingplank);
  localStorage.setItem('stickc', craftingstick);
  localStorage.setItem('stonec', stoneznicen);
  localStorage.setItem('coalc', coalznicen);
  localStorage.setItem('ironorec', ironznicen);
  localStorage.setItem('ironingotc', craftingironingot);
  localStorage.setItem('diac', diaznicen);
}, 100)*/
  /*localStorage.setItem("axecd", axe);
  localStorage.setItem("pickaxecd", pickaxe);*/
  if (localStorage.getItem("woodc") > 0) {
    woodznicen = parseInt(localStorage.getItem("woodc", woodznicen));
    wooddest.innerHTML = `${woodznicen}`; // z woodznicen do wooddest aby to bylo vidět pro uživatele
  }
  if (localStorage.getItem("plankc") > 0) {
    craftingplank = parseInt(localStorage.getItem("plankc", craftingplank));
    /*craftingplank = localStorage.getItem("plankc");*/
    plank.innerHTML = `${craftingplank}`; //upravit přičítání
  }
  if (localStorage.getItem("stickc") > 0) {
    craftingstick = parseInt(localStorage.getItem("stickc", craftingstick));
    /*craftingstick = localStorage.getItem("stickc")*/
    stick.innerHTML = `${craftingstick}`; //upravit přičítání
  }
  if (localStorage.getItem("stonec") > 0) {
    stoneznicen = parseInt(localStorage.getItem("stonec", stoneznicen));
    /*stoneznicen = localStorage.getItem("stonec")*/
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
  if (localStorage.getItem("axecd") > 1) {
    axe = parseInt(localStorage.getItem("axecd", axe));
  }
  if (localStorage.getItem("pickaxecd") > 0) {
    pickaxe = parseInt(localStorage.getItem("pickaxecd", pickaxe));
  }
  //save pickaxe last
};
play.onclick = () => {
  menuofgame.style.display ="none";
  game.style.display = "block";
  document.body.style.backgroundImage = "none"
}
settingb.onclick = () => {
  setting.style.display ="block";
  menuofgame.style.display = "none";
  game.style.display = "none";
}
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
        //save uprava
        woodznicen += 1;
        localStorage.setItem("woodc", woodznicen);
        /*woodznicen ++;*/
        wooddest.innerHTML = `${woodznicen}`;
      }
    };
  }
};

stone.onclick = () => {
  if (woodpickaxetool == 1 || localStorage.getItem("woodpickaxec") == 1) {
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
          stonegone.style.display = "none";
          command.style.display = "none";
          stoneznicen += 1;
          localStorage.setItem("stonec", stoneznicen);
          stonedest.innerHTML = `${stoneznicen}`;
          x = Math.floor(Math.random() * 4 + 1);
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
          localStorage.setItem("coalc", coalznicen);
          coaldest.innerHTML = `${coalznicen}`;
          x = Math.floor(Math.random() * 4 + 1);
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
          if (
            stonepickaxetool == 1 ||
            localStorage.getItem("stonepickaxec") == 1
          ) {
            ironznicen += 1;
            localStorage.setItem("ironorec", ironznicen);
            irondest.innerHTML = `${ironznicen}`;
          }
          x = Math.floor(Math.random() * 4 + 1);
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
    hp -= pickaxe; //může být upgradnuto na proměnou let s větším damagem
    hits.innerHTML = `${hp}/25`;
    diaore.style.transition = ".1s";
    diaore.style.transform = "scale(0.9)";
    setTimeout(() => {
      diaore.style.transition = ".1s";
      diaore.style.transform = "scale(1)";
    }, 100);
    if (hp <= 0) {
      diaore.style.display = "none";
      diagone.style.display = "block";
      command.style.display = "block";
      diagone.onclick = () => {
        if (hp <= 0) {
          hp -= hp;
          hp += 25;
          hits.innerHTML = `${hp}/25`;
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
          x = Math.floor(Math.random() * 4 + 1);
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
  toolbutton.style.display = "none";
  change.style.display = "none";

  tools.style.left = "50%";

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
  toolbutton.style.display = "block";
  change.style.display = "block";

  tools.style.left = "0%";

  if (wood.style.display == "block") {
    woodpickaxe.style.display = "none";
    stonepickaxe.style.display = "none";
    ironpickaxe.style.display = "none";
    diapickaxe.style.display = "none";
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

  if (hour >= 18 || hour <= 6) {
    header.style.backgroundImage =
      "url('https://wallpaperaccess.com/full/2984716.png')";
  } else {
    header.style.backgroundImage =
      "url('https://cdn.wallpapersafari.com/93/96/oTLvsW.png')";
  }
  secondblock.style.display = "flex";

  hits.style.display = "block";
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
  woodpickaxe.style.display = "none";
  stonepickaxe.style.display = "none";
  ironpickaxe.style.display = "none";
  diapickaxe.style.display = "none";

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
  diaore.style.display = "none";

  header.style.backgroundImage = "url('https://i.redd.it/l0pagi2byg391.png')"; // snaha o změnu pozadí //(../img/cave.png)

  secondblock.style.display = "flex";

  hits.style.display = "block";

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

  hp -= hp;
  hp += 25;
};
//inventar + crafting buttons

//craftig
craftplank.onclick = () => {
  if (woodznicen >= 1) {
    //upravit pak save system
    craftingplank += 4;
    localStorage.setItem("plankc", craftingplank);
    /*craftingplank ++;
    craftingplank ++;
    craftingplank ++;
    craftingplank ++;*/
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
    /*craftingstick ++;
    craftingstick ++;
    craftingstick ++;
    craftingstick ++;*/
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
      //toolpickaxes.style.display="block";
    }
  }
};
