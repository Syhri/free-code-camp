const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const myFavoriteFootballTeam = {
  team: "Indonesia",
  sport: "Sport",
  year: 2024,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Shin Tae Yong",
    matches: 7,
  },
  // informasi player
  players: [
    {
      name: "Muhammad Riyandi",
      src: "img/1.jpg",
      position: "goalkeeper",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Yakob Sayuri",
      src: "img/2.jpg",
      position: "defender",
      number: 2,
      isCaptain: false,
      nickname: "Yakob",
    },
    {
      name: "Elkan Baggott",
      src: "img/3.jpg",
      position: "defender",
      number: 3,
      isCaptain: false,
      nickname: "Elkan",
    },
    {
      name: "Jordi Amat",
      src: "img/4.jpg",
      position: "defender",
      number: 4,
      isCaptain: false,
      nickname: "Jordi",
    },
    {
      name: "Rizky Ridho",
      src: "img/5.jpg",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sandhy Walsh",
      src: "img/6.jpg",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: "Sandy",
    },
    {
      name: "Marselino Ferdinan",
      src: "img/7.jpg",
      position: "midfielder",
      number: 7,
      isCaptain: false,
      nickname: "Marsel",
    },
    {
      name: "Witan Sulaiman",
      src: "img/8.jpg",
      position: "midfielder",
      number: 8,
      isCaptain: false,
      nickname: "Witan",
    },
    {
      name: "Dimas Drajad",
      src: "img/9.jpg",
      position: "forward",
      number: 9,
      isCaptain: false,
      nickname: "Dimas",
    },
    {
      name: "Egy Maulana V.",
      src: "img/10.jpg",
      position: "forward",
      number: 10,
      isCaptain: false,
      nickname: "Egy",
    },
    {
      name: "Rafael Struick",
      src: "img/11.jpg",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "Rafael",
    },
    {
      name: "Arhan Pratama",
      src: "img/12.jpg",
      position: "defender",
      number: 12,
      isCaptain: true,
      nickname: "Arhan",
    },
    {
      name: "Edo Febriansah",
      src: "img/13.jpg",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: "Edo",
    },
    {
      name: "Asnawi Mangkualam",
      src: "img/14.jpg",
      position: "defender",
      number: 14,
      isCaptain: false,
      nickname: "Asnawi",
    },
    {
      name: "Ricky Kambuaya",
      src: "img/15.jpg",
      position: "midfielder",
      number: 15,
      isCaptain: false,
      nickname: "Ricky",
    },
    {
      name: "Hokky Caraka",
      src: "img/16.jpg",
      position: "forward",
      number: 16,
      isCaptain: false,
      nickname: "Hokky",
    },
    {
      name: "Saddil Ramdani",
      src: "img/17.jpg",
      position: "midfielder",
      number: 17,
      isCaptain: false,
      nickname: "Saddil",
    },
    {
      name: "Ramadhan Sananta",
      src: "img/18.jpg",
      position: "forward",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Wahyu Prasetyo",
      src: "img/19.jpeg",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "Wahyu",
    },
    {
      name: "Shayne Pattynama",
      src: "img/20.jpg",
      position: "defender",
      number: 20,
      isCaptain: false,
      nickname: "Shayne",
    },
    {
      name: "Ernando Ari",
      src: "img/21.jpg",
      position: "goalkeeper",
      number: 21,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Dendy Sulistyawan",
      src: "img/22.jpg",
      position: "forward",
      number: 22,
      isCaptain: false,
      nickname: "Dendy",
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

// Object.freeze(myFavoriteFootballTeam);
// const { sport, team, year, players } = myFavoriteFootballTeam;
// const { coachName } = myFavoriteFootballTeam.headCoach;

// typeOfSport.textContent = sport;
// teamName.textContent = team;
// worldCupYear.textContent = year;
// headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, src, position, number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <img src="${src}">
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;
    default:
      setPlayerCards();
  }
});
