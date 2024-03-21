const swap = (array, i, j) => {
  // checando se o vetor é um vetor e checando se as posições são números inteiros
  if (!Array.isArray(array) || !Number.isInteger(i) || !Number.isInteger(j)) {
    throw new Error('Deve ser fornecido um vetor e duas posições');
  }

  // checando se as posições existem
  if (i < 0 || i >= array.length || j < 0 || j >= array.length) {
    throw new Error('Os índices devem ser de acordo com o tamanho do vetor');
  }

  // troca de ordem
  const temp = array[i];
  array.splice(i, 1, array[j]);
  array.splice(j, 1, temp);

  return array;
}


const shuffle = (array, counter) => {
  if(!Array.isArray(array)){
    throw new Error('Não foi fornecido um vetor');
  }

  if(!Number.isInteger(counter)){
    throw new Error('Não foi fornecido um número inteiro');
  }

  for (let i = 0; i < counter; i++) {
    array.sort(() => Math.random() - 0.5);
  }

  return array;
}


const bubble_sort = (array) => {
  if(!Array.isArray(array)){
    throw new Error('Não foi fornecido um vetor');
  }

  for(let i = 0; i < array.length; i++){
    if(!Number.isInteger(array[i])){
      throw new Error('O vetor deve ter somente números inteiros');
    }
  }
  
  array.sort((a, b) => {
    return a - b;
  });
  
  return array;
}


const selection_sort = (array) => {
  if(!Array.isArray(array)){
    throw new Error('Não foi fornecido um vetor');
  }

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

const quick_sort = (arr, left = 0, right = arr.length - 1) => {
  const pivot = (arr, start = 0, end = arr.length - 1) => {
  
    const pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivot) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    swap(arr, start, swapIdx);
    return swapIdx;
  }

  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quick_sort(arr, left, pivotIndex - 1);
    quick_sort(arr, pivotIndex + 1, right);
  }
  return arr;
}



const particionamento = (array, ini, fim, pivot) => {
  let i = ini - 1;

  for (let j = ini; j <= fim - 1; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  [array[i + 1], array[fim]] = [array[fim], array[i + 1]];
  return i + 1;
}