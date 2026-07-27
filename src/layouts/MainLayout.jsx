import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgressBar from '../components/common/ScrollProgressBar';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import CustomCursor from '../components/common/CustomCursor';

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
