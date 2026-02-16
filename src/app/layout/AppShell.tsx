import React from 'react';
import { Link } from 'react-router-dom';

interface AppShellProps {
    children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header/Navigation */}
            <header className="bg-white shadow">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="text-2xl font-bold text-blue-600">
                            MahjMeet
                        </Link>
                        <div className="flex gap-4">
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                            <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link>
                            <Link to="/find-matches" className="text-gray-600 hover:text-gray-900">Find Matches</Link>
                            <Link to="/propose-match" className="text-gray-600 hover:text-gray-900">Propose Match</Link>
                            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
                            <Link to="/profile" className="text-gray-600 hover:text-gray-900">Profile</Link>
                        </div>
                    </div>
                </nav>
            </header>
            {/* Main Content */}
            <main className="max-w-7xl mx-auto">
                {children}
            </main>
            {/* Footer */}
            <footer className="bg-gray-900 text-white mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">MahjMeet</h3>
                            <p className="text-gray-400">A digital platform to find and propose mahjong meetups</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                                <li><Link to="/how-it-works" className="text-gray-400 hover:text-white">How It Works</Link></li>
                                <li><Link to="/find-matches" className="text-gray-400 hover:text-white">Find Matches</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Support</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2026 MahjMeet. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AppShell;