let a = 'x'
let count = 0 ;

const changesing = () => {
    if (a === 'x') {
        a = 'o';
        document.getElementById('p2').classList.add("target")
        document.getElementById('p1').classList.remove("target")
    }
    else if (a === 'o') {
        a = 'x';
        document.getElementById('p1').classList.add("target")
        document.getElementById('p2').classList.remove("target")
    }
}



let arr = ['i0', 'i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8']
const box = document.querySelectorAll('.box');



const reset = () => {
    box.forEach((i) => i.innerText = '')
    arr = ['i0', 'i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8']
    a ='o'
    count = 0
}

const winner = (n) => {
    if (arr[0] == arr[1] && arr[1] == arr[2]) {
        console.log('winner')
        setTimeout(() => {
            alert(`${n} is winner`)
        }, 100)
        reset()
    }

    else if (arr[3] == arr[4] && arr[4] == arr[5]) {
        console.log('winner')
        setTimeout(() => {
            alert(`${n} is winner`)
        }, 100)
        reset()
    }
    else if (arr[6] == arr[7] && arr[7] == arr[8]) {
        console.log('winner')
        setTimeout(() => {
            alert(`${n} is winner`)
        }, 100)
        reset()
    }
    else if (arr[0] == arr[3] && arr[3] == arr[6]) {
        console.log('winner')
        setTimeout(() => {
            alert(`${n} is winner`)
        }, 100)
        reset()
    }
    else if (arr[1] == arr[4] && arr[4] == arr[7]) {
        console.log('winner')
        setTimeout(() => {
            alert(`${n} is winner`)
        }, 100)
        reset()
    }


    else if (arr[2] == arr[5] && arr[5] == arr[8]) {
        console.log('winner')
        setTimeout(() => {
            alert(`${n} is winner`)
        }, 100)
        reset()
    }

    else if (arr[0] === arr[4] && arr[4] === arr[8]) {
        console.log('winner')
        setTimeout(() => {
            alert(`${n} is winner`)
        }, 100)
        reset();
    }

    else if (arr[2] == arr[4] && arr[4] == arr[6]) {
        console.log('winner')
        setTimeout(() => {
            alert(`${n} is winner`)
        }, 100)
        reset()
    }

    else if( count === 9 ){
        setTimeout(() => {
            alert('Match draw')
        }, 100)
        reset()
    }
}



box.forEach((i, index) => {
    i.addEventListener('click', () => {
        if (i.innerText === 'x' || i.innerText === 'o') {
        }
        else {
            i.innerText = a
            arr[index] = a
            count ++
            winner(a);
            changesing();
        }
    })
})