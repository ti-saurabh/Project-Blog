const authorModel = require("../models/authorModel")
const blogModel = require("../models/blogModel")

// _____________________________POST BLOG__________________________

<<<<<<< HEAD

=======
>>>>>>> deab3bcf79f73adb84015507f1901c72ce3c7336
const createBlog = async function (req, res) {

  try {
    let data = req.body
    if ( Object.keys(data).length != 0) {
    let findAuthor = await authorModel.findById(data.authorId)

    if (!data.authorId) {
      return res.status(400).send({ msg: "Author_Id is Mandatory" })
    }
    else if (!findAuthor) {
      return res.status(400).send({ msg: "Please enter valid Author Id" })
    }

    let savedBlog = await blogModel.create(data)
    res.status(201).send({ msg: savedBlog })

  }
  
  else res.status(400).send({ status: false, msg: err.massage})
}
   
  catch (err) {
    res.status(500).send({ status: false, Error: err.massage })
  }
}

// ________________________________GET BLOG_________________________________


const GETBlog = async function (req, res) {

  try {

    let data = await blogModel.find()
    res.status(201).send({ msg: data })
  }
  catch (err) {
    res.status(500).send({ status: false, Error: err.massage })
<<<<<<< HEAD
=======

>>>>>>> deab3bcf79f73adb84015507f1901c72ce3c7336
  }
}

const getBlogsWithAuthorDetails = async function (req, res) {
  let specificBook = await bookModel.find().populate('authorId')
  res.send({ data: specificBook })

}

<<<<<<< HEAD



module.exports.createBlog = createBlog
=======
module.exports.createBlog = createBlog

>>>>>>> deab3bcf79f73adb84015507f1901c72ce3c7336
