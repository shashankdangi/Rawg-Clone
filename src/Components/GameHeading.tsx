import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platforms = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = ` ${platforms?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginY={3} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
