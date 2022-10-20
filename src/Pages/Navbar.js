import React from 'react';

const Navbar = () => {
    return (
        <div>
         <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-2xl text-cyan-800">General Knowledge Quiz</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Quiz  Details</a>
  
    </nav>
    
 
  </div>
</header>
        </div>
    );
};

export default Navbar;