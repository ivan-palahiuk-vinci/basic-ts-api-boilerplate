import { Router } from "express";

import { Film } from "../types";

const filmsRouter = Router();

const films: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160000000,
    description: "A thief who steals corporate secrets through dream-sharing technology is given a chance to have his criminal history erased.",
    imageUrl: "https://example.com/inception.jpg"
  },
  {
    id: 2,
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    duration: 99,
    budget: 25000000,
    description: "A whimsical tale of a hotel concierge and a lobby boy caught up in a murder mystery and the theft of a priceless painting.",
    imageUrl: "https://example.com/grandbudapest.jpg"
  },
  {
    id: 3,
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    budget: 11400000,
    description: "A darkly comedic thriller about class disparity as a poor family infiltrates a wealthy household.",
    imageUrl: "https://example.com/parasite.jpg"
  },
  {
    id: 4,
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    duration: 125,
    description: "A young girl enters a magical world of spirits, witches, and other strange beings while trying to save her parents.",
    imageUrl: "https://example.com/spiritedaway.jpg"
  }
];

filmsRouter.get('/',(_req, res)=>{
    return res.json(films);
});

export default filmsRouter;
