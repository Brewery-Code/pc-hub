import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store/store";
import { Header } from "./components";
import { Main } from "./components";
import { Footer } from "./components";
import {
  fetchCart,
  fetchUserInfo,
  fetchWishlist,
} from "./store/user/user.slice";

function App() {
  const { access } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo({ access }));
  }, [dispatch, access]);

  useEffect(() => {
    dispatch(fetchCart({ access }));
  }, [dispatch, access]);

  useEffect(() => {
    dispatch(fetchWishlist({ access }));
  }, [dispatch, access]);

  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (!searchParams.has("length")) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
