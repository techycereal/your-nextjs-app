
            
        import React from 'react';
        import Link from 'next/link'; 
        const Page = ({ pageData }) => {
          return (
            <div>
              <div class="bg-[#ffffff] text-[#000000]"><div class="border-black pb-20"><header class="flex flex-row justify-center gap-4 m-0 p-6 relative shadow-lg bg-white text-black"><div class="flex flex-row gap-4"><div class="relative"><Link href="/location1" class="text-lg cursor-pointer">Location</Link><div class="absolute top-full right-0 w-48 bg-white text-black shadow-lg p-4 rounded-lg z-40 hidden"></div></div></div><div><a href="/" class="text-2xl cursor-pointer inline-block"><p>Burger Barn Breakfast</p></a></div><div class="flex flex-row gap-4"><div class="relative"><Link href="/menu1" class="text-lg cursor-pointer">Menu</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg z-40 hidden"></div></div><div class="relative"><Link href="/services" class="text-lg cursor-pointer">Services</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg z-40 hidden"><p class="text-lg text-gray-700 cursor-pointer hover:underline">Catering</p><p class="text-lg text-gray-700 cursor-pointer hover:underline">Food Trailer</p></div></div></div></header></div><div class="grid gap-8 justify-center p-8"><div class="flex flex-col md:flex-row items-center md:items-start md:space-x-4"><img src="https://saastemplatesstorage.blob.core.windows.net/sasstemplatesstorages/1733428350934-pexels-fu-zhichao-176355-587741.jpg" alt="Service Image" class="w-full md:w-[40rem] h-auto md:h-[32rem] rounded-lg shadow-lg object-cover hover:shadow-xl transition-shadow duration-300"/><div class="md:ml-4"><p class="text-xl font-bold">Catering</p><div class="text-sm w-64"><p>We cater to your event whether thats a wedding, a party or anything else you can imagine!</p></div></div></div><div class="flex flex-col md:flex-row items-center md:items-start md:space-x-4"><img src="https://saastemplatesstorage.blob.core.windows.net/sasstemplatesstorages/1733428356845-pexels-medina-edelbi-153182799-20218397.jpg" alt="Service Image" class="w-full md:w-[40rem] h-auto md:h-[32rem] rounded-lg shadow-lg object-cover hover:shadow-xl transition-shadow duration-300"/><div class="md:ml-4"><p class="text-xl font-bold">Food Trailer</p><div class="text-sm w-64"><p>Contact us for our food trailer and we'll bring our trailer to schools, vendor markets, or anything you can imagine!</p></div></div></div></div></div>
            </div>
          );
        };

        export async function getServerSideProps() {
          // Fetch page-specific data from the API for SSR
          const pageData = await fetch(`http://localhost:3002/api/location/tester/Services`)
            .then(res => res.json());
          return { props: { pageData } };
        }

        export default Page;
      
          