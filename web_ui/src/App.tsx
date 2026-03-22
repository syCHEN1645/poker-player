import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./Pages/HomePage";
import SessionSetupPage from "./Pages/SessionSetupPage";

const theme = createTheme({
  primaryColor: 'blue',
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <Routes>
          {/* Components and their URL paths */}
          <Route path="/" element={<HomePage />} />
          <Route path="/session-setup" element={<SessionSetupPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}