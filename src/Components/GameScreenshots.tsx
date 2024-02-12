import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
