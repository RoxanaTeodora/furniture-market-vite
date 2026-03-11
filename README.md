## React + Vite

next: update navbar design inline with Contact page, using the design for underline
next: send to back the product cards to be under the mobile navbar:
<div class="absolute top-full left-0 w-full bg-[#213425] flex flex-col items-center gap-6 font-semibold text-lg py-6 transform transition-all duration-300 xl:hidden opacity-100 translate-y-0"><a href="/about">About</a><a href="/">Products</a><a href="/cart">Cart</a><a href="/contact">Contact</a><a href="/admin">Admin</a></div>
<div class="relativem-10 flex flex-col overflow-hidden border border-gray-100 bg-white shadow-md -z-10"><img src="https://www.ikea.com/ro/ro/images/products/vindkast-lampadar-alb__1180020_pe896176_s5.jpg?f=xl" alt="Intelligent LAMP"><div class="mt-4 pb-5"><h5 class="text-xl tracking-tight text-slate-900">Intelligent LAMP</h5><div class="mt-2 mb-5 flex justify-center items-center"><p><span class="text-3xl font-bold text-slate-900">834.00 RON</span></p></div><div class="flex flex-row font-medium text-black items-buttom justify-center items-center"><button id="40" class="ml-8 flex flex-row bg-green-950 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300">Add to cart</button><span><button><img class="h-[30px] flex bottom-0  pl-6   w-full object-cover" src="/assets/info-CG8pakz9.png" alt="img"></button></span></div></div></div>
  
### The site uses local storage for the Cart and Admin functionalities. For every modification in the Admin page is mandatory to Delete browsing history and cookies.

The website was created using tailwindcss components.

##### The site has five main pages: About, Products, Cart, Contact and Admin. It is created using Vite.js based on the prototype in Figma:

![Group 9 (1)](https://github.com/user-attachments/assets/3b0001ba-f7ba-4ded-9c75-22b39b3ac353)

- About
  Presents the description of the website
  It has a carousel component for a preview of the products
  The main advantages of using the products
  Links connected to other pages on the website

- Products
  Every product has a card component with an "Add to cart" button and a link for more details

- Details
  Every product has a pop-up detailed page implemented using useParams

- Cart
  In the cart, the user can see the name and the image of the product they chose
  It has an icon for deleting, increasing, and decreasing the quantity of the chosen objects

- Contact
  It has a form component with other links for social contact
  It is a functional component using Email.js

- Admin
  It has a section for adding, editing, and deleting the products using mock API
  MockAPI is a simple tool that generates custom data and performs operations using RESTful interface.

https://github.com/RoxanaTeodora/Sustainable_furniture_market/assets/142969879/4baf8d6e-5a06-46eb-8a57-32c117a9db50

- Deploy
  Vercel repository: [https://furniture-market-vite-git-main-roxanateodoras-projects.vercel.app/about](https://furniture-market-vite.vercel.app)
  
