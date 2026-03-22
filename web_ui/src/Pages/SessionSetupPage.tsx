import { Button, Title, Stack, Container } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function SessionSetupPage() {
  const navigate = useNavigate();

  return (
    <Container p="xl">
      <Stack align="center">
        <Title order={2}>New Session Setup</Title>
        <Button variant="filled">
          Start New Session
        </Button>
        <Button variant="outline" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Stack>
    </Container>
  );
}