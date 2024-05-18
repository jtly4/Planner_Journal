import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import FAQ from "./pages/FAQ";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import Help from "./pages/Help";
// import Calendar from "./pages/Calendar";
// import CreateEvent from "./pages/CreateEvent";
// import ViewEvent from "./pages/ViewEvent";
// import CloseEvent from "./pages/CloseEvent";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route index element={<About />}/>
//           <Route index element={<FAQ />}/>
//           <Route index element={<SignUp />}/>
//           <Route index element={<Login />}/>
//           <Route index element={<Help />}/>
//           <Route index element={<Calendar />}/>
//           <Route index element={<CreateEvent />}/>
//           <Route index element={<ViewEvent />}/>
//           <Route index element={<CloseEvent />}/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
// ReactDOM.createRoot(
//   document.getElementById("root"),
// )
// .render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </React.StrictMode>,
);
