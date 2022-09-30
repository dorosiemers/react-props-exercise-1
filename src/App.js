import "./styles.css";

/* Exercise
1. Update the HelloSomeone component to accept a name and a greeting property.
   It should display the greeting and the name (for example: Hello Luigi)
   
2. If the name is "Mario", the component should display "Boss" instead of the name

3. add another prop "hasDarkMode" as a boolean and add the class "dark" to the div in the HelloSomeone
   component if it is true
   - make the darkMode attribute true only for Luigi
*/

export default function App() {
  const [Simpsons, setSimpsons] = useState([]);

  async function loadSimpsons() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setSimpsons(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("Hello World");
  }, [loadSimpsons]);

  return (
    <section>
      <HelloSomeone name="Mario" greeting="Hi" />
      <HelloSomeone name="Luigi" greeting="Hello" hasDarkMode={true} />
      <HelloSomeone name="Bowser" greeting="Hey" />
    </section>
  );
}

const HelloSomeone = ({ name, greeting, hasDarkMode = false }) => {
  return (
    <div className={hasDarkMode ? "dark" : ""}>
      {greeting}
      {name === "Mario" ? "Boss" : name}
    </div>
  );
};
