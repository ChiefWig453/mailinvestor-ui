import { useState } from 'react';
export default function Upload() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const handleUpload = async () => {
    const form = new FormData();
    form.append('file', file);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
      method: 'POST',
      body: form
    });
    const json = await res.json();
    setData(json.data);
  };
  return (
    <div>
      <h2>Upload CSV/XLS</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {data.length > 0 && (
        <table>
          <thead>
            <tr>{Object.keys(data[0]).map(col => <th key={col}>{col}</th>)}</tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>{Object.values(row).map((v,j)=><td key={j}>{v}</td>)}</tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}