import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SECRETARIAT_EMAIL = "secretariatgdgpsmun@gmail.com";
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-20 sm:pt-24 px-4 sm:px-6">
      {/* Heading */}
      <section className="mx-auto max-w-6xl text-center mb-10 sm:mb-16">
        <h2 className="h-serif text-gold text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide">
          Contact Us
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <p className="text-gray-300 text-center text-sm sm:text-base mt-2">
        We’ll get back to you within 48 hours.
      </p>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8 sm:mt-10 items-start">
        {/* Secretariat Info */}
        <div>
          <div className="rounded-2xl border border-yellow-500/50 bg-black/40 p-4 sm:p-6 md:p-8 shadow-[0_0_20px_rgba(212,175,55,0.15)] space-y-4 sm:space-y-5">
            <h3 className="h-serif text-gold text-xl sm:text-2xl">Secretariat</h3>
            <div className="h-[2px] w-12 sm:w-16 bg-yellow-500 rounded-full"></div>

            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <li>
                <p className="text-white text-base sm:text-lg">Mr. Nilesh Mandhyan</p>
                <p className="text-xs sm:text-sm">Secretary General</p>
                <a
                  href="tel:+919555532134"
                  className="text-gold hover:underline text-sm sm:text-base"
                >
                  +91 9555532134
                </a>
              </li>
              <li>
                <p className="text-white text-base sm:text-lg">Ms. Gauri Asthana</p>
                <p className="text-xs sm:text-sm">Deputy Secretary General</p>
                <a
                  href="tel:+919711124832"
                  className="text-gold hover:underline text-sm sm:text-base"
                >
                  +91 9711124832
                </a>
              </li>
              <li>
                <p className="text-white text-base sm:text-lg">Mr. Neil Kalra</p>
                <p className="text-xs sm:text-sm">Director General</p>
                <a
                  href="tel:+919026662054"
                  className="text-gold hover:underline text-sm sm:text-base"
                >
                  +91 9026662054
                </a>
              </li>
              <li>
                <p className="text-white text-base sm:text-lg">Ms. Navya Chandra</p>
                <p className="text-xs sm:text-sm">USG for Delegate Affairs</p>
                <div className="flex flex-col">
                  <a
                    href="tel:+16129303140"
                    className="text-gold hover:underline text-sm sm:text-base"
                  >
                    +1 (612) 930-3140
                  </a>
                  <a
                    href="tel:+917233026325"
                    className="text-gold hover:underline text-sm sm:text-base"
                  >
                    +91 72330 26325
                  </a>
                </div>
              </li>
              <li className="pt-2">
                <p className="text-white text-base sm:text-lg">Email</p>
                <a
                  href={`mailto:${SECRETARIAT_EMAIL}`}
                  className="text-gold hover:underline text-sm sm:text-base break-words"
                >
                  {SECRETARIAT_EMAIL}
                </a>
              </li>
            </ul>

            <div className="pt-3 sm:pt-4">
              <h4 className="text-yellow-400 font-semibold text-sm sm:text-base">Venue</h4>
              <p className="text-gray-300 text-xs sm:text-sm">GD Goenka Public School, Lucknow</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl md:max-w-none mx-auto md:mx-0 border border-yellow-500/60 bg-black/50 p-4 sm:p-6 rounded-xl space-y-3 sm:space-y-4 w-full"
        >
          {/* Name */}
          <div>
            <label className="block text-left text-gray-300 mb-1 text-sm sm:text-base">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border border-yellow-500/40 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-yellow-500 placeholder:text-gray-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-left text-gray-300 mb-1 text-sm sm:text-base">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-yellow-500/40 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-yellow-500 placeholder:text-gray-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-left text-gray-300 mb-1 text-sm sm:text-base">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent border border-yellow-500/40 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-yellow-500 placeholder:text-gray-500"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors hover:cursor-pointer text-sm sm:text-base"
          >
            Send to Secretariat
          </button>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;
