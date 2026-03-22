import { Button, Modal, Title, Stack, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const [isModalOpened, { open, close }] = useDisclosure(false);

  const closeModal = () => {
    close();
  };

  return (
    <Container p="xl">
      <Modal opened={isModalOpened} onClose={closeModal}>
        <Title order={3}>Select Game</Title>
        <Stack align="left">
          <Button variant="outline" onClick={() => navigate('/session-setup/black-jack')}>
            Black Jack
          </Button>
        </Stack>
      </Modal>
      <Stack align="center">
        <Title order={1}>Poker Player UI</Title>
        <Button variant="filled" size="lg" onClick={open}>
          Start New Session
        </Button>
      </Stack>
    </Container>
  );
}