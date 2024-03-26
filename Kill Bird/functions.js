const bird = document.getElementById('bird');
  const gun = document.getElementById('gun');

  function getRandomPosition() {
    const windowWidth = window.innerWidth - 50;
    const windowHeight = window.innerHeight - 50;
    const randomX = Math.floor(Math.random() * windowWidth);
    const randomY = Math.floor(Math.random() * windowHeight);
    return { x: randomX, y: randomY };
  }

  function moveBird() {
    const newPosition = getRandomPosition();
    bird.style.left = newPosition.x + 'px';
    bird.style.top = newPosition.y + 'px';
  }

  bird.onclick= function () {
    this.classList.add("heddin");
   alert('The bird is dead!');
 moveBird();
  }

  

  setInterval(moveBird, 2000);

  moveBird();
  
