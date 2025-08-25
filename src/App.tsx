import "./App.css";
import { PomodoroView } from "./pomodoro/pomodoro";
import { SpotifyView } from "./spotify/spotify";
import { TasksView, handleGoogleCallback } from "./tasks/tasks";

function App() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="h-full p-2 w-[33%]">
        <TasksView />
      </div>

      <div className="h-full p-2 w-[45%]">
        <PomodoroView />
      </div>

      <div className="h-full p-2 w-[22%]">
        <SpotifyView />
      </div>
    </div>
  );
}

export default App;
