const imagesArr = [
    "img-1.png",
    "img-2.png",
    "img-3.png",
    "img-4.png",
    "img-5.png"
  ];
  let imgIndex = 0;
  
  const imgElement = document.getElementById('image');

  function prev(){
    if (imgIndex == 0) {
      imgIndex = imagesArr.length - 1;
    } else {
      imgIndex--;
    }
    imgElement.src = imagesArr[imgIndex];
  }