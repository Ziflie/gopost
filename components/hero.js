import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useContext } from "react";
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden ">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48  ">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
             
            <h1 className="text-4xl md:text-9xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl ">
              Something fun to say?
            </h1>
            
             <p className="pb-12 mt-4 text-xl text-gray-500 pt-9">
              Saw an alien in your backyard? Want to talk about the dinner you
              had with Jay-Z? Saw Biden do a backflip? Make a gopost about it!
            </p>
            <Link href="/post-maker/">
              <a className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">
                Make a gopost
              </a>
              </Link>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
 

              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      {/* motoGP gif */}
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <picture>
                          <source
                            srcSet="https://media2.giphy.com/media/pPrkLb24HgAKrdqqFX/giphy.gif?cid=790b7611c99d4f60fb4d9cccc2bef96ab0475ddf5c7989a7&rid=giphy.gif&ct=g"
                            type="image/webp"
                          />
                          <img
                            src="https://media2.giphy.com/media/pPrkLb24HgAKrdqqFX/giphy.gif?cid=790b7611c99d4f60fb4d9cccc2bef96ab0475ddf5c7989a7&rid=giphy.gif&ct=g"
                            alt="wadawd"
                            className="full h-full object-center object-cover"
                          />
                        </picture>
                      </div>

                      {/* gif ishowspeed */}
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <picture>
                          <source
                            srcSet="https://c.tenor.com/rpes616t8iQAAAAC/ishowspeed.gif"
                            type="image/webp"
                          />
                          <img
                            src="https://c.tenor.com/rpes616t8iQAAAAC/ishowspeed.gif"
                            alt="wadawd"
                            className="full h-full object-center object-cover"
                          />
                        </picture>
                      </div>
                    </div>

                    {/* gif Tiger woods */}
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <picture>
                          <source
                            srcSet="https://i.giphy.com/media/Xs0QhkJK9ahkSGqz9F/giphy.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://i.giphy.com/media/Xs0QhkJK9ahkSGqz9F/giphy.webp"
                            alt="wadawd"
                            className="full h-full object-center object-cover"
                          />
                        </picture>
                      </div>

                      {/* top-G GIF */}
                      <div className="w-44 h-64 rounded-lg overflow-hidden xs:invisible">
                        <picture>
                          <source
                            srcSet="https://c.tenor.com/BrHJBHqAxWAAAAAd/andrew-tate-top-g.gif"
                            type="image/webp"
                          />
                          <img
                            src="https://c.tenor.com/BrHJBHqAxWAAAAAd/andrew-tate-top-g.gif"
                            alt="wadawd"
                            className="full h-full object-center object-cover"
                          />
                        </picture>
                      </div>

                      {/* 2pac rapping */}
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <picture>
                          <source
                            srcSet="https://64.media.tumblr.com/4db03dd0919af1148d17aac6153a2544/tumblr_mmnmelFifF1rbma2ko1_r2_500.gif"
                            type="image/webp"
                          />
                          <img
                            src="https://64.media.tumblr.com/4db03dd0919af1148d17aac6153a2544/tumblr_mmnmelFifF1rbma2ko1_r2_500.gif"
                            alt="wadawd"
                            className="full h-full object-center object-cover"
                          />
                        </picture>
                      </div>
                    </div>

                    {/* Money May GIF */}
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <picture>
                          <source
                            srcSet="https://c.tenor.com/kU7KN-gErMkAAAAd/floyd-mayweather-boxing.gif"
                            type="image/webp"
                          />
                          <img
                            src="https://c.tenor.com/kU7KN-gErMkAAAAd/floyd-mayweather-boxing.gif"
                            alt="wadawd"
                            className="full h-full object-center object-cover"
                          />
                        </picture>
                      </div>

                      {/* edp aan het lopen */}
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <picture>
                          <source
                            srcSet="https://thumbs.gfycat.com/IndolentGlitteringAngora-max-1mb.gif"
                            type="image/webp"
                          />
                          <img
                            src="https://thumbs.gfycat.com/IndolentGlitteringAngora-max-1mb.gif"
                            alt="wadawd"
                            className="full h-full object-center object-cover"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
