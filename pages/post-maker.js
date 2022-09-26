import Image from "next/image";
import Head from "next/head";
import { MotionConfig, motion } from "framer-motion";
import Link from "next/link";

//  id, date, title, name, image

// const info = {
//   id: "1",
//   title: "Hoe maak je pannekoeken",
//   name: "Petra Bouwen",
//   image: "https://www.gifs.nl//media/pannekoeken-gifs-jrQLZz.gif",
// };

export default function PostMaker() {
  
  return (
    <div>
      {/* return to home button */}
      <div className="md:justify-start grid col-span-4 pt-32 md:pt-40 pl-12">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/">
            <h1 className=" text-red-500 pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight rounded-lg h-1/4">
              Return to home{" "}
            </h1>
          </Link>
        </motion.button>
      </div>

      <form
        action="https://62d7f2129c8b5185c77f82fc.mockapi.io/api/v1/data"
        method="post"
      >
        <div className="grid grid-cols-4">
          {/* name fill in form */}
          <div className="  grid justify-start col-span-4 pt-40 md:pl-24">
            <label className="pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl ">
              Before you are going to say something, what is your name?
            </label>
            <input className="" placeholder="John Doe" name="name" />
          </div>

          {/* title fill in form */}
          <div className="grid justify-start col-span-4 pt-40 md:pl-24">
            <h1 className="pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              What was the title again?
            </h1>
            <input
              className=""
              placeholder="Title of your  post"
              name="title"
            />
          </div>

          <div className="grid justify-start col-span-4 pt-40 md:pl-24">
            <label className="pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Put an image link
            </label>
            <input className="" placeholder="vul shit tekst in" name="image" />
          </div>

          <div className="grid justify-start col-span-4 pt-40 md:pl-24">
            <label className="pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Write your blog!
            </label>
            <input
              className=""
              placeholder="vul shit tekst in"
              name="blogPost"
            />
          </div>

          <button className="grid justify-items-start pt-12 pl-20 text-6xl text-red-500" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}