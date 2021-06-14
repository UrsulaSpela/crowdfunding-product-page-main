var x = document.querySelector('#modal');
var y = document.querySelector('#main');
var z = document.querySelector('.pledge-selected'); 
var t = document.querySelector('#success')

function showModal() {
    if (x.style.display === 'none') {
      x.style.display = 'block';
      main.style.display = 'none';
    } else {
      x.style.display = 'none';
      main.style.display = 'flex';
    }
  }

  function showPledge() {
    if (z.style.display === 'none') {
      z.style.display = 'flex';
    } else {
      z.style.display = 'none';
    }
  }

  function showSuccess() {
    if (t.style.display === 'none') {
      t.style.display = 'all';
      x.style.display = 'none';
      y.style.display = 'none';
    } else {
      t.style.display = 'none';
      x.style.display = 'block';
    }
  }

  function goHome(){
    if (y.style.display = 'none'){
      y.style.display = 'flex';
      x.style.display ="none";

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