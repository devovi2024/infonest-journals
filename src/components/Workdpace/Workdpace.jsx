import { useState, useRef, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";// You can add any React icon you like

const Workspace = ({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (modalOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [modalOpen]);

  return (
    <div className="space-y-6">
      {/* Video Thumbnail + Info Section */}
      <div className="rounded-xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
        {/* Video Thumbnail Area */}
        <div className="relative w-full h-72 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={thumb}
            alt={thumbAlt}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
          <button
            onClick={() => setModalOpen(true)}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
          >
            <FaPlay className="text-lg" />
            <span>Play</span>
          </button>
        </div>

        {/* News Info Area */}
        <div className="bg-gray-100 p-6 rounded-b-lg text-gray-700">
          <p className="text-sm font-semibold uppercase mb-2 tracking-wider text-gray-500">
            Technology
          </p>
          <p className="text-xs text-gray-400 mb-4">March 26, 2020</p>
          <h3 className="text-xl font-bold text-gray-800 leading-snug mb-4">
            Riots Report Shows London Needs To Maintain Police Numbers, Says Mayor
          </h3>
        </div>
      </div>

      {/* Video Modal */}
      <Transition show={modalOpen} as={Fragment}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)} className="relative z-50">
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          {/* Modal Panel */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                {/* ❌ Close Button */}
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-3 right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
                  aria-label="Close video"
                >
                  ✖
                </button>

                <video ref={videoRef} controls loop width={videoWidth} height={videoHeight}>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Workspace;
