import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGames";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: platforms,
  });

export default usePlatforms;
