
            
        import React from 'react';
        import Link from 'next/link'; 
        const Page = ({ pageData }) => {
          return (
            <div>
              <header class="absolute top-0 left-0 right-0 z-30 pb-8 bg-[transparent]"><div><div class="absolute top-7 left-10"><a class="text-2xl font-bold cursor-pointer" href="/"><p><em>TG Studios</em></p></a></div><button class="text-lg font-semibold absolute top-0 right-0">Add Page</button><button class="text-lg font-semibold absolute top-6 right-0">Color Wheel</button></div><div class="hidden md:flex flex-col md:justify-center md:items-center gap-2 mt-8"><div class="flex gap-6"><div class="relative"><Link href="/services" class="text-lg cursor-pointer">Services</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg hidden"><p class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Edit</p><p class="text-lg text-red-500 cursor-pointer mb-2 hover:underline">Delete</p><p class="text-lg text-gray-500 cursor-pointer mb-2 hover:underline">Visit</p><button class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Add Option</button><p class="text-lg text-gray-700 cursor-pointer hover:underline">Mens Hairstyle</p></div></div><div class="relative"><Link href="/gallery" class="text-lg cursor-pointer">Gallery</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg hidden"><p class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Edit</p><p class="text-lg text-red-500 cursor-pointer mb-2 hover:underline">Delete</p><p class="text-lg text-gray-500 cursor-pointer mb-2 hover:underline">Visit</p><button class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Add Option</button></div></div><div class="relative"><Link href="/aboutme" class="text-lg cursor-pointer">About Us</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg hidden"><p class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Edit</p><p class="text-lg text-red-500 cursor-pointer mb-2 hover:underline">Delete</p><p class="text-lg text-gray-500 cursor-pointer mb-2 hover:underline">Visit</p><button class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Add Option</button></div></div></div><hr class="border w-1/4"/></div></header><div class="flex flex-col items-center pb-28 baloo-2 w-full justify-center align-center mt-24"><p class="text-3xl font-bold">Gallery</p><hr class="w-1/2 border-t-2 border-black my-2"/><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-4 justify-items-center"><img src="https://saastemplatesstorage.blob.core.windows.net/sasstemplatesstorage/1732720579138-washing.jpg" alt="Image 0" class="rounded w-3/4 sm:w-5/6 md:w-11/12 lg:w-full h-40 sm:h-48 md:h-56 lg:h-60 shadow-lg object-cover"/><img src="https://saastemplatesstorage.blob.core.windows.net/sasstemplatesstorage/1732720579139-hair_dying.jpg" alt="Image 1" class="rounded w-3/4 sm:w-5/6 md:w-11/12 lg:w-full h-40 sm:h-48 md:h-56 lg:h-60 shadow-lg object-cover"/><img alt="Image 2" class="rounded w-3/4 sm:w-5/6 md:w-11/12 lg:w-full h-40 sm:h-48 md:h-56 lg:h-60 shadow-lg object-cover"/></div><input type="file" accept="image/*" multiple="" class="mt-4"/></div>
            </div>
          );
        };

        export async function getServerSideProps() {
          // Fetch page-specific data from the API for SSR
          const pageData = await fetch(`http://localhost:3002/api/location/testing/Gallery`)
            .then(res => res.json());
          return { props: { pageData } };
        }

        export default Page;
      
          