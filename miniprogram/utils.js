module.exports={
  getInfoList:loadData,
  add:add,
  SayGoodbye:sayGoodbye
}

function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}
// var infoList=loadData()
var fileName='infos.json'


function loadData(){
  
  const ab = new ArrayBuffer(1024)
  const file = `${wx.env.USER_DATA_PATH}/`+fileName
  console.log(`open file: ${file}`)
  var ls=[]
  try{
    const fs = wx.getFileSystemManager()
    fs.accessSync(file)
    const fd = fs.openSync({
      filePath: file,
      flag: 'r'
    })
    const res = fs.readSync({
      fd: fd,
      arrayBuffer: ab,
      length: 1024 
    })
    console.log(res)
    // 关闭文件
    fs.closeSync({fd: fd})
    // var jsongString = String.fromCharCode.apply(null,new Uint16Array(ab))
    var dec= new TextDecoder("utf-8")
    var jsonString=dec.decode(ab)
    console.log(jsonString)
    // var obj= eval('('+jsonString+')')
    
    var jst= '[{"name":"万科城","imageUrl":"3434"}]'
    // var jst = "'"+jsonString+"'"
    return JSON.parse(jst)

  }catch{
    
    console.error("no json file")
    
  }
  return ls 

}
function loadDataDemo(){
  var list=[{
    id:0,
    name:"test1",
    imageUrl:"sdfsdfsdfs"
  },{
    id:1,
    name:"test2",
    imageUrl:"dsdssdds"
  }]

  return list
  
}

function saveData(obj){
  // 同步接口
  try {
    const fs = wx.getFileSystemManager()
    const file = `${wx.env.USER_DATA_PATH}/`+fileName
    // const fd = fs.openSync({
    //   filePath: file,
    //   flag: 'a+'
    // })    
    fs.writeFileSync(
      file,
      obj,
      'utf8'
    )
    // console.log(res)
    // 关闭文件
    // fs.closeSync({fd: fd})
  } catch(e) {
    console.error(e)
  }
}
function add(obj){
  var ls = loadData()
  // var ls=[]
  console.log(`get datalist:${ls}`)
  ls.push(obj)
  saveData(JSON.stringify(ls))
}