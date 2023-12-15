import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
        <motion.h1 whileHover={{ scale: 1.1 }}><FaStar /> Todo-App..! <FaStar /></motion.h1>
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;
