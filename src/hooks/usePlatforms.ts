import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGames";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24hrs
    initialData: platforms,
  });

export default usePlatforms;
