import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./features/Dashboard";
import Teachers from "./features/teachers/Teachers";
import Students from "./features/students/Student";
import Header from "./component/Header";
import { useSelector } from "react-redux";
import Class from "./features/class/Class";
import ShowDetails from "./component/ShowDetails";
import ToasterComp from "./component/Toaster";
import { toast } from "react-hot-toast";
import Footer from "./component/Footer";
function App() {
  const { error } = useSelector((state) => state?.students);
  const { error: teacherError } = useSelector((state) => state?.teachers);
  if (error || teacherError) {
    toast.error(error?.message ?? teacherError.error ?? "Something went wrong");
  }

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/class" element={<Class />} />
          <Route path="/:type/:id" element={<ShowDetails />} />
        </Routes>
        <ToasterComp />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
