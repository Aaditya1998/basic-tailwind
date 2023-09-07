import "./App.css";
import "./styles/styles.scss";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <section class="container">
          <h2>Our Services</h2>
          <p>We offer a wide range of services to meet your needs.</p>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
          <div className="container mx-auto mt-5">
            <h1 className="text-2x1 font-semibold text-center">
              Welcome to my Tailwind CSS project with React!
            </h1>
            <p className="text-gray-600 text-center">
              Start building amazing interfaces!
            </p>
            <input className="" />
            <button class="custom-button">Click Me</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
