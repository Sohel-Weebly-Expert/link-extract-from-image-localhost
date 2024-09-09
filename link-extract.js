// Function to open a new tab with a table of all href values
(function() {
    // Get all anchor tags on the page
    const links = document.querySelectorAll('a');
    
    // Start building the HTML for the table
    let html = '<html><head><title>Links Table</title></head><body>';
    html += '<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">';
    html += '<tr><th>Link Text</th><th>HREF Value</th></tr>';

    // Iterate over each link
    links.forEach(link => {
        const text = link.textContent.trim() || 'No Text';
        const href = link.href || 'No HREF';
        html += `<tr><td>${text}</td><td><a href="${href}" target="_blank">${href}</a></td></tr>`;
    });

    html += '</table></body></html>';

    // Open a new tab with the HTML content
    const newTab = window.open();
    newTab.document.write(html);
    newTab.document.close();
})();
