import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <h1>Mail-Investor App</h1>
      <ul>
        <li><Link href="/upload">Upload</Link></li>
        <li><Link href="/scrub">Scrub</Link></li>
        <li><Link href="/lists">Lists</Link></li>
        <li><Link href="/editor">Editor</Link></li>
      </ul>
    </div>
  );
}