import Section from "../components/Section";
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <Section id="contact">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold">Let's Build Something</h3>
        <p className="mt-2 text-sm text-white/70">
          Have an idea or role in mind? I'm all ears.
        </p>
      </div>
      <div className="mx-auto max-w-2xl">
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
