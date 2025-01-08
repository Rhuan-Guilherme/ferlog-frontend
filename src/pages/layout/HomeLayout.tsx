import { Outlet } from "react-router-dom";
import { Header } from "../Home/components/Header/Header";

export function HomeLayout(){
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}