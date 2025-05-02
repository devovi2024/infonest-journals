import { useState, useRef, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Workspace = ({ thumb, thumbWidth, thumbHeight, thumbAlt, video, videoWidth, videoHeight }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (modalOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [modalOpen]);

  return (
    <div className="">
      {/* Video Thumbnail + Info Section */}
      <div>
        {/* Video Thumbnail Area */}
        <div className="relative w-full h-72 bg-gray-200 rounded-lg flex items-center justify-center">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            ▶ Play
          </button>
        </div>

        {/* News Info Area */}
        <div className="mt-[-10px] bg-gray-200 rounded-lg mx-auto p-6 shadow-md text-gray-700 text-lg leading-relaxed text-justify">
          <hr />
          <p className="text-gray-600 font-semibold uppercase mb-2 tracking-wider">Technology</p>
          <p className="text-gray-500 mb-4">March 26, 2020</p>
          <h3 className="text-2xl font-bold text-gray-800 leading-snug mb-4">
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
