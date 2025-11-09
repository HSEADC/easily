import '../stylesheets/style.css';
console.log('script reached');

const dd_img = document.querySelectorAll(".dd-character");

dd_img.forEach(dragDrop)

  function dragDrop(str) {
  let grab = false;
  let offsetX;
  let offsetY;

  str.addEventListener("mousedown", function (event) {
    grab = true;

    offsetX = event.clientX - str.getBoundingClientRect().left;
    offsetY = event.clientY - str.getBoundingClientRect().top;

    function onMouseMove(event) {
      if (grab) {
        let x = event.clientX - offsetX;
        let y = event.clientY - offsetY;

        str.style.left = x + "px";
        str.style.top = y + "px";
      }
    }
    function onMouseUp() {
      grab = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
};