import { cookies } from "next/headers";
import { create } from "@/app/actions";
import Cookies from "@/app/components/Cookies";

const CookiePage = async () => {
  const cookiesObj = cookies();
  const ageObj = cookiesObj.get("age");

  return (
    <>
      <h1>CookiePage</h1>

      <Cookies createFn={create} ageObj={ageObj} />
    </>
  );
};

export default CookiePage;
