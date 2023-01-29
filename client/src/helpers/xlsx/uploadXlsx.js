import XLSX from 'xlsx'
import {v4 as uuidv4} from 'uuid'

function uploadXlsx (e, setData) {
    const files = e.target.files, f = files[0]
    const reader = new FileReader()

    if (!files.length) return
        
    reader.onload = async function (e) {
        const data = new Uint8Array(e.target.result)
        const {Sheets} = XLSX.read(data, {type: 'array', sheetStubs: true})

        for (let list in Sheets) {
            const jsonList = XLSX.utils.sheet_to_json(Sheets[list])
            for (let obj of jsonList) {
                const newObj = {
                    x: obj.x || 0,
                    y: obj.y || 0,
                    date: obj.date || 0,
                    timecode: obj.timecode || 0,
                    youtubeId: obj.youtubeId || '',
                    filter: obj.filter || 0
                }

                setData(prev => [...prev, newObj])
                console.log(newObj)
            }
        }

    }
    reader.readAsArrayBuffer(f)

    // Remove path to file from input (use for uploading same file one more time)
    const input = document.getElementById('uploadXlsx')
    if (input) input.value = null
}

export default uploadXlsx