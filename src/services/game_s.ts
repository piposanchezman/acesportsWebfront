import { ApiProps, apiResponse } from "../context/ApiContext";

export const getGames = async (
  backendApiCall: (data: ApiProps) => Promise<apiResponse>
): Promise<apiResponse> => {
  return await backendApiCall({ method: "GET", endpoint: "v1/games/all" });
};

export const getGameById = async (
  backendApiCall: (data: ApiProps) => Promise<apiResponse>,
  id: string
): Promise<apiResponse> => {
  return await backendApiCall({ method: "GET", endpoint: `v1/games/${id}` });
};
