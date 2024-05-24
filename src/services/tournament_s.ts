import { ApiProps, apiResponse } from "../context/ApiContext";
import { Tournament } from "../interfaces/tournament";

export const getUserTournaments = async (
  backendApiCall: (data: ApiProps) => Promise<apiResponse>
): Promise<apiResponse> => {
  return await backendApiCall({ method: "GET", endpoint: "v1/tournaments/by-user" });
};

export const newTournaments = async (
  backendApiCall: (data: ApiProps) => Promise<apiResponse>,
  data: Tournament
) => {
  return await backendApiCall({ method: "POST", endpoint: "v1/tournaments/new", body: data });
};

export const getTournamentById = async (
  backendApiCall: (data: ApiProps) => Promise<apiResponse>,
  id: string
): Promise<apiResponse> => {
  return await backendApiCall({ method: "GET", endpoint: `v1/tournaments/${id}` });
};

export const updateTournament = async (
  backendApiCall: (data: ApiProps) => Promise<apiResponse>,
  id: string,
  data: Tournament
) => {
  return await backendApiCall({
    method: "PUT",
    endpoint: `v1/tournaments/update/${id}`,
    body: data,
  });
};

export const deleteTournament = async (
  backendApiCall: (data: ApiProps) => Promise<apiResponse>,
  id: string
) => {
  return await backendApiCall({ method: "DELETE", endpoint: `v1/tournaments/delete/${id}` });
};

export const createBrackets = async (
  backendApiCall: (data: ApiProps) => Promise<apiResponse>,
  id: string,
  data: any
) => {
  return await backendApiCall({
    method: "PUT",
    endpoint: `v1/tournaments/update-quantity-players/${id}`,
    body: data,
  });
};

export const updateBracket = async (
  backendApiCall: (data: ApiProps) => Promise<apiResponse>,
  id: string,
  data: any
) => {
  return await backendApiCall({
    method: "PUT",
    endpoint: `v1/tournaments/update-bracket/${id}`,
    body: data,
  });
};
