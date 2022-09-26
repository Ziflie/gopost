import Link from "next/link";
import { motion } from "framer-motion";
const defaultPoint = "https://62d7f2129c8b5185c77f82fc.mockapi.io/api/v1/data";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaultPoint}/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Post({ data }) {
  const { id, date, title, name, image, blogPost } = data;

  return (
    <div className="bg-white">
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div className="pt-24">
          <Link href="/">
            <h1 className="grid justify-start text-red-500 pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight rounded-lg h-1/4 pl-4">
              Return to home{" "}
            </h1>
          </Link>
        </div>
      </motion.button>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ">
            {title}
          </h2>
          <dt className="font-medium text-gray-900 pt-2">Posted by {name}</dt>
          <dt className="font-medium text-gray-900 pt-2">
            Date posted: {date}
          </dt>
          <p className="mt-4 text-gray-500 pt-12">{blogPost}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div key={id} className="border-t border-gray-200 pt-4"></div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <picture>
            <source srcSet={image} type="image/webp" />
            <img
              src={image}
              alt="blogpost-image"
              className="bg-gray-100 rounded-lg col-span-2 row-span-2"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}