import { Grid, Paper, Text, Title, Stack, Badge, Group, Container } from '@mantine/core';
import { IconUser, IconCoins, IconCards } from '@tabler/icons-react';

export default function SessionBlackJackPage() {
  return (
    <Container size="fluid" p="md">
      {/* Header Section */}
      <Stack gap="md">
        <Group justify="apart">
          <Title order={2}>Table</Title>
          <Badge variant="outline" color="gray">For Future</Badge>
        </Group>
        
        <Grid gutter="md">
          {/* Player Info and Stats Section */}
          <Grid.Col span={3}>
            <Paper p="md" radius="md" withBorder>
              <Group>
                <IconUser size={24} />
                <Text>Player Name</Text>
              </Group>
              <Group mt="md">
                <IconCoins size={24} />
                <Text>Chips: 1000</Text>
              </Group>
              <Group mt="md">
                <IconCards size={24} />
                <Text>Cards</Text>
              </Group>
            </Paper>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
