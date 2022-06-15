import Nav from "../Nav";
import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <Nav />
      <main className="mx-3 flex items-center justify-center px-5 py-12 lg:mx-0 lg:py-20">
        <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
          <h3 className="text-center text-3xl mb-6">Contact Us</h3>
          <form className="w-60 lg:w-96">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="
                        w-full
                         rounded
                        border border-[#332854]
                        py-3 px-[14px]
                        text-base
                        outline-none
                        focus-visible:shadow-none
                        "
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="
                        w-full
                        rounded
                        border border-[#332854]
                        py-3 px-[14px]
                        text-base
                        outline-none
                        focus-visible:shadow-none
                        "
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Phone"
                className="
                        w-full
                        rounded
                        border border-[#332854]
                        py-3 px-[14px]
                        text-base
                        outline-none
                        focus-visible:shadow-none
                        "
              />
            </div>
            <div className="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                        w-full
                        resize-none
                        rounded border
                        border-[#332854] py-3
                        px-[14px]
                        text-base
                        outline-none
                        focus-visible:shadow-none
                        "
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="
                        w-full
                        rounded-md
                        bg-[#332854] p-3
                        text-white
                        transition
                        hover:bg-opacity-90
                        "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
