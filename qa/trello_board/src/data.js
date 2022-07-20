import { v4 as uuid } from "uuid";

export const dummyData = [
  {
    id: uuid(),
    name: "TO DO",
    cards: [
      {
        id: uuid(),
        description: "This is a Todo list with cards",
      },
      {
        id: uuid(),
        description: "You add new cards to any column",
      },
      {
        id: uuid(),
        description: "Hover over an item to Edit the text or remove it",
      },
    ],
  },
  {
    id: uuid(),
    name: "IN PROGRESS",
    cards: [
      {
        id: uuid(),
        description: "You can click and drag items up and down the list",
      },
      {
        id: uuid(),
        description: "As well as drag items from one column to the other",
      },
    ],
  },
  {
    id: uuid(),
    name: "DONE",
    cards: [{ id: uuid(), description: "As well as rename Columns" }],
  },
];
