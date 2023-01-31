import XLSX from 'xlsx'

function uploadXlsx (e) {
    const files = e.target.files, f = files[0]
    if (!files.length) return null
        
    return new Promise(res => {
        const reader = new FileReader()

        reader.onload = async function (e) {
            const data = new Uint8Array(e.target.result)
            const {Sheets} = XLSX.read(data, {type: 'array', sheetStubs: true})
            const objsArr = []
    
            for (let list in Sheets) {
                const jsonList = XLSX.utils.sheet_to_json(Sheets[list])
    
                for (let obj of jsonList) {
                    objsArr.push({
                        x: obj.lat || 0,
                        y: obj.lon || 0,
                        date: obj['upload date'] || 0,
                        timecode: obj.timecode || 0,
                        youtubeId: obj['YouTube ID'] || '',
                        filter: obj['denomination id'] || 0
                    })
                }
            }
            res(objsArr)
        }
        reader.readAsArrayBuffer(f)

        // Remove path to file from input (use for uploading same file one more time)
        const input = document.getElementById('uploadXlsx')
        if (input) input.value = null
    })
}

export default uploadXlsx