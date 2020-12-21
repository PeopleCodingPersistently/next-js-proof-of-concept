import Dog from '../../../models/Dog';

export default async(req, res) => {


  const { method } = req;
  switch (method) {
    case 'POST': {
      try {
        const body = JSON.parse(req.body);
        const dog = await Dog.create(body);
        
        res.status(201).json(dog);
      } catch(err) {
        res.status(400).json(err);
      } break;
    } 
    case 'GET': {
      try {
        const dog = await Dog.find();

        res.status(200).json(dog);
      } catch (err) {
        res.status(400).json(err);
      }
    }
    default: res.status(400).json('you still suck');
    break;
  }
}