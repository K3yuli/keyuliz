import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers"; 


function Nav (props) {
    // // useEffect hook to re-render when the value updates
    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentCategory.name);
    // }, [currentCategory]);

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    return (
        <header className="flex-row px-1">
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        {/* add attribute specific to testing */}
                        <a data-testid="about" href="#about">About me</a>
                    </li>
                    <li className="mx-2">
                        <span>Portfolio</span>
                    </li>
                    <span className="name">Kenia Y.L.G.</span>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    <li className="mx-2">
                        <span>Resume</span>
                    </li>
                    {/* map over the array */}
                    {categories.map((category) => (
                        <li 
                        className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`}
                        key={category.name}
                        >
                    {/* use onClick to set up event listener for when a category is clicked */}
                            <span 
                            onClick={() => {
                                setCurrentCategory(category)
                            }}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    );
}


export default Nav