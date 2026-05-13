import Header from "@/components/Header";
import ProviderDirectory from "@/components/ProviderDirectory";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <ProviderDirectory />
      </div>
      <Footer />
    </main>
  );
}
