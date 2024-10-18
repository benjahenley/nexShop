// import { emailState } from "benja/src/atoms";
import { Input } from "@/presentation/components/ui/Input/page";
import { YellowButton } from "@/presentation/components/ui/buttons/page";
// import sendCodeToEmail from "benja/src/lib/api/sendCodeToEmail";
// import verifyEmail from "benja/src/lib/api/verifyEmail";
import { useRouter } from "next/router";
// import { useRecoilState } from "recoil";

export default function EmailComponent() {
  const router = useRouter();
  // const [email, setEmail] = useRecoilState(emailState);

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const target = e.target;
  //   const emailValue = target.email.value;
  //   setEmail(emailValue);

  //   const emailExistance = await sendCodeToEmail(emailValue);
  //   console.log(emailExistance);
  // try {
  //   router.push("/signin");
  // } catch {
  //   router.push("/signup");
  // }

  // const emailExistance = await verifyEmail(emailValue);
  // const emailExistanceData = await emailExistance?.json();
  // };

  return (
    <div>
      <form action="">
        <Input className="" placeholder="ingresa tu mail" name="email">
          email
        </Input>
        <YellowButton type="submit">Aceptar</YellowButton>
      </form>
    </div>
  );
}
