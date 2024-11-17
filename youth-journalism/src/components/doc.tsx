// import { useState, ClipboardEvent } from 'react';
// import DOMPurify, { Config } from 'dompurify';

// const PasteHandler = () => {
//   const [content, setContent] = useState<string>('');

//   const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
//     // Allow the paste to happen normally by not calling preventDefault
//     const pasteTarget = event.target as HTMLDivElement;

//     setTimeout(() => {
//       const pastedHTML = pasteTarget.innerHTML;

//       // Sanitize the pasted HTML after it is inserted
//       const sanitizeConfig: Config = {
//         ALLOWED_TAGS: [
//           'b', 'i', 'strong', 'em', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
//           'p', 'img', 'caption', 'ul', 'ol', 'li', 'br', 'span'
//         ],
//         ALLOWED_ATTR: ['style', 'href', 'src', 'alt', 'width', 'height']
//       };
//       const sanitizedContent = DOMPurify.sanitize(pastedHTML, sanitizeConfig);

//       setContent(sanitizedContent);
//     }, 0); // Use a timeout to ensure the content is pasted before sanitization
//   };

//   return (
//     <div>
//       <h1 style={{ color: 'black' }}>Paste Your Google Doc Here</h1>
//       <div
//         contentEditable={true}
//         onPaste={handlePaste}
//         onInput={(e) => setContent((e.target as HTMLDivElement).innerHTML)}
//         dangerouslySetInnerHTML={{ __html: content }}
//         style={{
//           border: '1px solid #ccc',
//           padding: '10px',
//           minHeight: '200px',
//           maxWidth: '100%',
//           overflow: 'auto',
//           whiteSpace: 'normal'
//         }}
//       ></div>
//       <button onClick={() => handleUpload(content)}>Upload Article</button>
//     </div>
//   );
// };

// const handleUpload = (content: string) => {
//   // Logic to send `content` to the server or database where it will be stored and made viewable by others
//   console.log('Article uploaded:', content);
// };

// export default PasteHandler;

import { useState, ClipboardEvent } from 'react';
import DOMPurify, { Config } from 'dompurify';

const PasteHandler = () => {
  const [content, setContent] = useState<string>('');
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
    const pasteTarget = event.target as HTMLDivElement;
    setTimeout(() => {
      const pastedHTML = pasteTarget.innerHTML;
      const sanitizedContent = DOMPurify.sanitize(pastedHTML, {
        ALLOWED_TAGS: [
          'b', 'i', 'strong', 'em', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
          'p', 'img', 'caption', 'ul', 'ol', 'li', 'br', 'span'
        ],
        ALLOWED_ATTR: ['style', 'href', 'src', 'alt', 'width', 'height']
      });

      setContent(sanitizedContent);
    }, 0);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string); // Use this URL for image
        // Insert image into content at the cursor position (you'd need to manage cursor for better UX)
        setContent((prevContent) => prevContent + `<img src="${reader.result}" alt="uploaded image" />`);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // Your upload logic here
    console.log('Article content uploaded:', content);
  };

  return (
    <div>
      <h1 style={{ color: 'black' }}>Paste Your Google Doc Here</h1>
      
      {/* Toolbar */}
      <div>
        <button onClick={() => document.execCommand('bold')}>Bold</button>
        <button onClick={() => document.execCommand('italic')}>Italic</button>
        <button onClick={() => document.execCommand('createLink', false, prompt('Enter URL'))}>Add Link</button>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {/* Content Editor */}
      <div
        contentEditable={true}
        onPaste={handlePaste}
        onInput={(e) => setContent((e.target as HTMLDivElement).innerHTML)}
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          minHeight: '200px',
          maxWidth: '100%',
          overflow: 'auto',
          whiteSpace: 'normal'
        }}
      ></div>

      <button onClick={handleUpload}>Upload Article</button>
    </div>
  );
};

export default PasteHandler;