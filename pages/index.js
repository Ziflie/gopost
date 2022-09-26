import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero";
import Icon from "../public/favicon.ico";
import Link from "next/link";
import { motion } from "framer-motion";
import { updatePage } from "react"
const defaultPoint = "https://62d7f2129c8b5185c77f82fc.mockapi.io/api/v1/data";

export async function getServerSideProps() {
  const res = await fetch(defaultPoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  console.log(data);

 

  return (
    <div>
      <Hero />

      <div className="bg-white grid grid-cols-1">
        <div className=" col-span-1 grid justify-center">
          <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl pt-40">
            Latest posts
          </h1>
        </div>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
           
      

            {data.map(({ id, date, title, name, image }) => (
              // animation
              <motion.div
                key={id}
                className="box"
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
              >
                {/* actual card code */}
                <a href={undefined} className="group">
                  <div className=" w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <Link href="/post/[id]" as={`post/${id}`}>
                      <picture>
                        <source srcSet={image} type="image/webp" />
                        <img src={image} alt="wadawd" className="" />
                      </picture>
                    </Link>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {" "}
                    posted by {name}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-orange-400">
                    {title}
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    Posted: {date}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
