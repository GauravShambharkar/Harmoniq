import {
  CloudIcon,
  SparklesIcon,
  HeartIcon,
  MusicalNoteIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Soft Blue Background with Cloud Aesthetic */}
      

      {/* Transparent Component Container */}
      <div className="relative  z-10 w-full min-h-screen flex items-center justify-center p-8">
        <div className="backdrop-blur-xl rounded-3xl   p-12 max-w-4xl w-full">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-6xl md:text-7xl font-bold text-blue-900 mb-4 drop-shadow-lg">
              Welcome to Harmoniq
            </h1>
            <p className="text-xl md:text-2xl text-blue-800/80 font-light">
              Where Music Meets Harmony
            </p>
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
            <div className="flex flex-col items-center justify-center p-6 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <CloudIcon className="w-12 h-12 text-blue-700 mb-2" />
              <span className="text-sm font-medium text-blue-900">Cloud</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <SparklesIcon className="w-12 h-12 text-blue-700 mb-2" />
              <span className="text-sm font-medium text-blue-900">
                Sparkles
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <HeartIcon className="w-12 h-12 text-blue-700 mb-2" />
              <span className="text-sm font-medium text-blue-900">Heart</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <MusicalNoteIcon className="w-12 h-12 text-blue-700 mb-2" />
              <span className="text-sm font-medium text-blue-900">Music</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 col-span-2 md:col-span-1">
              <SunIcon className="w-12 h-12 text-blue-700 mb-2" />
              <span className="text-sm font-medium text-blue-900">Sun</span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="backdrop-blur-md bg-white/15 rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Premium Quality
                </h3>
                <p className="text-blue-800/70 font-light text-sm">
                  Experience the finest audio quality with our advanced
                  streaming technology
                </p>
              </div>
            </div>
            <div className="backdrop-blur-md bg-white/15 rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Seamless Sync
                </h3>
                <p className="text-blue-800/70 font-light text-sm">
                  Sync your music across all devices effortlessly with cloud
                  integration
                </p>
              </div>
            </div>
            <div className="backdrop-blur-md bg-white/15 rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Personalized
                </h3>
                <p className="text-blue-800/70 font-light text-sm">
                  Discover music tailored to your taste with AI-powered
                  recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
