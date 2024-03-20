#Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
#namaste food
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 */
 Weak Part
 Focus on RestaurantCard.js
 Single Responsibility Principle
 Resusable
 Maintaenable
 Testable

 CSS
 -Styled components
 -MUI
 -Chakra UI
 -Ant Design
 -Tailwind Design

 Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Slice(cartSlice)
 - Dispatch(action)
 - Selector

Why Super is used?
 The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

 Parent Constructor->Parent Render-> Child Constructor-> Child Render-> Child didMount -> Parent didMount

//Output
Parent Constructor
Parent Render

Child Constructor
Child Render
Child Mounted
Parent Mounted

#Redux
Vanilla->Don't mutate the state + Return(mandatory)
Redux Toolkit(Modern)-> Mutate the state(mandatory) uses Immer behind the scenes

#Testing
-Unit Testing
-React testing library requires jest(uses Babel) behind the scenes
-Intergration Testing
-End to End Testing(selenium,puppeteer,cypress)

#Setting up Testing in our app
- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest configuration(npx because we are just executing jest package)
-jsdom(test cases do not run on browsers so they need an environment for testing and jsdom provides them with that)

