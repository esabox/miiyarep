function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  await sleep(2000);
  console.log('1 a break...');
  await sleep(2000);
  console.log('2 second later');
  await sleep(2000);
  console.log('3 second later');
  var xx = document.querySelectorAll("div.bnrBoxInner>a:nth-of-type(1), p.middleImage>a:nth-of-type(1)");

  for (var i = 0; i < xx.length; i++) {

    //xx[i].style.color="red";
    if (i == 20) {
      xx[i].style.boxShadow = "0 0 0px 6px rgba(255, 0, 255, 0.57)";
      xx[i].click();
      break;
    }
  }
  console.log(i);
}

demo();