export default function HeroQuiz() {
  return (
    <section className="bg-[#f0fbfd] py-24">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Stay Once Carry<br />Memories Forever
          </h1>
          <p className="text-lg text-gray-500 mb-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <button className="bg-hijau text-white px-6 py-3 rounded hover:bg-hijauHover transition">
            Book Now
          </button>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/3 relative">
          <div className="overflow-hidden rounded-b-[200px]">
            <img
              src="src\assets\image\Hero.jpg"
              alt="Hotel Room"
              className="w-full h-auto object-coverr"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
