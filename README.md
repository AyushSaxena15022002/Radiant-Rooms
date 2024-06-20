https://radiant-rooms.netlify.app/

Radiant Rooms – a React-powered, Auth0-secured, and Stripe-enhanced home decor and furniture haven with a seamless User-Interface . Effortlessly sort, filter, and cart your favorites in style. 

Radiant Rooms is a React-based frontend Web Platform that allows users to explore various products listed on the platform . It is a Single Page Application which uses the feature of Router and Routes to render 4 different sections of components namely home , login , cart and checkout pages as per login and authorization.

In this project I have used Auth0 which provides authentication and authorization services as Auth0 has simple implementation and good documentation. It helped me to provide private and guarded route to the checkout for users who logged in , denied access otherwise navigating them back to login .

State Management in react is a difficult task thereby the project makes good use of Context Api along useReducer hook and its dispatch functions using which I was able to create global context and use features like useContext to communicate between components to avoid prop-drilling. 

The product section of the website offers various functionalities like grid layout ( list and grid) , filter options based on name, color, price , company , free-shipping along with sorting options of filtered products (ascending , descending or based on names)

The selected products and displayed clearly on the cart along with their quantity , color and price . Their qty can be controlled in the cart too.

Styled-components library helped me to provide CSS to several components individually and used global styles otherwise. I have used 2 column layout for the charts and represented them in 2fractions and 3fractions of the width of the web page and also ensured that heights are also adjusted accordingly to maintain the responsivenes of the site.

I have continuous deployment option on netlify to host the website and connected it to Github.

This project helped me to solidify my react skills to build Dynamic websites with User-friendly interfaces.

The major challenges were : 
1.) Analysing and structuring flow of functionality to render data and various components. 
2.) Studying other e-commerce websites for ideas and functionalities to analyse their 
3.) Defining particular components for Enabling the private routes which provide authentication and authorization using auth0.
4.) Problem was not about the complexity of functionalites of the application but applying them a large number of times on every component and keeping track of it.

Home Page:
![1 Home_Page](https://github.com/AyushSaxena15022002/Radiant-Rooms/assets/109613258/fe84ecf5-25b6-49b0-80bf-50b7350d2d5f)

![2 Home_Page2](https://github.com/AyushSaxena15022002/Radiant-Rooms/assets/109613258/fa9b2296-f0dc-45ef-a399-86c353d0a3e4)


About Page:
![3 About_Page](https://github.com/AyushSaxena15022002/Radiant-Rooms/assets/109613258/1e080630-0b4c-40a7-ab4c-38ad2d93ba4b)

3. All Products Page:
![4 All_Products](https://github.com/AyushSaxena15022002/Radiant-Rooms/assets/109613258/1bc57531-2a4a-4c85-aa2b-21dd830071e0)

![5 All_Products2](https://github.com/AyushSaxena15022002/Radiant-Rooms/assets/109613258/7d34137c-13b1-4aaa-8a09-90d6efaf8a42)


4. Single Product Page
![6 Single_Product](https://github.com/AyushSaxena15022002/Radiant-Rooms/assets/109613258/5db84775-bec6-4edf-b129-4ccf29e1668c)


5. Cart Page
![7 Cart_Page](https://github.com/AyushSaxena15022002/Radiant-Rooms/assets/109613258/e7893ae7-3a72-435e-a592-74344670b5fa)


