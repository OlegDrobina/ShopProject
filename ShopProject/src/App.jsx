import { Route, Routes, Navigate } from "react-router-dom";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { history, store } from "./redux/store";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Provider, useSelector } from "react-redux";
import ProductsList from "./pages/ProductsList/ProductsList";
import Login from "./pages/Login/Login";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to='/' />;
};

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router history={history}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route
              path='/products'
              element={
                <PrivateRoute>
                  <ProductsList />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
