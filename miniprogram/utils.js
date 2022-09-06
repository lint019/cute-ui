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
  const fs = wx.getFileSystemManager()
  const ab = new ArrayBuffer(1024)
  const file = `${wx.env.USER_DATA_PATH}/`+fileName
  console.log(`open file: ${file}`)
  var ls=[]
  try{
    const fd = fs.openSync({
      filePath: file,
      flag: 'a+'
    })
    const res = fs.readSync({
      fd: fd,
      arrayBuffer: ab,
      length: 10
    })
    console.log(res)

    return JSON.parse(ab)

  }catch{
    console.error("no json file")
    return ls
  }
  

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
    const res = fs.writeFileSync(
      `${wx.env.USER_DATA_PATH}/`+fileName,
      obj,
      'utf8'
    )
    console.log(res)
  } catch(e) {
    console.error(e)
  }
}
function add(obj){
  var list = loadData()
  console.log(`get datalist:${list}`)
  list.append(obj)
  saveData(list)
}