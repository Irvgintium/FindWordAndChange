function onOpen() {
  // Creates a custom menu titled "Find Word/s" and adds an item "Search and Highlight" to it
  DocumentApp.getUi()
    .createMenu('Modify Word/s')
    .addItem('Find & Select', 'showDialog')
    .addToUi();
}

function showDialog() {
  var ui = DocumentApp.getUi();
  
  // Prompts the user to enter a word to search and highlight
  var result = ui.prompt('Enter a word to search and highlight:');
  var searchTerm = result.getResponseText();

  if (searchTerm) {
    // Calls the highlightWord function with the entered search term
    highlightWord(searchTerm);
  }
}

function highlightWord(searchTerm) {
  var doc = DocumentApp.getActiveDocument();
  
  // Creates a new range object to store the selected text
  var selection = doc.newRange();

  var paragraphs = doc.getBody().getParagraphs();

  paragraphs.forEach(function (paragraph) {
    // Searches for the search term within the paragraph
    var textElement = paragraph.findText(searchTerm);
    
    while (textElement) {
      // Retrieves the start and end offsets of the search term within the text element
      var startIndex = textElement.getStartOffset();
      var endIndex = textElement.getEndOffsetInclusive();
      
      // Adds the text element and corresponding offsets to the selection
      selection.addElement(textElement.getElement(), startIndex, endIndex);
      
      // Continues searching for the search term in the paragraph
      textElement = paragraph.findText(searchTerm, textElement);
    }
  });

  // Sets the selection in the document to the highlighted range, then user can change the font, colors etc for all the words in the Google Docs toolbox.
  doc.setSelection(selection);
}
