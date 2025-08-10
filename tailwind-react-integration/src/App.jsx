import UserProfile from "./components/UserProfile"; 

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-2xl my-10">Welcome to My Profile</h1>
      <UserProfile /> {/* Use the UserProfile component */}
    </div>
  );
}

export default App;