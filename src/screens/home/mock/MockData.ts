import {
  IGameCategory,
  IRecommendedGame,
  IMassiveRewards,
} from "shared/constants/types";

export const gameCategories: Array<IGameCategory> = [
  {
    label: "Adventure",
    value: "1",
  },
  {
    label: "Racing",
    value: "2",
  },
  {
    label: "Role-Playing",
    value: "3",
  },
  {
    label: "MMORPG",
    value: "4",
  },
  {
    label: "Puzzle",
    value: "5",
  },
  {
    label: "Strategy",
    value: "6",
  },
  {
    label: "Fun",
    value: "7",
  },
  {
    label: "Card Games",
    value: "8",
  },
  {
    label: "Battle",
    value: "9",
  },
  {
    label: "Calming",
    value: "10",
  },
];

export const recommended: Array<IRecommendedGame> = [
  {
    image: require("@assets/img/rec1.png"),
    title: "Space Cowboy 2340",
    desc: "Astronomical exploration of the universe.",
    status: "CHRY | RTP 92%",
  },
  {
    image: require("@assets/img/rec2.png"),
    title: "Genesis",
    desc: "The beginning of the end of the world.",
    status: "CHRY | 97%",
  },
  {
    image: require("@assets/img/rec1.png"),
    title: "Space Cowboy 23401",
    desc: "Astronomical exploration of the universe.",
    status: "CHRY | RTP 92%",
  },
  {
    image: require("@assets/img/rec2.png"),
    title: "Genesis2",
    desc: "The beginning of the end of the world.",
    status: "CHRY | 97%",
  },
];

export const massiveRewards: Array<IMassiveRewards> = [
  {
    image: require("@assets/img/mr1.png"),
  },
  {
    image: require("@assets/img/mr2.png"),
  },
  {
    image: require("@assets/img/mr1.png"),
  },
  {
    image: require("@assets/img/mr2.png"),
  },
];
