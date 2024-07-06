document.addEventListener("DOMContentLoaded", function() {
    const iconMapping = {
        ":objective:": "&#x21;", // Replace with actual Unicode or HTML entity
    };

    document.querySelectorAll('body *').forEach(function(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.textContent;
            for (const [key, value] of Object.entries(iconMapping)) {
                text = text.replaceAll(key, `<span class="icon">${value}</span>`);
            }
            node.textContent = text;
        }
    });
});
