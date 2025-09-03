"use client";
import { useState, useRef, useEffect } from "react";

// The main application component that renders the entire Linux Basics demo.
export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8 font-sans">
      <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="p-6 md:p-8 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {/* Replaced react-icons with an inline SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
              <polyline points="4 17 10 17 10 20"></polyline>
              <path d="M10 20v-3"></path>
              <line x1="12" y1="20" x2="12" y2="17"></line>
              <polyline points="14 17 14 20 20 20"></polyline>
              <line x1="20" y1="17" x2="14" y2="17"></line>
              <path d="M12 20v-3"></path>
              <path d="M12 17a2 2 0 1 1-2-2"></path>
              <path d="M12 17a2 2 0 1 0 2-2"></path>
              <path d="M22 17v3"></path>
              <path d="M2 17v3"></path>
              <path d="M10 4v11a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V4"></path>
              <path d="M16 4h4"></path>
              <path d="M18 4v3"></path>
            </svg>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight">
              Linux Basics Demo
            </h1>
          </div>
          <p className="text-center text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Dive into the command line with this interactive demo. Learn fundamental Linux commands and concepts in a clean, simulated environment.
          </p>
        </header>

        {/* Main Content Grid */}
        <main className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Learning Content Section */}
          <div className="p-6 bg-slate-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">What You'll Learn</h2>
            <div className="space-y-6 text-slate-200">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-1">
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded">ls</code> (List)
                </h3>
                <p>Lists the files and directories in your current location. It's like checking the contents of a folder.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-1">
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded">cd</code> (Change Directory)
                </h3>
                <p>Changes your current directory to a new one. Use `cd ..` to go up one level, and `cd ~` to go back to your home directory.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-1">
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded">pwd</code> (Print Working Directory)
                </h3>
                <p>Shows you the full path of your current location. It's helpful when you're not sure where you are in the file system.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-1">
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded">mkdir</code> (Make Directory)
                </h3>
                <p>Creates a new directory (folder) in your current location "mkdir hello".</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-1">
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded">touch</code> (Create File)
                </h3>
                <p>Creates a new, empty file. It's a quick way to get a new file started without adding any content yet "touch hello.txt".</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-1">
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded">rm</code> (Remove)
                </h3>
                <p>Removes a file. Use this command with caution, as deleted files are not sent to a recycle bin.</p>
              </div>
            </div>
          </div>
          
          {/* Dummy Terminal & Chat Section */}
          <div className="flex flex-col gap-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Try Commands (Dummy Terminal)</h2>
              <DummyTerminal />
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Ask a Question (Chat Box)</h2>
              <ChatBox />
            </section>
          </div>
        </main>

      </div>
    </div>
  );
}

// DummyTerminal component to simulate a basic command line interface.
function DummyTerminal() {
  // Define a type for the simplified file system. Keys are paths, values are arrays of file/directory names.
  type FileSystem = {
    [key: string]: string[];
  };

  // State to hold the history of commands and their outputs.
  const [history, setHistory] = useState<string[]>(["Welcome to the Linux Dummy Terminal! Type a command below."]);
  // State for the user's current input.
  const [input, setInput] = useState<string>("");
  // State for the current working directory.
  const [currentPath, setCurrentPath] = useState<string>("/home/user");
  // State for the file system data structure.
  const [fs, setFs] = useState<FileSystem>({
    "/home/user": ["Documents", "Downloads"],
    "/home/user/Documents": [],
    "/home/user/Downloads": []
  });
  
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the terminal on history change.
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Function to handle a submitted command.
  function handleCommand(cmd: string) {
    // Split the command string into parts to get the command and its arguments.
    let parts = cmd.trim().split(/\s+/);
    let command = parts[0];
    let arg1 = parts[1];
    let arg2 = parts[2];
    let output = "";
    // Create a copy of the file system to modify.
    let newFs: FileSystem = { ...fs };
    let newPath = currentPath;

    // A simple switch statement to handle different commands.
    switch (command) {
      case "ls":
        // Lists files and directories in the current path.
        output = (newFs[newPath] || []).join("   ") || "";
        break;
      case "pwd":
        // Prints the current working directory.
        output = newPath;
        break;
      case "cd":
        // Changes the current directory.
        if (!arg1 || arg1 === "~") {
          newPath = "/home/user";
        } else if (arg1 === "..") {
          // Navigates up one directory.
          if (newPath !== "/home/user") {
            const lastSlashIndex = newPath.lastIndexOf("/");
            newPath = newPath.substring(0, lastSlashIndex) || "/home/user";
          }
        } else {
          // Navigates into a specified directory.
          const targetPath = arg1.startsWith("/") ? arg1 : `${newPath}/${arg1}`;
          if (newFs[targetPath]) {
            newPath = targetPath;
          } else {
            output = `cd: no such file or directory: ${arg1}`;
          }
        }
        break;
      case "mkdir":
        // Creates a new directory.
        if (!arg1) {
          output = "mkdir: missing operand";
        } else {
          let dirPath = `${newPath}/${arg1}`;
          if (newFs[dirPath]) {
            output = `mkdir: cannot create directory ‘${arg1}’: File exists`;
          } else {
            newFs[dirPath] = [];
            newFs[newPath] = [...(newFs[newPath] || []), arg1];
            output = "";
          }
        }
        break;
      case "rmdir":
        // Removes an empty directory.
        if (!arg1) {
          output = "rmdir: missing operand";
        } else {
          let dirPath = `${newPath}/${arg1}`;
          if (!newFs[dirPath]) {
            output = `rmdir: failed to remove '${arg1}': No such file or directory`;
          } else if (newFs[dirPath].length > 0) {
            output = `rmdir: failed to remove '${arg1}': Directory not empty`;
          } else {
            delete newFs[dirPath];
            newFs[newPath] = (newFs[newPath] || []).filter((item: string) => item !== arg1);
            output = "";
          }
        }
        break;
      case "touch":
        // Creates a new file.
        if (!arg1) {
          output = "touch: missing file operand";
        } else {
          // If the file already exists, do nothing. Otherwise, add it to the current directory's list.
          if (!(newFs[newPath] || []).includes(arg1)) {
            newFs[newPath] = [...(newFs[newPath] || []), arg1];
          }
          output = "";
        }
        break;
      case "rm":
        // Removes a file.
        if (!arg1) {
          output = "rm: missing operand";
        } else {
          const fileExists = (newFs[newPath] || []).includes(arg1);
          const isDirectory = newFs[`${newPath}/${arg1}`];

          if (isDirectory && !arg1.includes('-r')) {
            output = `rm: cannot remove '${arg1}': Is a directory`;
          } else if (!fileExists && !isDirectory) {
            output = `rm: cannot remove '${arg1}': No such file or directory`;
          } else {
            newFs[newPath] = (newFs[newPath] || []).filter((item: string) => item !== arg1);
            output = "";
          }
        }
        break;
      case "cp":
        // Copies a file (simulated). Does not handle directories.
        if (!arg1 || !arg2) {
          output = "cp: missing file operand";
        } else {
          if ((newFs[newPath] || []).includes(arg1)) {
            newFs[newPath] = [...(newFs[newPath] || []), arg2];
            output = "";
          } else {
            output = `cp: cannot stat '${arg1}': No such file or directory`;
          }
        }
        break;
      case "mv":
        // Moves/renames a file (simulated). Does not handle directories.
        if (!arg1 || !arg2) {
          output = "mv: missing file operand";
        } else {
          if ((newFs[newPath] || []).includes(arg1)) {
            newFs[newPath] = (newFs[newPath] || []).filter((item: string) => item !== arg1);
            newFs[newPath] = [...(newFs[newPath] || []), arg2];
            output = "";
          } else {
            output = `mv: cannot stat '${arg1}': No such file or directory`;
          }
        }
        break;
      case "clear":
        // Clears the terminal history.
        setHistory([]);
        return;
      case "":
        // Handle empty input.
        return;
      default:
        // Command not found.
        output = `${command}: command not found`;
    }

    // Update the state with the new file system, path, and history.
    setFs(newFs);
    setCurrentPath(newPath);
    setHistory(h => [...h, `$ ${cmd}`, output].filter(Boolean));
  }

  // Handle form submission.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input.trim() === "") return;
    handleCommand(input);
    setInput("");
  }

  // JSX for the terminal UI.
  return (
    <div className="bg-black text-lime-400 font-mono rounded-lg p-5 shadow-inner shadow-lime-500/20 border-2 border-lime-500/50 h-[400px] overflow-y-auto" ref={terminalRef}>
      <div className="mb-2 whitespace-pre-wrap leading-tight">
        {history.map((line, i) => (
          <div key={i}>
            {line.startsWith("$") ? (
              <span className="text-cyan-400">{line}</span>
            ) : (
              <span className="text-lime-400">{line}</span>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit} className="flex gap-2 items-center mt-2">
        <span className="flex-shrink-0 text-cyan-400 font-bold">{currentPath} $</span>
        <input
          className="bg-black text-lime-400 border-none outline-none w-full flex-grow p-0 focus:outline-none"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a command..."
          autoFocus
        />
        <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm px-4 py-1.5 rounded-lg font-semibold transition-transform transform hover:scale-105 active:scale-95 shadow-md">
          Run
        </button>
      </form>
    </div>
  );
}

// Simple ChatBox component
function ChatBox() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [hovered, setHovered] = useState(false);

  function handleSend(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  }

  return (
    <div className="bg-slate-900 rounded-lg p-4 shadow-md">
      <div
        className="mb-2 h-32 overflow-y-auto custom-scroll relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded shadow-lg z-10 animate-pulse">
            Welcome!
          </div>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-1 text-slate-200">{msg}</div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex gap-2">
        <input
          className="flex-1 bg-slate-800 text-white px-3 py-2 rounded focus:outline-none"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}
