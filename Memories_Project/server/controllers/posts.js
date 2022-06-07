import PostMessage from  '../models/postMessages.js'

export const getPosts = async (req, res) => {
  const postMessages =await  PostMessage.find();
  res.status(200).json(postMessages);
}

export const createPost = async(req, res) => {
  const newPost = await PostMessage.create(req.body);
  res.status(201).json(newPost);
}

