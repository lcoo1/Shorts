import React, { useMemo, useState } from 'react';
import Menubar from './view/Menubar';
import Home from './Home';
import Footer from './view/Footer';
import { ThemeProvider } from '@mui/material';
import { ColorModeContext } from './context/ColorContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShortsDownload from './view/container/shortDownload/ShortsDownload';
import NotFound from './view/container/NotFound';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/GlobalTheme';
import ShortsPicking from "./view/container/ShortsPicking";

const App = () => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const globalTheme = useMemo(() => theme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Menubar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<ShortsDownload />} />
            <Route path="/ShortsPicking" element={<ShortsPicking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
