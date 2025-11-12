import Header from "@/components/layout/Header";
import DescriptionGeneratorForm from "./DescriptionGeneratorForm";
import Footer from "@/components/layout/Footer";

export default function DescriptionGeneratorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <DescriptionGeneratorForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
