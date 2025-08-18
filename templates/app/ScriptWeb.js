document.documentElement.style.scrollBehavior = "smooth";

setInterval(() => {
    window.location.reload();
}, 300000);

// Block opening DevTools (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, right-click)
document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    // Ctrl+Shift+I/J/C/U
    if ((e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        return false;
    }
});
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('Right mouse button is disabled!');
    return false;
});

// Block shortcut for viewing page source (Ctrl+U)
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }
});


console.log("52871623012.js loaded successfully!");
console.debug("This script is designed to enhance the user experience by ensuring smooth scrolling and periodic page refreshes.");
console.warn("The page will refresh every 5 minutes to ensure you have the latest content.");
console.timeLog("ScriptLoadTime", "Script loaded at: " + new Date().toLocaleTimeString());