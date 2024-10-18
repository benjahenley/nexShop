// import { emailState, tokenState, userState } from "@/atoms";
import { Input } from "@/presentation/components/ui/Input/page";
import { YellowButton } from "@/presentation/components/ui/buttons/page";
import getTokenFromCode from "@/helpers/getTokenFromCode";
import getUserData from "@/helpers/getUserData";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";

interface CardProps {
  className?: string;
}

export default function SignInComponent({ className }: CardProps) {
  const router = useRouter();
  // const email = useRecoilValue(emailState);
  // const [token, setToken] = useRecoilState(tokenState);

  const testMax = async (e: any) => {
    e.target.value = e.target.value.substring(0, 5);
  };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   const code = parseInt(e.target.code.value);
  //   const response = await getTokenFromCode(email ? email : "", code);

  //   if (response) {
  //     setToken(response.token);
  //     setTimeout(() => {
  //       return router.push("/");
  //     }, 2000);
  //   } else {
  //     return e.target.reset();
  //   }
  // };

  return (
    <div>
      <form action="">
        <Input
          className=""
          placeholder="12345"
          name="code"
          type="number"
          maxlength={5}
          onChange={testMax}>
          Code
        </Input>
        <div>enviamos un codigo a tu mail</div>
        <YellowButton type="submit">Ingresar</YellowButton>
      </form>
    </div>
  );
}
