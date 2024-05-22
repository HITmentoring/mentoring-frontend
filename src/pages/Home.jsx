/* eslint-disable react/no-unescaped-entities */
// src/pages/Home.js

import programImage1 from '../assets/hit3.jpeg';
import Card from '../components/Card';
import PhotoCarousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NoticeCard from '../components/NoticeCard';
// Uncomment and import other images if you have them
// import programImage2 from '../assets/programImage2.jpg';
// import programImage3 from '../assets/programImage3.jpg';
// import programImage4 from '../assets/programImage4.jpg';

const Home = () => {
  return (
    <div className='bg-[#f7f3f3] min-h-screen'>
      <Navbar />
      <main className="container mx-auto p-4">
        <section className="my-10">
          <h1 className="text-4xl font-bold text-center">Haldia Institute Of Technology</h1>
          <p className="text-center text-lg mt-4">A place where education meets excellence.</p>
        </section>
        <section className="my-10">
          <PhotoCarousel />
        </section>
        <section className="my-10">
          <h2 className="text-3xl font-bold text-center">Teachers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <Card 
              image={programImage1} 
              title="Program 1" 
              description="Description of program 1." 
            />
            <Card 
              image={programImage1} 
              title="Program 2" 
              description="Description of program 2." 
            />
            <Card 
              image={programImage1} 
              title="Program 3" 
              description="Description of program 3." 
            />
            <Card 
              image={programImage1} 
              title="Program 4" 
              description="Description of program 4." 
            />
          </div>
        </section>
        <section className="my-10">
          <h2 className="text-3xl font-bold text-center">What's New</h2>
          <p className="text-center text-lg mt-4">Explore the latest updates and news.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <NoticeCard 
              title="News Title 1" 
              description="Description of news 1." 
            />
            <NoticeCard 
              title="News Title 2" 
              description="Description of news 2." 
            />
            <NoticeCard 
              title="News Title 3" 
              description="Description of news 3." 
            />
            <NoticeCard 
              title="News Title 4" 
              description="Description of news 4." 
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
