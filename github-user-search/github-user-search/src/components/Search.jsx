import { useState } from 'react';
import { fetchUserData, fetchAdvancedUsers } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [advancedMode, setAdvancedMode] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    if (!advancedMode) {
      const { data, error } = await fetchUserData(username);
      if (error) setError(error);
      else setResult(data);
    } else {
      let query = '';
      if (username) query += `${username} in:login`;
      if (location) query += ` location:${location}`;
      if (minRepos) query += ` repos:>=${minRepos}`;
      const { data, error } = await fetchAdvancedUsers(query.trim());
      if (error) setError(error);
      else setResult(data);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {advancedMode && (
          <>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Min Repositories"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </>
        )}

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={advancedMode} onChange={() => setAdvancedMode(!advancedMode)} />
            Advanced Mode
          </label>
        </div>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">Looks like we cant find the user</p>}
        {result && !advancedMode && (
          <div className="flex gap-4 items-center border p-4 rounded mt-4">
            <img src={result.avatar_url} alt={result.login} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-lg font-bold">{result.name || result.login}</h2>
              <a href={result.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View GitHub Profile
              </a>
            </div>
          </div>
        )}

        {result && advancedMode && result.length > 0 && (
          <ul className="mt-4 space-y-3">
            {result.map((user) => (
              <li key={user.id} className="flex items-center gap-4 border p-3 rounded">
                <img src={user.avatar_url} className="w-12 h-12 rounded-full" alt={user.login} />
                <div>
                  <p className="font-semibold">{user.login}</p>
                  <a href={user.html_url} target="_blank" className="text-blue-600 underline">GitHub</a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
