const imagesArr = [
    "./img/img-1.png",
    "./img/img-2.png",
    "./img/img-3.png",
    "./img/img-4.png",
    "./img/img-5.png"
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
  function next(){
    if (imgIndex == imagesArr.length - 1) {
      imgIndex = 0;
    } else {
      imgIndex++;
    }
    imgElement.src = imagesArr[imgIndex];
  }
  setInterval(next,2000);