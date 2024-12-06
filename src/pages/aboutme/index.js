
            
        import React from 'react';
        import Link from 'next/link'; 
        const Page = ({ pageData }) => {
          return (
            <div>
              <div class="text-black border-black"><header class="absolute top-0 left-0 right-0 z-30 pb-8 bg-[transparent]"><div><div class="absolute top-7 left-10"><a class="text-2xl font-bold cursor-pointer" href="/"><p><em>TG Studios</em></p></a></div><button class="text-lg font-semibold absolute top-0 right-0">Add Page</button><button class="text-lg font-semibold absolute top-6 right-0">Color Wheel</button></div><div class="hidden md:flex flex-col md:justify-center md:items-center gap-2 mt-8"><div class="flex gap-6"><div class="relative"><Link href="/services" class="text-lg cursor-pointer">Services</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg hidden"><p class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Edit</p><p class="text-lg text-red-500 cursor-pointer mb-2 hover:underline">Delete</p><p class="text-lg text-gray-500 cursor-pointer mb-2 hover:underline">Visit</p><button class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Add Option</button><p class="text-lg text-gray-700 cursor-pointer hover:underline">Mens Hairstyle</p></div></div><div class="relative"><Link href="/gallery" class="text-lg cursor-pointer">Gallery</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg hidden"><p class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Edit</p><p class="text-lg text-red-500 cursor-pointer mb-2 hover:underline">Delete</p><p class="text-lg text-gray-500 cursor-pointer mb-2 hover:underline">Visit</p><button class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Add Option</button></div></div><div class="relative"><Link href="/aboutme" class="text-lg cursor-pointer">About Us</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg hidden"><p class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Edit</p><p class="text-lg text-red-500 cursor-pointer mb-2 hover:underline">Delete</p><p class="text-lg text-gray-500 cursor-pointer mb-2 hover:underline">Visit</p><button class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Add Option</button></div></div></div><hr class="border w-1/4"/></div></header></div><div class="flex flex-col items-center justify-center pb-28 baloo-2 w-full px-4 mt-10 min-h-screen"><p class="text-3xl font-bold mt-10 text-center">About Me</p><hr class="w-1/2 border-t-2 border-black my-8"/><div class="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl gap-4 mt-16 mb-16"><div class="flex flex-col items-center justify-center gap-4"><img src="https://saastemplatesstorage.blob.core.windows.net/sasstemplatesstorages/1733424208483-calhoun.jpg" class="w-[80rem] h-[40rem] object-cover rounded-lg shadow-lg mx-auto" alt="About Me"/><input type="file" accept="image/*" class="hidden"/></div><div class="flex flex-col justify-start max-w-[35rem] w-full mb-20"><div class="text-lg mt-8"><div class="whitespace-pre-line"><p>Welcome to TG Studios on Calhoun Memorial, where artistry and passion combine to create an exceptional salon experience. Our mission is to empower every client to look and feel their absolute best by delivering personalized, high-quality hair care services in a warm and welcoming environment.</p></div></div></div></div></div>
            </div>
          );
        };

        export async function getServerSideProps() {
          // Fetch page-specific data from the API for SSR
          const pageData = await fetch(`http://localhost:3002/api/location/testing/About Us`)
            .then(res => res.json());
          return { props: { pageData } };
        }

        export default Page;
      
          