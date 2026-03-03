import "@mantine/core/styles.css";
import { MantineProvider, Button, Title, Stack, Container, createTheme } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'blue',
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Container p="xl">
        <Stack align="center">
          <Title order={1}>Poker Player UI</Title>
          <Button variant="filled" size="lg">
            Start New Session
          </Button>
        </Stack>
      </Container>
    </MantineProvider>
  );
}