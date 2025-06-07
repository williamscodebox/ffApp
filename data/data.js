const teams = [
  "Bills", // 0
  "Dolphins", // 1
  "Patriots", // 2
  "Jets", // 3
  "Ravens", // 4
  "Bengals", // 5
  "Browns", // 6
  "Steelers", // 7
  "Texans", // 8
  "Colts", // 9
  "Jaguars", // 10
  "Titans", // 11
  "Broncos", // 12
  "Chiefs", // 13
  "Raiders", // 14
  "Chargers", // 15
  "Cowboys", // 16
  "Giants", // 17
  "Eagles", // 18
  "Commanders", // 19
  "Bears", // 20
  "Lions", // 21
  "Packers", // 22
  "Vikings", // 23
  "Falcons", // 24
  "Panthers", // 25
  "Saints", // 26
  "Buccaneers", // 27
  "Cardinals", // 28
  "Rams", // 29
  "49ers", // 30
  "Seahawks", // 31
];

const day = [
  "Thursday", // 0
  "Friday", // 1
  "Saturday", // 2
  "Sunday", // 3
  "Monday", // 4
  "Tuesday", // 5
  "Wednesday", // 6
];

const week = [
  ["Sept", 4, 5, 6, 7, 8, 9, 10], // 0
  ["Sept", 11, 12, 13, 14, 15, 16, 17], // 1
];

const game = {
  weekOf: week[0],
  dayOf: day[0],
  TeamsPlaying: [teams[16], teams[18]],
  time: "8:20pm",
};

const games = [];
