
            
        import React from 'react';
        import Link from 'next/link'; 
        const Page = ({ pageData }) => {
          return (
            <div>
              <div><header class="flex flex-row justify-center gap-4 m-0 p-6 relative shadow-lg bg-white text-black"><div class="flex flex-row gap-4"><div class="relative"><Link href="/location1" class="text-lg cursor-pointer">Location</Link><div class="absolute top-full right-0 w-48 bg-white text-black shadow-lg p-4 rounded-lg z-40 hidden"></div></div></div><div><a href="/" class="text-2xl cursor-pointer inline-block"><p>Burger Barn Breakfast</p></a></div><div class="flex flex-row gap-4"><div class="relative"><Link href="/menu1" class="text-lg cursor-pointer">Menu</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg z-40 hidden"></div></div><div class="relative"><Link href="/services" class="text-lg cursor-pointer">Services</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg z-40 hidden"><p class="text-lg text-gray-700 cursor-pointer hover:underline">Catering</p><p class="text-lg text-gray-700 cursor-pointer hover:underline">Food Trailer</p></div></div></div></header><div class="text-center my-4"><p class="text-xl font-bold">Menu</p></div><div class="flex justify-center"><div class="container max-w-screen-md mx-auto"><div class="mb-6"><div class="flex justify-start mb-2"><p class="text-lg font-semibold">Sandwich</p></div><div class="relative w-full flex items-center mb-2"><hr class="w-full border-t border-gray-400"/></div><div class="flex flex-row justify-between py-2"><div><p class="text-md font-medium">Pork Sandwichs</p><p class="text-sm text-gray-600">This is our pork sandwich</p></div><p class="text-lg">$12.99</p></div></div></div></div></div>
            </div>
          );
        };

        export async function getServerSideProps() {
          // Fetch page-specific data from the API for SSR
          const pageData = await fetch(`http://localhost:3002/api/location/tester/Menu`)
            .then(res => res.json());
          return { props: { pageData } };
        }

        export default Page;
      
          