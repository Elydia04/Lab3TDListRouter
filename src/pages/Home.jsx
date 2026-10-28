import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Organize Your Day, One Task At A Time
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              A simple, no-frills todo app built for students. Keep track of school work, 
              personal errands, and everything in between.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/todo"
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Adding Tasks
              </Link>
              <Link
                to="/groups"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors border border-blue-400"
              >
                Browse Groups
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick & Simple</h3>
            <p className="text-gray-600">Add, complete, and delete tasks with just a few clicks. No clutter, just what you need.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Organized</h3>
            <p className="text-gray-600">Sort your tasks into groups like School, Personal, Projects, or create your own custom categories.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Progress</h3>
            <p className="text-gray-600">See your progress at a glance with the dashboard showing completed and pending tasks.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to get started?</h2>
              <p className="text-gray-600">Head over to your dashboard to see your task overview.</p>
            </div>
            <Link
              to="/"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
