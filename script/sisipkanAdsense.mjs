import {getAllFilesSync} from 'get-all-files'
import {readFileSync, writeFileSync} from 'fs'

let file = getAllFilesSync('dist').toArray().filter(x => x.includes('.html'))
for (let x of file){
	let data = readFileSync(x).toString()
	data = data.replace('<head>', `<head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2408628281705149"
     crossorigin="anonymous"></script>`)
	writeFileSync(x, data)
}