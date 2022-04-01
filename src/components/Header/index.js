import React from "react";
import profileImage from "../../assets/keyuli.JPG";

// create react component
const Header = () => {
    // return JSX
    return (
        // React.creteElement(properties - 3 - html element wishing to create, props, and remaining children)
        // React.createElement("section", {}, [
        // React.createElement("h1", {}, "Who am I?"),
        // React.createElement("p", {}, "I am Kenia")
        // ]);
        <section className="my-5">
            <img src={profileImage} className="my-2" style={{ width: "20%" }} alt="profile" />
            <div className="my-6">
            </div>
        </section>

    );
}

export default Header;