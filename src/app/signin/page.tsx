import SignInComponent from "@/presentation/components/pages/signin";
import Footer from "@/presentation/components/ui/footer/page";
import Navbar from "@/presentation/components/ui/navbar/page";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <SignInComponent />
      <Footer />
    </>
  );
}
