import ProfileComponent from "@/presentation/components/pages/profile";
import Footer from "@/presentation/components/ui/footer/page";
import Navbar from "@/presentation/components/ui/navbar/page";

export default function Profile() {
  return (
    <>
      <Navbar />
      <ProfileComponent />
      <Footer />
    </>
  );
}
