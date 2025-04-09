import { useState } from "react";

const InputSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, settask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; // Prevent submission of empty input
    console.log("Submitted:", inputValue);
    settask([...tasks, inputValue]);
    setInputValue(""); // Clear the input field after submission
  };

  return (
    <div>
      <h2>Input Section</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button
                onClick={() => settask(tasks.filter((_, i) => i !== index))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSection;
