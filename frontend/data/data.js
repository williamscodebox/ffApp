export const teams = [
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

export const day = [
  "Thursday", // 0
  "Friday", // 1
  "Saturday", // 2
  "Sunday", // 3
  "Monday", // 4
  "Tuesday", // 5
  "Wednesday", // 6
];

export const week = [
  ["Sept", 4, 5, 6, 7, 8, 9, 10], // 0
  ["Sept", 11, 12, 13, 14, 15, 16, 17], // 1
  ["Sept", 18, 19, 20, 21, 22, 23, 24], // 2
  ["Sept", 25, 26, 27, 28, 29, 30, ["Oct", 1]], // 3
  ["Oct", 2, 3, 4, 5, 6, 7, 8], // 4
  ["Oct", 9, 10, 11, 12, 13, 14, 15], // 5
  ["Oct", 16, 17, 18, 19, 20, 21, 22], // 6
  ["Oct", 23, 24, 25, 26, 27, 28, 29], // 7
  ["Oct", 30, 31, ["Nov", 1], ["Nov", 2], ["Nov", 3], ["Nov", 4], ["Nov", 5]], // 8
  ["Nov", 6, 7, 8, 9, 10, 11, 12], // 9
  ["Nov", 13, 14, 15, 16, 17, 18, 19], // 10
  ["Nov", 20, 21, 22, 23, 24, 25, 26], // 11
  ["Nov", 27, 28, 29, 30, ["Dec", 1], ["Dec", 2], ["Dec", 3]], // 12
  ["Dec", 4, 5, 6, 7, 8, 9, 10], // 13
  ["Dec", 11, 12, 13, 14, 15, 16, 17], // 14
  ["Dec", 18, 19, 20, 21, 22, 23, 24], // 15
  ["Dec", 25, 26, 27, 28, 29, 30, 31], // 16
  ["Jan", 1, 2, 3, 4, 5, 6, 7], // 17
];

const game = {
  date: week[(0)[0]] + week[(0)[1]],
  dayOf: day[0],
  TeamsPlaying: [teams[16], teams[18]],
  time: "8:20pm",
};

export const schedule = [
  {
    date: week[0][0] + " " + week[0][1],
    dayOf: day[0],
    TeamsPlaying: [teams[16], teams[18]],
    time: "8:20pm",
  },
  {
    date: week[0][0] + " " + week[0][2],
    dayOf: day[1],
    TeamsPlaying: [teams[13], teams[15]],
    time: "8:00pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[27], teams[24]],
    time: "1:00pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[5], teams[6]],
    time: "1:00pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[1], teams[9]],
    time: "1:00pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[25], teams[10]],
    time: "1:00pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[14], teams[2]],
    time: "1:00pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[28], teams[26]],
    time: "1:00pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[7], teams[3]],
    time: "1:00pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[17], teams[19]],
    time: "1:00pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[11], teams[12]],
    time: "4:05pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[30], teams[31]],
    time: "4:05pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[21], teams[22]],
    time: "4:25pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[8], teams[29]],
    time: "4:25pm",
  },
  {
    date: week[0][0] + " " + week[0][4],
    dayOf: day[3],
    TeamsPlaying: [teams[4], teams[0]],
    time: "8:20pm",
  },
  {
    date: week[0][0] + " " + week[0][5],
    dayOf: day[4],
    TeamsPlaying: [teams[23], teams[20]],
    time: "1:00pm",
  }, //   <--- week two --->
  // ---------------------------------
  {
    date: week[1][0] + " " + week[1][1],
    dayOf: day[0],
    TeamsPlaying: [teams[16], teams[18]],
    time: "8:20pm",
  },
  {
    date: week[1][0] + " " + week[1][2],
    dayOf: day[1],
    TeamsPlaying: [teams[13], teams[15]],
    time: "8:00pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[27], teams[24]],
    time: "1:00pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[5], teams[6]],
    time: "1:00pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[1], teams[9]],
    time: "1:00pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[25], teams[10]],
    time: "1:00pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[14], teams[2]],
    time: "1:00pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[28], teams[26]],
    time: "1:00pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[7], teams[3]],
    time: "1:00pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[17], teams[19]],
    time: "1:00pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[11], teams[12]],
    time: "4:05pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[30], teams[31]],
    time: "4:05pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[21], teams[22]],
    time: "4:25pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[8], teams[29]],
    time: "4:25pm",
  },
  {
    date: week[1][0] + " " + week[1][4],
    dayOf: day[3],
    TeamsPlaying: [teams[4], teams[0]],
    time: "8:20pm",
  },
  {
    date: week[1][0] + " " + week[1][5],
    dayOf: day[4],
    TeamsPlaying: [teams[23], teams[20]],
    time: "1:00pm",
  },
];
