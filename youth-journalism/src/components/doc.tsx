// // import { useState, ClipboardEvent } from 'react';
// // import DOMPurify, { Config } from 'dompurify';

// // const PasteHandler = () => {
// //   const [content, setContent] = useState<string>('');

// //   const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
// //     // Allow the paste to happen normally by not calling preventDefault
// //     const pasteTarget = event.target as HTMLDivElement;

// //     setTimeout(() => {
// //       const pastedHTML = pasteTarget.innerHTML;

// //       // Sanitize the pasted HTML after it is inserted
// //       const sanitizeConfig: Config = {
// //         ALLOWED_TAGS: [
// //           'b', 'i', 'strong', 'em', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
// //           'p', 'img', 'caption', 'ul', 'ol', 'li', 'br', 'span'
// //         ],
// //         ALLOWED_ATTR: ['style', 'href', 'src', 'alt', 'width', 'height']
// //       };
// //       const sanitizedContent = DOMPurify.sanitize(pastedHTML, sanitizeConfig);

// //       setContent(sanitizedContent);
// //     }, 0); // Use a timeout to ensure the content is pasted before sanitization
// //   };

// //   return (
// //     <div>
// //       <h1 style={{ color: 'black' }}>Paste Your Google Doc Here</h1>
// //       <div
// //         contentEditable={true}
// //         onPaste={handlePaste}
// //         onInput={(e) => setContent((e.target as HTMLDivElement).innerHTML)}
// //         dangerouslySetInnerHTML={{ __html: content }}
// //         style={{
// //           border: '1px solid #ccc',
// //           padding: '10px',
// //           minHeight: '200px',
// //           maxWidth: '100%',
// //           overflow: 'auto',
// //           whiteSpace: 'normal'
// //         }}
// //       ></div>
// //       <button onClick={() => handleUpload(content)}>Upload Article</button>
// //     </div>
// //   );
// // };

// // const handleUpload = (content: string) => {
// //   // Logic to send `content` to the server or database where it will be stored and made viewable by others
// //   console.log('Article uploaded:', content);
// // };

// // export default PasteHandler;

// import { useState, ClipboardEvent } from 'react';
// import DOMPurify from 'dompurify';
// import type { Config } from 'dompurify';

// // Add DOMPurify types
// declare module 'dompurify' {
//   export interface DOMPurifyI {
//     sanitize(source: string, config?: Config): string;
//   }
// }

// const PasteHandler = () => {
//   const [content, setContent] = useState<string>('');
//   const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

//   const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
//     const pasteTarget = event.target as HTMLDivElement;
//     setTimeout(() => {
//       const pastedHTML = pasteTarget.innerHTML;
//       const sanitizedContent = DOMPurify.sanitize(pastedHTML, {
//         ALLOWED_TAGS: [
//           'b', 'i', 'strong', 'em', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
//           'p', 'img', 'caption', 'ul', 'ol', 'li', 'br', 'span'
//         ],
//         ALLOWED_ATTR: ['style', 'href', 'src', 'alt', 'width', 'height'],
//         RETURN_DOM: false,
//         RETURN_DOM_FRAGMENT: false,
//         RETURN_DOM_IMPORT: false,
//         RETURN_TRUSTED_TYPE: false
//       } as Config);

//       // Declare the type for sanitizedContent
//       declare const sanitizedContent: string | TrustedHTML;

// // Convert TrustedHTML to string if necessary
//       const cleanContent = typeof sanitizedContent === 'object' && 'toString' in sanitizedContent
//         ? sanitizedContent.toString()
//         : sanitizedContent;

        
//       setContent(cleanContent);
//     }, 0);
//   };

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const result = reader.result?.toString();
//         if (result) {
//           setImageSrc(result);
//           setContent((prevContent) => prevContent + `<img src="${result}" alt="uploaded image" />`);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleUpload = () => {
//     console.log('Article content uploaded:', content);
//   };

//   const handleCreateLink = () => {
//     const url = prompt('Enter URL');
//     if (url) {
//       document.execCommand('createLink', false, url);
//     }
//   };

//   const handleContentChange = (e: React.FormEvent<HTMLDivElement>) => {
//     const target = e.target as HTMLDivElement;
//     const sanitizedContent = DOMPurify.sanitize(target.innerHTML, {
//       ALLOWED_TAGS: [
//         'b', 'i', 'strong', 'em', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
//         'p', 'img', 'caption', 'ul', 'ol', 'li', 'br', 'span'
//       ],
//       ALLOWED_ATTR: ['style', 'href', 'src', 'alt', 'width', 'height'],
//       RETURN_DOM: false,
//       RETURN_DOM_FRAGMENT: false,
//       RETURN_DOM_IMPORT: false,
//       RETURN_TRUSTED_TYPE: false
//     } as Config);

//     // Convert TrustedHTML to string if necessary
//     const cleanContent = typeof sanitizedContent === 'object' 
//       ? sanitizedContent.toString() 
//       : sanitizedContent;

//     setContent(cleanContent);
//   };

//   return (
//     <div>
//       <h1 style={{ color: 'black' }}>Paste Your Google Doc Here</h1>
      
//       {/* Toolbar */}
//       <div>
//         <button 
//           type="button" 
//           onClick={() => document.execCommand('bold')}
//         >
//           Bold
//         </button>
//         <button 
//           type="button" 
//           onClick={() => document.execCommand('italic')}
//         >
//           Italic
//         </button>
//         <button 
//           type="button" 
//           onClick={handleCreateLink}
//         >
//           Add Link
//         </button>
//         <input 
//           type="file" 
//           accept="image/*" 
//           onChange={handleImageUpload} 
//         />
//       </div>

//       {/* Content Editor */}
//       <div
//         contentEditable={true}
//         onPaste={handlePaste}
//         onInput={handleContentChange}
//         dangerouslySetInnerHTML={{ __html: content }}
//         style={{
//           border: '1px solid #ccc',
//           padding: '10px',
//           minHeight: '200px',
//           maxWidth: '100%',
//           overflow: 'auto',
//           whiteSpace: 'normal'
//         }}
//       />

//       <button 
//         type="button" 
//         onClick={handleUpload}
//       >
//         Upload Article
//       </button>
//     </div>
//   );
// };

// export default PasteHandler;

const PasteHandler: React.FC = () => {
  return (
    <>
      <h1>Writing page coming soon!</h1>
    </>
  )
}

export default PasteHandler;
