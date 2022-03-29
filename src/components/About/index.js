import React from "react";

// create react component
const About = () => {
    // return JSX
    return (
        // React.creteElement(properties - 3 - html element wishing to create, props, and remaining children)
        // React.createElement("section", {}, [
        // React.createElement("h1", {}, "Who am I?"),
        // React.createElement("p", {}, "I am Kenia")
        // ]);
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <p>I am Kenia</p>
        </section>

    );
}

export default About;