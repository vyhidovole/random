let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')
let out = document.getElementById('out')
let present = document.getElementById('present')

but1.onclick = f1
but2.onclick = f2

function f1() {
    
    for (let i = 0; i < 20; i++) {
        let n = Math.floor(Math.random() * 9) + 1
        num.push(n)
    }
    console.log(num)
    out.innerText = num

}

let num = []

function   f2(){
    let change = 0
    for (let i=0;i<20;i++){
        if (num[i]==5){
            num[i]=0
            change ++
        }
    }



    out.innerText = num
    present.innerText = change
}







