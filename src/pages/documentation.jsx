import React from "react";
//import "../styles/documentation.css";

const DocumentationPage = () => {
  return (
    <div className="documentation-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Documentation</h1>
        
      </header>

      <main className="content">
        <section className="section">
          <h2>About the AI</h2>
          <p>
            NourishED utilizes state-of-the-art artificial intelligence to provide personalized insights and suggestions about food and nutrition. The AI leverages natural language processing (NLP) and image recognition to assist users in exploring new recipes, comparing nutritional values, and gaining a deeper understanding of their food choices. By analyzing vast databases of culinary and nutritional data, the AI delivers accurate, reliable, and context-aware information.
          </p>
        </section>

        <section className="section">
          <h2>Data Collection</h2>
          <p>
            Our app collects and processes data responsibly, adhering to privacy standards and regulations. The data includes:
          </p>
          <ul>
            <li>User-provided information like search queries and food comparisons.</li>
            <li>Optional photo uploads for food identification purposes.</li>
            <li>Interaction data, such as completed challenges and preferences, to improve user experience.</li>
          </ul>
          <p>
            We ensure that any data collected is anonymized and used solely to enhance the apps performance and features. Your privacy is our top priority.
          </p>
        </section>

        <section className="section">
          <h2>Purpose of NourishED</h2>
          <p>
            NourishED is designed to educate and empower individuals with food and culinary knowledge, fostering a healthier, more mindful approach to eating and cooking. By leveraging technology, the app helps users:
          </p>
          <ul>
            <li>Discover new and exciting recipes tailored to their preferences.</li>
            <li>Understand the nutritional value of their meals.</li>
            <li>Make informed food choices for a balanced lifestyle.</li>
            <li>Develop cooking skills and learn about diverse cuisines.</li>
          </ul>
          <p>
            Whether youre a food enthusiast or someone striving for a healthier lifestyle, NourishED provides the tools and resources to support your journey.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 NourishED. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DocumentationPage;
