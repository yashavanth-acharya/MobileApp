import Login from "./Login/Login";
import EmptyLayout from "./Login/_layout";

export default function Page() {
  return (
    <>
    <EmptyLayout Param={<Login/>}/>
    </>
  );
}
