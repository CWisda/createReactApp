import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>REACT </h1>
        <p>How to Create A React App</p>
        <p>
          To create a React app, first, ensure Node.js and npm are installed on
          your system. Then, use the create-react-app tool by running npx
          create-react-app your-app-name in your terminal, replacing
          "your-app-name" with the desired name of your app. Navigate into the
          newly created directory with cd your-app-name, and start the
          development server by running npm start. This will open a browser
          window with your React app running. You can now start building your
          app by editing the files in the "src" directory, utilizing React
          components, JSX syntax, and managing state using hooks or Redux for
          more complex applications.
        </p>
        <ul>
          <li>
            JSX: JSX allows you to write HTML-like code directly within your
            JavaScript files, making it easier to visualize and work with your
            UI components. It's a fun and intuitive way to build UIs, blurring
            the lines between markup and logic.
          </li>
          <li>
            React Hooks: React Hooks, introduced in React 16.8, provide a way to
            use state and other React features without writing a class. Hooks
            like useState, useEffect, useContext, etc., simplify component logic
            and make it more readable and maintainable, leading to more
            enjoyable development experience.
          </li>
          <li>
            Hot Module Replacement HMR: HMR is a feature of webpack that
            allows React components to be updated in real-time without the need
            for a full page reload. It speeds up development by preserving the
            application state across changes, enabling developers to see the
            effects of their code edits instantly, which can be both productive
            and entertaining.
          </li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
