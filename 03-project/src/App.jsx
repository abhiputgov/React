import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from "./data";

const aReactDescriptions = ["Fundamental", "Crucial", "Core"];
function fnGetRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const reactDescription = aReactDescriptions[fnGetRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}

function CoreConcept({ image, description, title }) {
  return (
    <li>
      <img src={image}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((each) => (
              <CoreConcept
                image={each.image}
                description={each.description}
                title={each.title}
              />
            ))}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
