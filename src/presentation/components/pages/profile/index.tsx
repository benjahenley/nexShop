// import { tokenState, userState } from "@/atoms";
import { Input } from "@/presentation/components/ui/Input/page";
import { PinkButton } from "@/presentation/components/ui/buttons/page";
import getUserData from "@/helpers/getUserData";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface CardProps {
  className?: string;
}

export default function ProfileComponent({ className }: CardProps) {
  const router = useRouter();
  // const token = useRecoilValue(tokenState);
  // const [user, setUser] = useRecoilState(userState);

  // useEffect(() => {
  //   if (!token) {
  //     router.push("/email");
  //   } else {
  //     const fetchData = async () => {
  //       try {
  //         const userData = await getUserData(token);
  //         // setUser(userData);
  //         console.log(userData);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };

  //     fetchData();
  //   }
  // }, []);

  return (
    <div>
      <form>
        <label htmlFor="">Nombre</label>
        <Input placeholder={""} name="benja" className="input"></Input>
        <PinkButton className="PinkButton" type="submit">
          Modificar
        </PinkButton>
      </form>
    </div>
  );
}
