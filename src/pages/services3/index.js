
            
        import React from 'react';
        import Link from 'next/link'; 
        const Page = ({ pageData }) => {
          return (
            <div>
              <div class="border-b-2 border-gray-300 pb-20"><header class="absolute top-0 left-0 right-0 z-30 pb-8"><div><div class="absolute top-7 left-10"><div class="text-2xl font-bold cursor-pointer"><p><em>TG Studios</em></p></div></div><button class="text-lg font-semibold absolute top-0 right-0">Add Page</button><button class="text-lg font-semibold absolute top-6 right-0">Color Wheel</button></div><div class="hidden md:flex flex-col md:justify-center md:items-center gap-2 mt-8"><div class="flex gap-6"><div class="relative"><Link href="/services" class="text-lg cursor-pointer">My Services</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg hidden"><p class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Edit</p><p class="text-lg text-red-500 cursor-pointer mb-2 hover:underline">Delete</p><p class="text-lg text-gray-500 cursor-pointer mb-2 hover:underline">Visit</p><button class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Add Option</button><p class="text-lg text-gray-700 cursor-pointer hover:underline">Mens Hairstyle</p></div></div><div class="relative"><Link href="/gallery" class="text-lg cursor-pointer">Gallery</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg hidden"><p class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Edit</p><p class="text-lg text-red-500 cursor-pointer mb-2 hover:underline">Delete</p><p class="text-lg text-gray-500 cursor-pointer mb-2 hover:underline">Visit</p><button class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Add Option</button></div></div><div class="relative"><Link href="/services3" class="text-lg cursor-pointer">Grid</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg hidden"><p class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Edit</p><p class="text-lg text-red-500 cursor-pointer mb-2 hover:underline">Delete</p><p class="text-lg text-gray-500 cursor-pointer mb-2 hover:underline">Visit</p><button class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Add Option</button></div></div><div class="relative"><Link href="/aboutme" class="text-lg cursor-pointer">About Us</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg hidden"><p class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Edit</p><p class="text-lg text-red-500 cursor-pointer mb-2 hover:underline">Delete</p><p class="text-lg text-gray-500 cursor-pointer mb-2 hover:underline">Visit</p><button class="text-lg text-blue-500 cursor-pointer mb-2 hover:underline">Add Option</button></div></div></div><hr class="border w-1/4"/></div></header></div><p class="text-2xl font-semibold text-center mt-10 text-gray-800">Our Services</p><div class="min-h-screen flex justify-center items-center px-4 sm:px-8"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center max-w-screen-xl mx-auto"><div class="flex flex-col items-center space-y-6 bg-white p-6 "><img src="https://saastemplatesstorage.blob.core.windows.net/sasstemplatesstorages/1733418874306-men.jpg" alt="Service Image" class="w-full h-64 md:h-72 lg:h-80 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"/><div class="text-center"><p class="text-xl font-semibold text-gray-900">loremssda</p><p class="text-sm text-gray-600 mt-2 w-full md:w-64 mx-auto"><p>textsssa</p></p><button class="mt-4 px-8 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition-colors duration-300">Edit</button></div></div><div class="flex flex-col items-center space-y-6 bg-white p-6 "><img src="https://saastemplatesstorage.blob.core.windows.net/sasstemplatesstorages/1733418894669-washing.jpg" alt="Service Image" class="w-full h-64 md:h-72 lg:h-80 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"/><div class="text-center"><p class="text-xl font-semibold text-gray-900">Hair Washing</p><p class="text-sm text-gray-600 mt-2 w-full md:w-64 mx-auto"><p>textasd</p></p><button class="mt-4 px-8 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition-colors duration-300">Edit</button></div></div></div></div><p class="text-center mt-8 cursor-pointer text-blue-500 font-semibold hover:underline">Add Another</p>
            </div>
          );
        };

        export async function getServerSideProps() {
          // Fetch page-specific data from the API for SSR
          const pageData = await fetch(`http://localhost:3002/api/location/testing/Grid`)
            .then(res => res.json());
          return { props: { pageData } };
        }

        export default Page;
      
          