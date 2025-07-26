import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

export default function TextForm({ mode }) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const handleCapitalize = () => {
    const paragraphs = text.split(/\n+/)
      .map(p => p.trim())
      .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase());
    setText(paragraphs.join('\n\n'));
  };

  const handleClear = () => {
    setText('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(' '));
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save('textutils.pdf');
  };

  const downloadWord = () => {
    const doc = new Document({
      sections: [{
        children: [new Paragraph({ children: [new TextRun(text)] })]
      }]
    });
    Packer.toBlob(doc).then(blob => {
      saveAs(blob, 'textutils.docx');
    });
  };

  return (
    <div>
      <h1 className="mb-4">TextUtils - Word Counter, Character Counter</h1>
      <div className="mb-3">
        <textarea 
          className="form-control" 
          id="myBox" 
          rows="8" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          style={{
            backgroundColor: mode === 'dark' ? '#343a40' : 'white',
            color: mode === 'dark' ? 'white' : 'black'
          }}
        ></textarea>
      </div>
      <div className="d-flex flex-wrap gap-2 mb-4">
        <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary" onClick={handleCapitalize}>Capitalize</button>
        <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Spaces</button>
        <button className="btn btn-primary" onClick={downloadPDF}>PDF</button>
        <button className="btn btn-primary" onClick={downloadWord}>Word</button>
        <button className="btn btn-primary" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary" onClick={handleClear}>Clear</button>
        
      </div>
      <div className="container">
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter(word => word.length > 0).length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </div>
  );
}