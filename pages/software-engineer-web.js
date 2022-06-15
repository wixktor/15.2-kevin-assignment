/* eslint-disable @next/next/no-html-link-for-pages */
import { motion, useAnimation } from "framer-motion";
import Nav from "../components/Nav";

export default function JFE() {
  return (
    <>
      <div className="landing text-[#332854]">
        <Nav />
        <motion.div
          key="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mx-auto flex max-w-7xl flex-row items-center py-24 px-4"
        >
          <div className="mr-10 md:mr-16 lg:mr-24">
            <a href="/">
              <img src="/svgs/back.svg" alt="Go back" />
            </a>
          </div>
          <div className="">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Senior Software Engineer, Web
            </h2>
          </div>
        </motion.div>
        <motion.div
          key="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="w-full bg-[#f8fafc] py-12 px-3"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            <h3 className="max-w-3xl text-2xl">
              We&apos;re putting a team together to build the worlds best
              websites
            </h3>
            <p className="basiersquare-medium mt-6 max-w-3xl text-xl">
              Hotbeans is a multinational agency specialising in web design, web
              development and brand identity. We provide an exceptional
              experience for every website we make.
            </p>
            <div className="mt-6 max-w-3xl">
              <h3 className="text-xl underline">What You Need</h3>
              <ul className="mt-3 list-disc space-y-3 pl-4">
                <li>
                  A desire to collaborate closely with users, designers, &
                  testers to deliver quality software that solves problems.
                </li>
                <li>
                  A deep understanding of Javascript and considerable experience
                  building thick-client applications with modern frameworks such
                  as Ember, AngularJS, Backbone or React/Flux.
                </li>
                <li>
                  Experience with testing frameworks, tools and methodologies
                  such as QUnit, Mocha & Selenium.
                </li>
                <li>
                  Functional knowledge & interest in developing accessible
                  interfaces.
                </li>
                <li>
                  Strong HTML & CSS skills, with bonus points for experience
                  with animation, knowledge of approaches to scalable/modular
                  CSS, & preprocessors such as SCSS & LESS.
                </li>
              </ul>
              <h3 className="mt-12 text-xl underline">
                Benefits Of Working At Hotbeans
              </h3>
              <ul className="mt-3 mb-12 list-disc space-y-3 pl-4">
                <li>Remote-first culture</li>
                <li>Competitive salary</li>
                <li>Competitive vacation and flexible working arrangements</li>
                <li>Paid parental leave, including adoption</li>
                <li>
                  A variety of professional development and mentorship
                  opportunities
                </li>
                <li>
                  Strong HTML & CSS skills, with bonus points for experience
                  with animation, knowledge of approaches to scalable/modular
                  CSS, & preprocessors such as SCSS & LESS.
                </li>
              </ul>
              <p className="basiersquare-medium text-md mt-6 max-w-3xl">
                We are committed to fostering a culture of belonging where
                everyone feels seen, heard, valued for who they are and
                empowered to succeed. Our approach to cultivating a diverse,
                equitable, and inclusive culture is rooted in listening,
                learning and collective action. By embracing the diversity of
                our people, we achieve our best work and fuel innovation -
                generating the best possible outcomes for our customers and the
                communities they serve.
              </p>
            </div>
            <form className="mt-12 flex max-w-xl flex-col">
              <label className="text-md">Your name:</label>
              <input className="mb-4 mt-1 rounded-md border border-[#332854ad] py-1 px-2 text-2xl" />
              <label className="text-md">Your phone number:</label>
              <input className="mb-4 mt-1 rounded-md border border-[#332854ad] py-1 px-2 text-2xl" />
              <label className="text-md">Why do you want to work here?</label>
              <textarea className="mb-4 mt-1 rounded-md border border-[#332854] py-1 px-2 text-xl" />
              <label
                htmlFor="formFile"
                className="form-label mb-2 inline-block text-gray-700"
              >
                Your CV:
              </label>
              <input type="file" id="formFile" />
              <a
                href="/buttons/61"
                className="basiersquare-medium mt-6 rounded-md bg-[#332854] py-2 px-3 text-center text-lg text-white transition hover:shadow-lg hover:shadow-indigo-500/50 focus:outline-none"
              >
                Submit application
              </a>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
}