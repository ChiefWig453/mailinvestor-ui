import { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function TemplateEditor() {
  const editor = useEditor({ extensions: [StarterKit], content: '<p>Your template here</p>' });

  const exportPdf = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pdf`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ html: editor.getHTML() })
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  return (
    <div>
      <h2>Letter Template Editor</h2>
      <EditorContent editor={editor} />
      <button onClick={exportPdf}>Export PDF</button>
    </div>
  );
}