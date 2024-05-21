
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import MainLayout from './layout/MainLayout';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/Theme';
import Home from './pages/Home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline></CssBaseline>
    </ThemeProvider>
  )
}

export default App
