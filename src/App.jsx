import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Student from "./components/pages/developer/database/student/Student";
import Staff from "./components/pages/developer/database/staff/Staff";
import Teacher from "./components/pages/developer/database/teacher/Teacher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./components/pages/NotFound";
import { StoreProvider } from "./store/StoreContext";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/database/student" element={<Student />} />
              <Route path="/database/teacher" element={<Teacher />} />
              <Route path="/database/staff" element={<Staff />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}
export default App;
