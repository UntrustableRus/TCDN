// VM Setup

  (async() => {
const codePromise = fetch("../source/wasm/output.wasm")
const { instance } = await WebAssembly.instantiateStreaming(codePromise)

const buffer = new Uint8Array(instance.exports.memory.buffer)

const pointer = instance.exports.main()

let string = ""
for(let i = pointer; buffer[i]; i++) {
  string += String.fromCharCode(buffer[i])
}

document.querySelector("#maintenance > center > a").innerHTML = string;

})()
