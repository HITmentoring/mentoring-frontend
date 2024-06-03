import femaleUser from '../assets/femaleUser.png';
import maleUser from '../assets/maleUser.png';
import Card from '../components/Card';
import PhotoCarousel from '../components/Carousel';
import NoticeCard from '../components/NoticeCard';


const Home = () => {
  return (
    <div className='bg-[#f7f3f3] min-h-screen'>
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
              image={maleUser}
              title="Teacher 1"
              description="Description of Teacher 1."
            />
            <Card
              image={maleUser}
              title="Teacher 2"
              description="Description of Teacher 2."
            />
            <Card
              image={femaleUser}
              title="Teacher 3"
              description="Description of Teacher 3."
            />
            <Card
              image={femaleUser}
              title="Teacher 4"
              description="Description of Teacher 4."
            />
          </div>
        </section>
        <section className="my-10">
          <h2 className="text-3xl font-bold text-center">What's New</h2>
          <p className="text-center text-lg mt-4">Explore the latest updates and news.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <NoticeCard
              title="News Title 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lectus iaculis, porttitor diam venenatis, vestibulum felis. Praesent sed neque est. Fusce egestas lacus eu felis dignissim mattis. Morbi tristique eros a est mollis, nec elementum risus rhoncus. Fusce dignissim luctus elit quis dignissim."
            />
            <NoticeCard
              title="News Title 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lectus iaculis, porttitor diam venenatis, vestibulum felis. Praesent sed neque est. Fusce egestas lacus eu felis dignissim mattis. Morbi tristique eros a est mollis, nec elementum risus rhoncus. Fusce dignissim luctus elit quis dignissim."
            />
            <NoticeCard
              title="News Title 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lectus iaculis, porttitor diam venenatis, vestibulum felis. Praesent sed neque est. Fusce egestas lacus eu felis dignissim mattis. Morbi tristique eros a est mollis, nec elementum risus rhoncus. Fusce dignissim luctus elit quis dignissim."
            />
            <NoticeCard
              title="News Title 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lectus iaculis, porttitor diam venenatis, vestibulum felis. Praesent sed neque est. Fusce egestas lacus eu felis dignissim mattis. Morbi tristique eros a est mollis, nec elementum risus rhoncus. Fusce dignissim luctus elit quis dignissim."
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
