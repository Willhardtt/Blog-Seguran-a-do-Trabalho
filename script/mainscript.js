function search() {
    let filter = document.getElementById('search-txt').value.toUpperCase();
    let posts = document.querySelectorAll('.post');
    
    posts.forEach(function(item) {
        let title = item.querySelector('h1');
        let text = title.textContent || title.innerText || title.innerHTML;
        
        if (text.toUpperCase().includes(filter)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}