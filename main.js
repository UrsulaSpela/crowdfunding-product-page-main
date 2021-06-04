function showModal() {
    var x = document.querySelector('#modal');
    var main = document.querySelector('#main');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      main.style.display = 'none';
    } else {
      x.style.display = 'none';
      main.style.display = 'flex';
    }
  }

  function showPledge() {
    var z = document.querySelector('.pledge-selected');
    if (z.style.display === 'none') {
      z.style.display = 'flex';
    } else {
      z.style.display = 'none';
    }
  }

  function showSuccess() {
    var y = document.getElementById('success');
    var x = document.querySelector('#modal');
    if (y.style.display === 'none') {
      y.style.display = 'block';
      // x.style.display = 'none';
    } else {
      y.style.display = 'none';
      x.style.display = 'block';
    }
  }

  // function showSuccess() {
  //   var y = document.getElementById('success');
  //   var x = document.querySelector('#modal');
  //   if (y.style.display === 'none') {
  //     y.style.display = 'flex';
  //     x.style.display ='none';
  //   } else {
  //     y.style.display = 'none';
  //   }
  // }

  function goHome(){
    var main =  document.querySelector('#main');
    if (main.style.display = 'none'){
      main.style.display = 'flex';
    }
  }