const myInitCallback = function() {
    if (document.readyState == 'complete') {
        // Document is ready when Search Element is initialized.
        // Render an element with both search box and search results in div with id 'test'.
        google.search.cse.element.render(
            {
                div: "google-search",
                tag: 'search'
            });
    } else {
        // Document is not ready yet, when Search Element is initialized.
        google.setOnLoadCallback(function() {
            // Render an element with both search box and search results in div with id 'test'.
            google.search.cse.element.render(
                {
                    div: "google=search",
                    tag: 'search'
                });
        }, true);
    }
};

// Insert it before the Search Element code snippet so the global properties like parsetags and callback
// are available when cse.js runs.
window.__gcse = {
    parsetags: 'explicit',
    initializationCallback: myInitCallback
};