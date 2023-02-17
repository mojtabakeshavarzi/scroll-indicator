import Content from "./Content";
import ScrollIndicator from "./ScrollIndicator";


function App() {
  return (
    <>
      <header>
        <div className="container">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
      </header>
      <ScrollIndicator />
      <Content />
      
    </>
  );
}

export default App;
