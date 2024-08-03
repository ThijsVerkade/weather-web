import React, { useState } from 'react';
import './LocationSearch.css';

interface LocationSearchProps {
    onSearch: (location: string) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onSearch }) => {
    const [location, setLocation] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && location.trim()) {
            onSearch(location);
            setLocation('');
        }
    };

    return (
        <div className="location-search">
            <input
                type="text"
                className="location-search__input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search location..."
            />
        </div>
    );
};

export default LocationSearch;
