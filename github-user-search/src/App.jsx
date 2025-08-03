import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-800 text-white p-4 text-center text-xl font-bold">
        GitHub User Search
      </header>
      <main className="py-6">
        <Search />
      </main>
    </div>
  );
}

export default App;