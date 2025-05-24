import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import testimonialData from '../../data/testimonials.json';

export default function TestimonialComponent() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Data diambil langsung dari file JSON lokal (bukan fetch)
    setTestimonials(testimonialData);
    setIsLoading(false);
  }, []);

  const goToPrevious = () => {
    if (testimonials.length === 0) return;
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    if (testimonials.length === 0) return;
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => setCurrentIndex(index);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return <div className="text-center p-8">Tidak ada testimonial yang tersedia.</div>;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden bg-white">
        <div className="w-full md:w-2/5 relative">
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
          <div>
            <div className="text-6xl font-bold mb-4 text-hijau">"</div>
            <p className="text-gray-600 mb-6 text-lg">{currentTestimonial.quote}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-1">{currentTestimonial.name}</h3>
            <p className="text-gray-500">{currentTestimonial.position}</p>
          </div>

          <div className="flex justify-between mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
