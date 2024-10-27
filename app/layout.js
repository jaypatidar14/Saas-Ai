// app/layout.js
import './globals.css';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import OurStorySection from '@/components/OurStorySection';
import ValuesSection from '@/components/ValuesSection';
import Team from  '/components/Team';
import Journey from '@/components/Jounrey';
import Footer from '@/components/Footers';
export const metadata = {
  title: 'My Website',
  description: 'Welcome to my single page application!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <AboutSection/>
        <OurStorySection/>
        <ValuesSection/>
        <Team/>
        <Journey/>
        <Footer/>
      </body>
    </html>
  );
}
