import { useState, useEffect } from 'react';
import { Key } from 'lucide-react';

function App() {
  const [loadingStage, setLoadingStage] = useState<'a-appear' | 'alter' | 'fade-out' | 'complete'>('a-appear');

  useEffect(() => {
    const timer1 = setTimeout(() => setLoadingStage('alter'), 1500);
    const timer2 = setTimeout(() => setLoadingStage('fade-out'), 2800);
    const timer3 = setTimeout(() => setLoadingStage('complete'), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (loadingStage !== 'complete') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 flex items-center justify-center overflow-hidden">
        <div className="relative flex items-center justify-center">
          {loadingStage === 'a-appear' && (
            <div className="animate-fade-in">
              <img
                src="/raw-removebg-preview.png"
                alt="Alter Logo"
                className="w-64 h-64 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'text-9xl font-bold text-purple-300';
                  fallback.textContent = 'A';
                  e.currentTarget.parentElement?.appendChild(fallback);
                }}
              />
            </div>
          )}
          {loadingStage === 'alter' && (
            <div className="flex items-center text-8xl font-bold text-purple-300 tracking-wider">
              <div className="animate-slide-left">
                <img
                  src="/raw-removebg-preview.png"
                  alt="Alter Logo"
                  className="w-32 h-32 object-contain inline-block"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('span');
                    fallback.textContent = 'A';
                    e.currentTarget.parentElement?.appendChild(fallback);
                  }}
                />
              </div>
              <div className="animate-reveal-right">LTER</div>
            </div>
          )}
          {loadingStage === 'fade-out' && (
            <div className="flex items-center text-8xl font-bold text-purple-300 tracking-wider animate-fade-down">
              <img
                src="/raw-removebg-preview.png"
                alt="Alter Logo"
                className="w-32 h-32 object-contain inline-block"
                style={{ transform: 'translateX(-120px)' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.textContent = 'A';
                  e.currentTarget.parentElement?.appendChild(fallback);
                }}
              />
              <span>LTER</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 flex items-center justify-center p-8">
      <div className="text-center space-y-12 animate-main-fade-in">
        <div className="space-y-4">
          <h1 className="text-7xl font-bold text-purple-200 tracking-wider drop-shadow-2xl">
            ALTER
          </h1>
          <p className="text-purple-300 text-xl tracking-wide">Welcome to the experience</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 hover:scale-105 flex items-center gap-3 min-w-[220px]">
            <Key className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span>Get Script</span>
          </button>

          <button className="group relative px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 flex items-center gap-3 min-w-[220px]">
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>Discord</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
