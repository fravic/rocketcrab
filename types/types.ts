import { LobbyStatus, GameStatus } from "./enums";

export type RocketCrab = {
    lobbyList: Array<Lobby>;
};

export type Lobby = {
    status: LobbyStatus;
    playerList: Array<Player>;
    code: string;
    selectedGame: string;
    gameList: Array<Game>;
    gameState: GameState;
};

export type Player = {
    name: string;
    socket: SocketIO.Socket;
};

export type Game = {
    name: string;
    getJoinGameUrl: () => Promise<string>;
};

export type GameState = {
    status: GameStatus;
    url?: string;
};

export type JoinLobbyResponse = {
    code: string;
    name?: string;
};

export type PageLayoutParams = {
    children: JSX.Element[] | JSX.Element;
    path?: string;
    loading?: boolean;
};