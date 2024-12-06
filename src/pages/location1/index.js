
            
        import React from 'react';
        import Link from 'next/link'; 
        const Page = ({ pageData }) => {
          return (
            <div>
              <div><header class="flex flex-row justify-center gap-4 m-0 p-6 relative shadow-lg bg-white text-black"><div class="flex flex-row gap-4"><div class="relative"><Link href="/location1" class="text-lg cursor-pointer">Location</Link><div class="absolute top-full right-0 w-48 bg-white text-black shadow-lg p-4 rounded-lg z-40 hidden"></div></div></div><div><a href="/" class="text-2xl cursor-pointer inline-block"><p>Burger Barn Breakfast</p></a></div><div class="flex flex-row gap-4"><div class="relative"><Link href="/menu1" class="text-lg cursor-pointer">Menu</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg z-40 hidden"></div></div><div class="relative"><Link href="/services" class="text-lg cursor-pointer">Services</Link><div class="absolute top-full right-0 w-48 bg-white shadow-lg p-4 rounded-lg z-40 hidden"><p class="text-lg text-gray-700 cursor-pointer hover:underline">Catering</p><p class="text-lg text-gray-700 cursor-pointer hover:underline">Food Trailer</p></div></div></div></header><div class="text-center my-4"><p class="text-xl font-bold">Location</p></div><div class="flex flex-col items-center justify-center h-screen px-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"><img src="https://saastemplatesstorage.blob.core.windows.net/sasstemplatesstorages/1733495058689-pexels-suzyhazelwood-2679323.jpg" class="w-full h-full md:h-[500px] object-cover rounded-lg shadow-lg"/><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0958125628186!2d-82.59462068483985!3d34.82965168039592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8858348f55555555%3A0x1234567890abcdef!2s6020%20Calhoun%20Memorial%20Hwy%2C%20Easley%2C%20SC%2029640!5e0!3m2!1sen!2sus!4v1725395799894!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade" class="shadow-lg rounded-lg w-full h-full"></iframe></div></div></div>
            </div>
          );
        };

        export default Page;
      
          