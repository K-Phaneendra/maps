import React, { useEffect, useState } from 'react';
import { Form, FormControl, ListGroup } from 'react-bootstrap';

const SearchBox = ({ suggestions, callBack }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Handle search input change
    const handleChange = (e) => {
        const userInput = e.target.value;
        setSearchTerm(userInput);

        // Filter suggestions based on user input
        const filtered = suggestions.filter((suggestion) =>
            suggestion.toLowerCase().startsWith(userInput.toLowerCase())
        );
        
        // Update the filtered suggestions and show/hide the suggestions list
        setFilteredSuggestions(filtered);
        setShowSuggestions(userInput.length > 0 && filtered.length > 0);
    };

    // Handle selecting a suggestion
    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion); // Set search term to the selected suggestion
        setShowSuggestions(false); // Hide suggestions list
    };

    useEffect(() => {
        callBack(searchTerm)
    }, [searchTerm])

    return (
        <Form className="position-relative" autoComplete="off">
            <FormControl
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
            />

            {showSuggestions && (
                <ListGroup className="position-absolute w-100">
                    {filteredSuggestions.map((suggestion, index) => (
                        <ListGroup.Item 
                            key={index} 
                            action 
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Form>
    );
};

export default SearchBox;
