import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function useAuth() {
  const { name, surname, email, access } = useSelector(
    (state: RootState) => state.user,
  );

  return {
    isAuth: !!access,
    name,
    surname,
    email,
    access,
  };
}
