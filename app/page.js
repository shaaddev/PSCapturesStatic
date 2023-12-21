"use client";
import VideoList from './components/VideoList';
import Bridge from './icons/Bridge';
import { SportsEsports } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Home() {
  const curr_year = new Date().getFullYear();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/videos')
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error('Error fetching videos: ', error))
  }, []);

  return (
    <main className="mx-auto max-w-[1960px] p-4 bg-slate-900">
            <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 bg-slate-900">
              <div className=" after:content relative mb-3 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="flex max-h-full max-w-full items-center justify-center">
                      <Bridge />
                    </span>
                    <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
                </div>
                <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
                  {curr_year}
                </h1>
                <h2>
                  <SportsEsports /> 
                  <Typography sx={{ flexGrow: 1}}>PS Captures</Typography>
                </h2>
                <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
                  You are currently watcing various clips uploaded from 
                  xlShaadlx. Demo Project
                </p>
                <button
                  className="disabled pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
                  href="http://localhost:3000/"
                  target="_blank"
                  rel="noreferrer"
                  disabled
                >
                  disabled
                </button>
              </div>
              <VideoList videos={videos}/>
            </div>
        </main>
  )
}
