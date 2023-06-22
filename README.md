# FindWordAndChange
This script is written in Google Apps Script and is designed to create a custom menu in a Google Docs document that allows users to search for a specific word or phrase and highlight all occurrences of that word or phrase within the document.

### Usage

To use the script, follow these steps:

1. Open your Google Docs document.
2. Click on the "Modify Word/s" menu.
3. Select "Find & Select" from the dropdown menu.
4. A prompt will appear asking you to enter a word to search and highlight.
5. Enter the word or phrase you want to search for and click "OK".
6. All occurrences of the search term within the document will be highlighted.
7. You can modify the font, color, or perform other actions on the highlighted text using the Google Docs toolbox.

### Installation

To install the script in your Google Docs document, follow these steps:

1. Open your Google Docs document.
2. Click on "Extensions" in the top menu.
3. Select "Apps Script" from the dropdown menu.
4. A new tab will open with the Google Apps Script editor.
5. Replace the existing code with the provided script [*Script.gs*].
6. Save the script by clicking on the floppy disk icon or pressing `Ctrl + S`.
7. Close the Google Apps Script editor tab.
8. Refresh your Google Docs document.
9. A new menu titled "Modify Word/s" will appear in the top menu.

### Code Explanation

The script consists of the following functions:

1. `onOpen()`: This function creates a custom menu titled "Modify Word/s" and adds an item "Find & Select" to it. The custom menu is displayed when the document is opened.

2. `showDialog()`: This function prompts the user to enter a word or phrase to search and highlight. If a search term is entered, it calls the `highlightWord()` function with the entered search term.

3. `highlightWord(searchTerm)`: This function searches for the specified word or phrase within the document and highlights all occurrences of it. It retrieves all the paragraphs in the document, searches for the search term within each paragraph, and adds the highlighted text to a `Range` object.

For more information on Google Apps Script, please refer to the [official documentation](https://developers.google.com/apps-script/overview).

### License

This project is licensed under the [MIT License](LICENSE).

### Contributions

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request on the [GitHub repository](link-to-your-repository).

### Support

If you encounter any issues or have any questions, please feel free to contact me at sputnikdrunk@gmail.com.
