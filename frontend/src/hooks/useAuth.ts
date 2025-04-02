import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function useAuth() {
  const { name, surname, email, access, refresh } = useSelector(
    (state: RootState) => state.user,
  );

  return {
    isAuth: !!name,
    name,
    surname,
    email,
    access,
    refresh,
  };
}
