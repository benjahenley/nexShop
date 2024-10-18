import EmailComponent from "@/presentation/components/pages/email";
import Footer from "@/presentation/components/ui/footer/page";
import Navbar from "@/presentation/components/ui/navbar/page";

export default function Email() {
  return (
    <>
      <Navbar />
      <EmailComponent />
      <Footer />
    </>
  );
}
