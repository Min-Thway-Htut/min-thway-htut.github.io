const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "",
  sport: "",
  year: null,
  headCoach: {
    coachName: "",
    matches: 7,
  },
  players: [
    {
      name: "Personal Portfolio Project",
      position: "forward",
      image: "images/personal-portfolio.png",
      description: "The website on which you are currently viewing is one of my projects. I have developed this website using HTML, CSS, and javaScript."
    },
    {
      name: "Nutri Log",
      position: "forward",
      image: "images/image.png",
      description: "Scheduling algorithms such as First Come First Served (FCFS),  Shortest Job First (SJF), and Round Robin (RR) as well as memory managemet techniques such as Best Fit and First Fit were implemented using Python in this project."
    },
     {
      name: "Cozy Corner",
      position: "forward",
      image: "images/cozycorner.png",
      description: "I developed a simple restaurant website where the customers can see the menus, the contact details, and the location of the restaurant. However, online order system is yet to be implemented."
    },
    {
      name: "Process Scheduler and Memory Manager",
      position: "defender",
      image: "images/cpu-scheduler.png",
      description: "Scheduling algorithms such as First Come First Served (FCFS), Shortest Job First (SJF), and Round Robin (RR) as well as memory managemet techniques such as Best Fit and First Fit were implemented using Python in this project.",
    },
    {
      name: "Data Pipeline",
      position: "midfielder",
      image: "images/datapipeline.png",
      description: "This is an end-to-end machine learning pipeline.",
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

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, description, image}) =>
        `
        <div class="player-card">
         <img src="${image}" alt="${name}" />
          <h2> ${name}</h2>
          <br>
          <p>${description}</p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
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

   default:
   setPlayerCards(
      );
      break;
    }
});