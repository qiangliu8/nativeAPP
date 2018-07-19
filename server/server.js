const express = require('express')
const mongoose = require('mongoose')
//链接monogo
const DB_URL = 'mongodb://localhost:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('mongodb connected success')
})

//类似于mysql的表 mongo里有文档 字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age:{type:Number,require:true}
}))
  //新增数据
// User.create({
//     user: 'xiaohua',
//     age:14
// }, function (err, doc) {
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })
  //删除数据
// User.remove({age:18}, function (err, doc) {
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })

//更新数据
User.update({'user':'xiaohua'},{'$set':{age:26}},function (err, doc) {
    if (!err) {
        console.log(doc)
    } else {
        console.log(err)
    }
})
//新建app
const app = express()


app.get('/', function (req, res) {
    res.send('<h1>hello world</h1>')
})
app.get('/data', function (req, res) {
    User.findOne({}, function (err, doc) {
      return  res.json(doc)
    })
    //res.json({name:'liu1',type:'qiang1'})
})
app.get('/delete')
app.listen(9093, function () {
    console.log('node APP start at port 9093')
})