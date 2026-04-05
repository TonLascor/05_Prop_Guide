
import './App.css';
import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToggler";


function Navigation() {
  const isDark = true;

  const sections = [
    { id: 'basic', label: 'Basic Props', icon: '📦' },
    { id: 'ref', label: 'Ref Props', icon: '🔗' },
    { id: 'children', label: 'Children Props', icon: '👶' },
    { id: 'complex', label: 'Complex Props', icon: '🧩' },
    { id: 'theme', label: 'Theme Toggler', icon: '🎨' }
  ];

  return (
    <nav className="`stick top-0 z-50 shadow-md`">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {
            sections.map((section) => (
              <button 
              className={`px-4 py-2 rounded-lg font-medium transition-all bg-blue-600 text-white hover:bg-blue-700`}
              key={section.id}>
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))
          }
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const isDark = true;

  return (
    <div className={"min-h-screen bg-gray-800"}>
      <Navigation />
      <div class="container mx-auto px-4 py-8">
        <header className={`text-center mb-12 transition colors ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          <h1>React props explained</h1>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>simple  comprehensive guide to understanding React props</p>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
        </div>
        <footer className={`mt-12 text-center pb-8 transiction-colors ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}>
          <p className="text-sm ">Made with ❤️ using Bun, React, vite and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

function App() {

  return (
    <AppContent />

  );
}

export default App;
