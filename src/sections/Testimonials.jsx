import Section from "../components/Section";
import { TESTIMONIALS } from "../data";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <h3 className="mb-6 text-2xl font-semibold">What People Say</h3>
      <TestimonialCard items={TESTIMONIALS} />
    </Section>
  );
};

export default Testimonials;
