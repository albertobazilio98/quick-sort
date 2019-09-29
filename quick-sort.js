let separa = (A, p, r) => {
  let x = A[p];
  let i = p-1;
  let j = r+1;
  while (true) {
    j--;
    while (x < A[j]) {
      j--;
    }
    i++;
    while (x > A[i]) {
      i++;
    }
    if (i < j) {
      [A[i], A[j]] = [A[j], A[i]];
    } else {
      return j;
    }
  }
}
let chuteDaSorte = (A, p, r) => {
  if (p < r) {
    let q = separa(A, p, r);
    chuteDaSorte (A, p, q);
    chuteDaSorte(A, q+1, r);
  }
}


var arr = [];
var timelapse = 0;

$(document).ready( () => {
  $('#insert-1').click( () => {
    if (parseInt($('#1-elemen').val())) {
      arr.push(parseInt($('#1-elemen').val()));
    }
    console.log(arr);
  })
  $('#insert-n').click( () => {
    let qtd = 0;
    if (parseInt($('#n-elemen').val())) {
      qtd = parseInt($('#n-elemen').val());
    }
    for (let i = 0; i < qtd; i++) {
      arr.push(Math.floor(Math.random()*1000))
    }
    console.log(arr);
  })
  $('#sort').click( () => {
    var t0 = performance.now();
    chuteDaSorte(arr, 0, arr.length - 1)
    timelapse = performance.now() - t0;
    console.log(arr)
    console.log(timelapse)
  })
  $('#open-modal').click( () => {
    $('#vet').remove();
    txt = arr.join('</br>')
    $('#modal-body').append(`<span id="vet">Tempo gasto na ordenação: ${timelapse} ms </br>${txt}</span>`);
  })
});