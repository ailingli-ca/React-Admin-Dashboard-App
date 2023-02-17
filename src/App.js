import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider} from "@mui/material";
import { Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";


function App() {
  const [theme, colorMode] = useMode();


  return (
  <ColorModeContext.provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className = "content">
          <Topbar />
        </main>        
      </div>;
    </ThemeProvider>
  </ColorModeContext.provider>
  );
}

export default App;
