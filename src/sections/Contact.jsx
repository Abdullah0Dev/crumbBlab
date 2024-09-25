import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import CustomButton from '../components/CustomButton.jsx'; 
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('-$1k');
  const [form, setForm] = useState({ name: '', email: '', message: '', budget: '', refer: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Set the selected budget to the form before submitting
    setForm((prevForm) => ({ ...prevForm, budget: selected }));
    console.log(form.budget);

    emailjs
      .send(
        'service_bdutsco',
        'template_uzait1p',
        {
          from_name: form.name,
          to_name: 'Brain',
          from_email: form.email,
          to_email: 'brian@crumblab.com',
          message: ` ${form.message} \n \n Client Email ${form.email}  \n \n Budget: \n ${selected} \n \n I heard about you from: ${form.refer} `,
        },
        'HQoPFuxeKNMAX8H3i',
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you, We are going to check it 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
              budget: '',
              refer: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <section className="c-space my-20 " id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative  min-h-screen bg-opacity-15 rounded-3xl border border-zinc-600 bg-cover flex bg-[url(/assets/gradient.png)] items-center justify-center flex-col">
        <div className="contact-container">
          <h3 className="head-text">Hey! Lets chat about your project</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, We're here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Whats your name?</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your email?</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Tell us about your project </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your Project Overview..."
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Project budget (USD): </span>
              <div className=" flex gap-x-8 flex-wrap gap-y-9">
                {budgetData.map((item, index) => (
                  <button type="button" key={index} onClick={() => setSelected(item.amount)}>
                    <span
                      className={`cursor-pointer bg-n-6 px-5 py-3 rounded-lg text-lg ${
                        selected === item.amount ? ' text-n-1 border-n-4 border' : 'text-n-3  '
                      }`}>
                      {item.amount}
                    </span>
                  </button>
                ))}
              </div>
            </label>
            <label className="space-y-3">
              <span className="field-label">How did you hear about us?</span>
              <input
                type="text"
                name="refer"
                value={form.refer}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Facebook"
              />
            </label>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
              <CustomButton className="w-full mb-6  rounded-tr-[22px]" disabled={loading} white={false}>
                {loading ? 'Submitting...' : 'Submit Project'}
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const budgetData = [
  {
    amount: '-1$k',
  },
  {
    amount: '1$k - $5k',
  },
  {
    amount: '5$k - $10k',
  },
  {
    amount: '10$k - $20k',
  },
  {
    amount: '$20k +',
  },
];
