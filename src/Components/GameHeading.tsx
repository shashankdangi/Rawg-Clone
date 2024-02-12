import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platforms = usePlatform(platformId);

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const heading = ` ${platforms?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginY={3} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
