import './App.css';
import Layout from './layout/Layout';

function App() {
  return (
    <Router>
      {/* <Navbar1 /> */}
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <HomePage />
              )
            }
          />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          <Route path="/login" element={<RegForm mode="login" />} />
          <Route path="/register" element={<RegForm mode="register" />} />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
            }
          />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/projects/:id" element={<ProjectDetail />} /> */}
          {/* <Route
            path="/projects/:projectId/lessons/:lessonId"
            element={<ProjectLesson />}
          /> */}
          {/* <Route
            path="/projects/:projectId/lessons/:lessonId/steps/:stepId"
            element={<Step />}
          /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
