import React, { useEffect, useState } from 'react';
import Card from '../Card';
import testimonialsData from '../../assets/testimonials.json';
import Pagination from '../Pagination';
import './styles.css';



const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    setTestimonials(testimonialsData);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonialsPerPage = windowWidth < 768 ? 1 : 3;
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  return (
    <section id="testimonials" className="testimonials-section" role="region" aria-label="Testimonials Section">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        {currentTestimonials.map((testimonial, index) => (
          <Card key={index} card={testimonial} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </section>
  );
}

export default Testimonials;