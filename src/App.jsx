import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PricingPage from './components/PricingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-900">B2B Data Bank</span>
              </div>
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
                <Link to="/pricing" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  Welcome to Our Platform
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  Discover our amazing features and services
                </p>
                <div className="mt-8">
                  <Link
                    to="/pricing"
                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          } />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
