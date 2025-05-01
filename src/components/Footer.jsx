import React from 'react';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaGooglePlay
} from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

const Footer = () => {
  const position = [23.8103, 90.4125];

  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <img
            src="https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg"
            alt="Logo"
            className="mb-4"
          />
          <p className="text-sm leading-relaxed mb-3">
            Trusted source for the latest news and analysis. Stay informed with our editorial insight, global reach, and local expertise.
          </p>
          <p className="text-xs text-gray-500">© 2025 NewsCorp. All rights reserved.</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Politics</a></li>
            <li><a href="#" className="hover:text-white">Business</a></li>
            <li><a href="#" className="hover:text-white">Technology</a></li>
            <li><a href="#" className="hover:text-white">Sports</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: contact@newscorp.com</li>
            <li>Phone: +880 1234 567890</li>
            <li>Address: 12/A, News Rd, Dhaka, BD</li>
          </ul>
          <div className="flex mt-4 space-x-4">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaLinkedin className="hover:text-white" /></a>
          </div>
        </div>

        {/* Newsletter & Map */}
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold mb-3">Subscribe</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-white text-sm focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-r-md">
                Join
              </button>
            </div>
          </div>
          <div className="h-48 w-full rounded-md overflow-hidden">
            <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={customIcon}>
                <Popup>
                  Our HQ in Dhaka<br />Welcome anytime!
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 pb-8 text-center text-sm text-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 md:space-x-4">
          <p>Made with ❤️ by NewsCorp Team</p>
          <div className="flex space-x-4">
            <a href="#"><FaApple size={22} /></a>
            <a href="#"><FaGooglePlay size={22} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
