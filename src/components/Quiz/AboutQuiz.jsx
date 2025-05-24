export default function AboutQuiz() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-xl shadow-md p-6">
        {/* Image Section */}
        <div>
          <img
            src="img\restoran.jpg"
            alt="About Us"
            className="w-full h-100 object-cover rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-5">
          <h4 className="text-hijau font-semibold uppercase">About Us</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore All Corners Of <br /> The World With Us
          </h2>
          <p className="text-gray-600">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure.
          </p>
          <button className="bg-hijau text-white px-5 py-2 rounded-md hover:bg-hijauHover transition">
            Discover More
          </button>
        </div>
      </div>


    </section>
  );
}
