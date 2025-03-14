document.addEventListener('DOMContentLoaded', function() {
    // Existing code
    const form = document.getElementById('post-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            if (title && content) {
                console.log('Title:', title);
                console.log('Content:', content);
            } else {
                alert('Please fill in both fields.');
            }
        });
    }
    
    // New sidebar functionality
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.getElementById('sidebar-toggle');
        
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(event.target) && event.target !== sidebarToggle) {
                sidebar.classList.remove('active');
            }
        }
    });
});