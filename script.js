let playerDeck = [
  {
    name: "Chosen Undead",
    photo:
      "https://i1.sndcdn.com/artworks-TFYkKzlzzcz4OaC6-yc1oaw-t500x500.jpg",
    attributes: {
      attack: 7,
      magic: 7,
      defense: 7,
    },
  },
  {
    name: "Solaire of Astora",
    photo:
      "https://pbs.twimg.com/profile_images/1325654288488521729/HitXPmS2_400x400.jpg",
    attributes: {
      attack: 6,
      magic: 4,
      defense: 9,
    },
  },
  {
    name: "Big Hat Logan",
    photo:
      "https://www.giantbomb.com/a/uploads/square_medium/12/129563/2712490-logan.jpg",
    attributes: {
      attack: 2,
      magic: 10,
      defense: 2,
    },
  },
  {
    name: "Siegmeyer of Catarina",
    photo:
      "https://i.pinimg.com/originals/39/4f/ef/394fef51157a5fbce120fd3220f85f91.jpg",
    attributes: {
      attack: 5,
      magic: 4,
      defense: 10,
    },
  },
  {
    name: "Patches",
    photo:
      "http://assets.vg247.com/current//2016/03/dark_souls_3_guide_npcs_unbreakable_patches.jpg",
    attributes: {
      attack: 5,
      magic: 5,
      defense: 4,
    },
  },
  {
    name: "Ashen One",
    photo:
      "http://pm1.narvii.com/7065/89685f7d40eeef93d17543dfb0bda25831e94839r1-800-940v2_uhq.jpg",
    attributes: {
      attack: 8,
      magic: 8,
      defense: 8,
    },
  },
  {
    name: "Knight Lautrec",
    photo:
      "http://pm1.narvii.com/7991/6c15a130cd34c9cb8053774a511222e4644d2a73r1-466-326v2_00.jpg",
    attributes: {
      attack: 8,
      magic: 5,
      defense: 6,
    },
  },
  {
    name: "Hunter",
    photo:
      "https://i.pinimg.com/originals/2d/67/a1/2d67a10a2b3a6d2520b13cecc50f956d.jpg",
    attributes: {
      attack: 9,
      magic: 5,
      defense: 4,
    },
  },
  {
    name: "Eileen the Crow",
    photo: "https://static.zerochan.net/Eileen.the.Crow.full.2543219.jpg",
    attributes: {
      attack: 8,
      magic: 4,
      defense: 4,
    },
  },
  {
    name: "Leonhard",
    photo:
      "https://i.pinimg.com/originals/d1/20/86/d12086735605f79872a8ef3ba6f2b007.jpg",
    attributes: {
      attack: 8,
      magic: 5,
      defense: 5,
    },
  },
];

let cpuDeck = [
  {
    name: "Artorias the Abysswalker",
    photo:
      "https://i.pinimg.com/originals/89/ec/3d/89ec3de4bc1ca25ec17d01e5ab4f02cc.jpg",
    attributes: {
      attack: 10,
      magic: 5,
      defense: 6,
    },
  },
  {
    name: "Ornstein & Smough",
    photo:
      "https://jogaod20com.files.wordpress.com/2020/07/ornstein-smough-para-dd-5c2aa-edic3a7c3a3o.jpeg",
    attributes: {
      attack: 9,
      magic: 6,
      defense: 10,
    },
  },
  {
    name: "Soul of Cinder",
    photo:
      "https://pm1.narvii.com/8201/aa91bef8bc7576568234c1816e4d48a2ef62da87r1-624-954v2_hq.jpg",
    attributes: {
      attack: 9,
      magic: 9,
      defense: 9,
    },
  },
  {
    name: "Seath the Scaleless",
    photo: "https://static.zerochan.net/Seath.the.Scaleless.full.1350502.jpg",
    attributes: {
      attack: 5,
      magic: 10,
      defense: 10,
    },
  },
  {
    name: "Gravelord Nito",
    photo:
      "https://i.pinimg.com/originals/cd/fb/12/cdfb129c2275609e9fa91206d4a53e49.jpg",
    attributes: {
      attack: 8,
      magic: 8,
      defense: 6,
    },
  },
  {
    name: "Gwyn, Lord of Cinder",
    photo:
      "http://pm1.narvii.com/6918/dbf627cd16b92dd62af2219dcee2a788487dc868r1-857-900v2_00.jpg",
    attributes: {
      attack: 10,
      magic: 7,
      defense: 4,
    },
  },
  {
    name: "Gehrman, The First Hunter",
    photo:
      "https://static.wikia.nocookie.net/bloodborne/images/d/da/Gehrman%2C_the_First_Hunter_concept_art_1.jpg",
    attributes: {
      attack: 10,
      magic: 4,
      defense: 7,
    },
  },
  {
    name: "Crystal Sage",
    photo:
      "https://static.wikia.nocookie.net/darksouls/images/4/48/Crystal_sage_boss_%282%29.jpg",
    attributes: {
      attack: 7,
      magic: 10,
      defense: 7,
    },
  },
  {
    name: "Amygdala",
    photo: "https://pbs.twimg.com/media/Dvg7ekmU0AIHQyQ.jpg",
    attributes: {
      attack: 9,
      magic: 9,
      defense: 9,
    },
  },
  {
    name: "Manus, Father of the Abyss",
    photo:
      "https://static.wikia.nocookie.net/powerlisting/images/0/03/Manus%2C_Father_of_the_Abyss_Dark_Souls.jpg",
    attributes: {
      attack: 8,
      magic: 10,
      defense: 10,
    },
  },
];

let canSortCard = true;
let canPlay = false;
let playerCard = "";
let cpuCard = "";

const sortCard = (deck) => {
  return parseInt(Math.random() * deck.length);
};

const showCards = (deck, section) => {
  const cardInfo = deck[sortCard(deck)];
  let playerSection = document.getElementById(section);
  const amountOfCards = `<span class="amountOfCards">Cards:${deck.length}</span>`;
  const card = `<div class="card">`;
  const cardTitle = `<h2>${cardInfo.name}</h2>`;
  const cardImage = `<div class="cardImgWrapper">
    <img src="${cardInfo.photo}" alt="" /></div>`;
  let opcoes = `<div class="opcoes">`;

  if (section === "playerOneSection") {
    for (atributo in cardInfo.attributes) {
      opcoes += `<input type="radio" name="atributo" value=${atributo} /> ${atributo}:${cardInfo.attributes[atributo]}<br/>`;
    }
  } else {
    for (atributo in cardInfo.attributes) {
      opcoes += `<p>${atributo}:${cardInfo.attributes[atributo]}<br/></p>`;
    }
  }
  opcoes += `</div>`;

  section === "playerOneSection"
    ? (playerSection.innerHTML =
        amountOfCards + card + cardTitle + cardImage + opcoes + `</div>`)
    : (playerSection.innerHTML =
        amountOfCards +
        card +
        cardTitle +
        cardImage +
        opcoes +
        `<div class="card-wrapper" id="card-wrapper"><img src="https://cdna.artstation.com/p/assets/images/images/044/212/038/large/breno-breyner-k.jpg?1639403764" alt=""></div></div>`);

  return cardInfo;
};

const sortearCarta = () => {
  if (!canSortCard) return null;
  canPlay = true;
  document.getElementById("playBtn").disabled = false;
  canSortCard = false;
  playerCard = showCards(playerDeck, "playerOneSection");
  cpuCard = showCards(cpuDeck, "playerTwoSection");
};

const getSelectedAttribute = () => {
  const attributes = document.getElementsByName("atributo");
  let selectedAttribute = "";
  attributes.forEach((element) => {
    if (element.checked) return (selectedAttribute = element.value);
  });
  return selectedAttribute;
};

const showResult = (res) => {
  result = document.getElementById("result");
  result.innerHTML = res;
  result.style.opacity = "1";
  setTimeout(() => {
    result.style.opacity = "0";
    sortearCarta();
  }, 2500);
};


const endGame = (finalResult) => {
    showResult(finalResult)
    setTimeout(()=>{
        window.location.reload()
    }, 2500)
}

const draw = () => {
  showResult("Draw!");
};

const playerWin = () => {
  playerDeck.push(cpuCard);
  cpuDeck = cpuDeck.filter((element) => {
    return element != cpuCard;
  });
  console.log(playerDeck.length)
  if(playerDeck.length == 6) return endGame("Congratulations!")
  showResult("You Win!");
};

const cpuWin = () => {
  cpuDeck.push(playerCard);
  playerDeck = playerDeck.filter((element) => {
    return element != playerCard;
  });
  if(cpuDeck.length == 6) return endGame("You died!")
  showResult("You Lose!");
};

const jogar = () => {
  if (!canPlay) return null;
  selectedAttribute = getSelectedAttribute();
  if (selectedAttribute.length < 1) return showResult("Selecione um atributo.");
  canSortCard = true;
  canPlay = false
  document.getElementById("card-wrapper").style.display = "none";
  if (
    playerCard.attributes[selectedAttribute] ==
    cpuCard.attributes[selectedAttribute]
  )
    return draw();

  playerCard.attributes[selectedAttribute] >
  cpuCard.attributes[selectedAttribute]
    ? playerWin()
    : cpuWin();
};
