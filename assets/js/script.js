function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


function searchBlogs() {
    // Get the input value
    const input = document.getElementById('searchBar').value.toLowerCase();
    // Get all blog tiles
    const blogTiles = document.getElementsByClassName('blog-tile');
    let hasResults = false;

    // Loop through all the blog tiles
    for (let i = 0; i < blogTiles.length; i++) {
        const tile = blogTiles[i];
        const title = tile.querySelector('h2').innerText.toLowerCase();
        const author = tile.querySelector('.author-date').innerText.toLowerCase();
        const description = tile.querySelector('p').innerText.toLowerCase();

        // Check if the title, author or description contains the search term
        if (title.includes(input) || author.includes(input) || description.includes(input)) {
            tile.style.display = "block"; // Show tile
            hasResults = true;
        } else {
            tile.style.display = "none"; // Hide tile
        }
    }

    // Show 'No Results' message if no results found
    if (!hasResults) {
        document.getElementById('noResult').style.display = 'block';
    } else {
        document.getElementById('noResult').style.display = 'none';
    }
}

