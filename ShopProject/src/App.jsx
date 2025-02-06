import { Route, Routes, Navigate } from "react-router-dom";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { history, store } from "./redux/store";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Provider, useSelector } from "react-redux";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import Preview from "./pages/Preview/Preview";

const PrivateRoute = ({ children }) => {
  const isAuthTokenValid = useSelector((state) => state.auth.isAuthTokenValid);
  return isAuthTokenValid ? children : <Navigate to='/' />;
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
                  <Products />
                </PrivateRoute>
              }
            />
            <Route
              path='/preview'
              element={
                <PrivateRoute>
                  <Preview />
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
