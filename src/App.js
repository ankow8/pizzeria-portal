import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import Kitchen from './components/views/Kitchen/Kitchen';
import { StylesProvider } from '@material-ui/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    //secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Routes>
                <Route exact path={process.env.PUBLIC_URL + '/login'} element={<Login />} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} element={<Tables />} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} element={<Tables />} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} element={<Tables />} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} element={<Tables />} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} element={<Tables />} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} element={<Waiter />} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} element={<Waiter />} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} element={<Waiter />} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} element={<Kitchen />} />
                <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Dashboard />} />
              </Routes>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
