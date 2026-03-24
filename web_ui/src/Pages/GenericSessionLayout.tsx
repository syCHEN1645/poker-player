import { AppShell, Burger, Group, Title, NavLink, Stack, Text, Badge, Button, ScrollArea, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet, useNavigate } from 'react-router-dom';
import { IconLogout, IconHistory, IconCpu, IconAlertCircle } from '@tabler/icons-react';

export default function GenericSessionLayout() {
  // visible by default on PC, hidden by default on mobile
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  
  const navigate = useNavigate();

  const handleQuitSession = () => {
    navigate('/');
  }

  const handleSettings = () => {
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header px="md">
        <Group h="100%" justify="space-between">
          <Group>
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
            <Title order={4} c="blue">POKER_BOT_v1</Title>
          </Group>

          <Group gap="xs" visibleFrom="sm">
            <Badge variant="dot" color="green">(For Fututre)</Badge>
            <Badge variant="outline" color="gray">(For Future)</Badge>
          </Group>
        </Group>
      </AppShell.Header>

      {/* scrollable components */}
      <AppShell.Navbar p="md">
        <AppShell.Section grow component={ScrollArea}>
          <Stack gap="xs">
            <Text size="xs" fw={700} c="dimmed" tt="uppercase">dummy section 1</Text>

            <NavLink
              label="dummy"
              leftSection={<IconCpu size={18} stroke={1.5} />}
              description="for future use"
              variant="light"
            />

            <Divider my="sm" />

            <Text size="xs" fw={700} c="dimmed" tt="uppercase">dummy section 2</Text>
            <NavLink
              label="dummy"
              leftSection={<IconHistory size={18} stroke={1.5} />}
            />
            <NavLink
              label="dummy"
              leftSection={<IconAlertCircle size={18} stroke={1.5} />}
            />
          </Stack>
        </AppShell.Section>

        {/* stationary components */}
        <AppShell.Section>
          <Divider my="sm" />
          <Stack gap="xs">
            <Button
              variant="subtle" 
              color="grey" 
              fullWidth 
              leftSection={<IconLogout size={18} />}
              onClick={handleSettings}
            />
            <Button 
              variant="subtle" 
              color="red" 
              fullWidth 
              leftSection={<IconLogout size={18} />}
              onClick={handleQuitSession}
            >
              Quit Session
            </Button>
          </Stack>
        </AppShell.Section>
      </AppShell.Navbar>

      {/* implementation by specific pages */}
      <AppShell.Main bg="var(--mantine-color-dark-8)">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}