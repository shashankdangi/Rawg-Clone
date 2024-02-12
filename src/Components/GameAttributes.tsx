import { SimpleGrid, Badge, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefinitionItem term='Platforms'>
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Metascore'>
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term='Genres'>
        {game.genres.map((genre) => (
          <Badge
            padding={1}
            colorScheme='yellow'
            borderRadius={4}
            marginRight={1}
            key={genre.id}
          >
            {genre.name}
          </Badge>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Publishers'>
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
