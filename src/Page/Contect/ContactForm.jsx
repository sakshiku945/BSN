import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {

    const form = useRef();

    let [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        from_phone: "",
        message: "",
      });
    
      const handleChange = (e) => {
        let filedName = e.target.name;
        let filedValue = e.target.value;
    
        setFormData((preVal) => {
          preVal[filedName] = filedValue;
          return { ...preVal };
        });
      };

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_1cl0azo', 'template_ktx312g', form.current, {
          publicKey: 'V9f68XlhfKmln59H0',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success("Message send successfully..");
            setFormData({
              from_name: "",
              from_email: "",
              from_phone: "",
              message: "",
            });
          },
          (error) => {
            console.log('FAILED...', error.text);
            setFormData({
                from_name: "",
                from_email: "",
                from_phone: "",
                message: "",
              });
          },
        );
    };

  return (
    <div className='container mx-auto max-w-screen-3xl'>
        <Toaster />
         <form className="w-full lg:px-4" ref={form} onSubmit={sendEmail}>

                {/* First line */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
                    {/* Company name field */}
                    <div className="flex flex-col">
                        <label htmlFor="companyName" className="mb-1 text-xs font-medium text-black">Full Name *</label>
                        <div className="relative">
                            <input
                                id="companyName"
                                className="appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                value={formData.from_name}
                                name="from_name"
                                onChange={handleChange}
                                aria-label="Company Name"
                                required
                            />
                        </div>
                    </div>
                    {/* Phone number field */}
                    <div className="flex flex-col">
                        <label htmlFor="phoneNumber" className="mb-1 text-xs font-medium text-black">Phone Number*</label>
                        <div className="relative">
                            <input
                                id="phoneNumber"
                                className="appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                value={formData.from_phone}
                                name="from_phone"
                                onChange={handleChange}
                                aria-label="Phone Number"
                            />
                        </div>
                    </div>
                </div>
                {/* Second line */}
                <div className="flex flex-col items-start py-4">
                    {/* Email field */}
                    <label htmlFor="email" className="mb-0 text-xs font-medium text-black">Email*</label>
                    <div className="relative w-full">
                        <input
                            id="email"
                            className="appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                            type="email"
                            value={formData.from_email}
                            name="from_email"
                            onChange={handleChange}
                            aria-label="Email"
                        />
                    </div>
                </div>
                {/* Third line */}
    
                    {/* Message box field */}
                    <div className="flex flex-col mt-3">
                        <label htmlFor="currentCourse" className="mb-1 text-xs font-medium text-black">Write your Message*</label>
                        <div className="relative">
                            <textarea
                                id="currentCourse"
                                className="appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 py-2 px-2 h-24 leading-tight focus:outline-none"
                                type="text"
                                value={formData.message}
                                name="message"
                                onChange={handleChange}
                                aria-label="Message"
                            />
                        </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-center mt-5 mb-5">
                    <label className="flex items-center text-black">
                        <input className="mr-2 leading-tight h-5 w-5" type="checkbox" />
                        <span className="text-sm">
                        I agree with terms and conditions
                        </span>
                    </label>
                </div>

                {/* Sign Up button */}
                <div className="flex justify-center md:justify-end mt-4">
                <button
                        className="flex-shrink-0 text-lg py-2 px-8 rounded-full hover:scale-110 transition-transform duration-300 border border-[#308d46] text-black hover:text-white hover:bg-[#308d46]"
                        type="submit" value="Send"
                    >
                        Sent Message
                    </button>
                </div>
            </form>
    </div>
  )
}

export default ContactForm