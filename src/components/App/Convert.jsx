
    import { useState } from 'react';
    import { FaFileUpload, FaDownload } from 'react-icons/fa';
    
    export default function PptToWordConverter() {
      const [pptFile, setPptFile] = useState(null);
      const [status, setStatus] = useState('idle'); // idle | uploading | processing | done
      const [convertedFile, setConvertedFile] = useState(null);
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.name.endsWith('.ppt') || file.name.endsWith('.pptx'))) {
          setPptFile(file);
        } else {
          alert("Please select a valid .ppt or .pptx file");
        }
      };
    
      const handleConvert = () => {
        if (!pptFile) return;
    
        setStatus('uploading');
    
        // Simulate uploading
        setTimeout(() => {
          setStatus('processing');
    
          // Simulate processing
          setTimeout(() => {
            const fakeDocxBlob = new Blob(['This is a fake Word file'], {
              type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            });
    
            const fakeUrl = URL.createObjectURL(fakeDocxBlob);
            setConvertedFile({
              name: pptFile.name.replace(/\.(ppt|pptx)$/i, '.docx'),
              url: fakeUrl,
            });
            setStatus('done');
          }, 2000);
        }, 1500);
      };
    
      return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-center space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">📄 PPT ➜ Word Converter</h1>
    
          <label className="cursor-pointer flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            <FaFileUpload />
            {pptFile ? pptFile.name : 'Select PPT File'}
            <input type="file" accept=".ppt,.pptx" hidden onChange={handleFileChange} />
          </label>
    
          {pptFile && (
            <button
              onClick={handleConvert}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Convert Now
            </button>
          )}
    
          {status === 'uploading' && (
            <p className="text-blue-500 font-semibold animate-pulse">Uploading File...</p>
          )}
          {status === 'processing' && (
            <p className="text-yellow-500 font-semibold animate-pulse">Processing to Word...</p>
          )}
    
          {status === 'done' && convertedFile && (
            <div className="bg-gray-100 p-4 rounded text-left">
              <p className="text-green-600 font-medium mb-2">✅ Conversion Complete!</p>
              <div className="flex items-center justify-between">
                <span>{convertedFile.name}</span>
                <a
                  href={convertedFile.url}
                  download={convertedFile.name}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaDownload />
                </a>
              </div>
            </div>
          )}
        </div>
      );
    }
    