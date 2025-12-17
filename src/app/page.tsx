import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import ProductShowcase from '@/components/home/ProductShowcase';
import Testimonials from '@/components/home/Testimonials';
import InstagramFeed from '@/components/home/InstagramFeed';
import Footer from '@/components/layout/Footer';
import WhatsappButton from '@/components/layout/WhatsappButton';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}


