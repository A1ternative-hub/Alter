import { Key, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-purple-600 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="floating-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      <div className="text-center space-y-10 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <img
              src="/raw-removebg-preview.png"
              alt="Alter Logo"
              className="w-24 h-24 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'text-8xl font-black text-white';
                fallback.textContent = 'A';
                e.currentTarget.parentElement?.appendChild(fallback);
              }}
            />
            <h1 className="text-8xl font-black text-white tracking-wide">
              LTER
            </h1>
          </div>
          <p className="text-white/90 text-2xl font-light">Welcome to the future</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <button className="group relative px-8 py-4 bg-white hover:bg-gray-50 text-purple-600 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-3 min-w-[200px] justify-center">
            <Key className="w-5 h-5" />
            <span>Get Script</span>
          </button>

          <button className="group relative px-8 py-4 bg-transparent hover:bg-white/10 text-white rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-3 min-w-[200px] justify-center border-2 border-white/30">
            <MessageCircle className="w-5 h-5" />
            <span>Discord</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
