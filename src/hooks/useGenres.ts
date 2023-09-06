import genres from "../data/genres";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours,
    initialData: { count: genres.length, results: genres },
  });

// const useGenres = () =>
//   useQuery({
//     queryKey: ["genres"],
//     queryFn: () =>
//       apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
//     staleTime: 24 * 60 * 60 * 1000, // 24 hours,
//     initialData: { count: genres.length, results: genres },
//   });

export default useGenres;
