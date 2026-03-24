import { createContext, useContext, useState } from "react";

interface PlayerInfo {
  playerName: string;
  balance: number;
}

interface PlayerInfoContextType {
  players: PlayerInfo[];
  addPlayer: (player: PlayerInfo) => void;
  removePlayer: (name: string) => void;
  editPlayerName: (name: string, newName: string) => void;
}

const PlayerInfoContext = createContext<PlayerInfoContextType | undefined>(undefined);

export function PlayerInfoProvider({ children }: { children: React.ReactNode }) {
  const [players, setPlayers] = useState<PlayerInfo[]>([]);

  const addPlayer = (player : PlayerInfo) => {
    setPlayers((prevPlayers) => [...prevPlayers, player]);
  };

  const removePlayer = (name: string) => {
    setPlayers((prevPlayers) => prevPlayers.filter(player => player.playerName !== name));
  };

  const editPlayerName = (name: string, newName: string) => {
    setPlayers((prevPlayers) => 
      prevPlayers.map(player =>
        player.playerName === name ? { ...player, playerName: newName } : player)
    );
  };

  return (
    <PlayerInfoContext.Provider value={{ players, addPlayer, removePlayer, editPlayerName }}>
      {children}
    </PlayerInfoContext.Provider>
  );
}

export const usePlayerInfo = () => {
  const context = useContext(PlayerInfoContext);
  if (!context) {
    throw new Error("usePlayerInfo must be used within a PlayerInfoProvider");
  }
  return context;
}