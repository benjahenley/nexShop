import SignUpComponent from "@/presentation/components/pages/signup";
import Footer from "@/presentation/components/ui/footer/page";
import Navbar from "@/presentation/components/ui/navbar/page";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <SignUpComponent />
      <Footer />
    </>
  );
}
