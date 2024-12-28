
import Navbar from "../Components/Navbar/Navbar";
import CourseCard from "../Components/Input/CourseCard";

function Home() {
  return (
    <>
      <div className = "min-h-screen">
        <Navbar />
        <div className="min-h-80 flex justify-center text-center items-center p-6">
          <section className="tracking-tight">
            <div className="flex justify-center">
              <h1
                className="text-7xl font-bold tracking-tight leading-none"
                style={{ color: "#3770E5" }}
              >
                100xDevs,
              </h1>
              <h1 className="text-7xl font-bold">because</h1>
            </div>

            <h1 className="text-7xl font-bold">10x ain't enough!</h1>
            <p className="text-xl mt-6">
              A beginner-friendly plateform for mastering programming skills.
            </p>
            <div className="flex gap-2 justify-center mt-5">
              <button className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-900 transition ease-in-out">
                Explore Course
              </button>
              <button className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-900 transition ease-in-out">
                Explore Notes
              </button>
            </div>
          </section>
        </div>
        <div className="whitespace-nowrap gap-2 p-6 overflow-hidden flex">
          <div className="flex gap-4 scroll-container">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          </div>
          <div className="flex gap-4 scroll-container">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
