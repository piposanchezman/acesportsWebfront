export interface Tournament {
  _id?: string;
  game_id: string;
  name?: string;
  status?: string;
  participants?: any[];
  initial_date?: Date;
  final_date?: Date;
  quantity_participants?: number;
  brackets?: any[];
  createdAt?: Date;
  updatedAt?: Date;
}

export const TournamentDataInit: Tournament = {
  _id: "",
  game_id: "",
  name: "",
  status: "",
  participants: [],
  initial_date: new Date(),
  final_date: new Date(),
  quantity_participants: 0,
  brackets: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};
