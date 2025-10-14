import { useState } from 'react';
import { Key, MessageCircle, Check } from 'lucide-react';

function App() {
  const [showCopied, setShowCopied] = useState(false);

  const handleDiscordClick = async () => {
    const discordLink = 'https://discord.gg/5xcttz2uvH';
    try {
      await navigator.clipboard.writeText(discordLink);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-purple-700 flex items-center justify-center p-8 relative overflow-hidden">
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
              src="/logo copy.png"
              alt="Alter Logo"
              className="w-32 h-32 object-contain"
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
          <button className="group relative px-8 py-4 bg-white hover:bg-gray-50 text-purple-700 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center hover:scale-105 hover:shadow-2xl">
            <Key className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Get Script</span>
          </button>

          <button
            onClick={handleDiscordClick}
            className="group relative px-8 py-4 bg-transparent hover:bg-white/10 text-white rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center border-2 border-white/30 hover:scale-105 hover:border-white/50"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Discord</span>
          </button>
        </div>
      </div>

      {showCopied && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl px-6 py-4 flex items-center gap-3 animate-slide-up z-50">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Check className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-gray-800 font-semibold">Copied to Clipboard</span>
        </div>
      )}
    </div>
  );
}

export default App;
