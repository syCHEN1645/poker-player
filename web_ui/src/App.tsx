import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./Pages/HomePage";
import SessionBlackJackPage from "./Pages/SessionBlackJackPage";
import GenericSessionLayout from "./Pages/GenericSessionLayout";

const theme = createTheme({
  primaryColor: 'blue',
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<GenericSessionLayout />}>
            {/* Components and their URL paths */}
            <Route path="/session/black-jack" element={<SessionBlackJackPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}