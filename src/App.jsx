import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import AddRecipe from "./pages/AddRecipe";
import Search from "./pages/Search";
import Recipe from "./pages/Recipe";

import SideBarLayout from "./layout/SideBarLayout";

function App() {
  return (
    <>
      {/* Global Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/add-recipe" element={<AddRecipe />} />

        {/* Search with Sidebar */}
        <Route
          path="/search/:keyword/:mealType"
          element={
            <SideBarLayout>
              <Search />
            </SideBarLayout>
          }
        />

        {/* Recipe Details */}
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>

      {/* Global Footer */}
      <Footer />
    </>
  );
}

export default App;
