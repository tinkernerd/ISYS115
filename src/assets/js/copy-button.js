// copy-button.js

export function initializeCopyButtons() {
  document.querySelectorAll('pre[class*="language-"]').forEach(pre => {
    // Create the button
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    pre.appendChild(button);

    // Add event listener to the button
    button.addEventListener('click', () => {
      const codeElement = pre.querySelector('code');
      if (codeElement) {
        // Get the text content of the code block and trim any extra whitespace
        const textToCopy = codeElement.textContent.trim();

        // Copy the text to clipboard
        navigator.clipboard.writeText(textToCopy).then(() => {
          // Change button text to "Copied"
          button.textContent = 'Copied';
          button.classList.add('copied');

          // Reset button text after 1.5 seconds
          setTimeout(() => {
            button.textContent = 'Copy';
            button.classList.remove('copied');
          }, 1500);
        });
      }
    });
  });
}
