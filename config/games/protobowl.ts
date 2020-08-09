import { ServerGame } from "../../types/types";
import { randomBytes } from "crypto";

const game: ServerGame = {
    name: "Protobowl",
    author: "Kevin Kwok",
    description: "Quizbowl practice",
    displayUrlText: "protobowl.com",
    displayUrlHref: "https://protobowl.com/",
    category: ["trivia"],
    players: "1+",
    familyFriendly: true,
    getJoinGameUrl: async () => {
        const id = randomBytes(8).toString("hex");
        return {
            playerURL: "https://protobowl.com/rocketcrab-" + id,
        };
    },
};

export default game;
