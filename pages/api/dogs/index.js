import Dog from '../../../models/Dog';

export default async(req, res) => {
  const { method } = req;
  switch (method) {
    case 'POST': {
      try {
        const dog = await Dog.create(req.body);
  
        res.status(201).json(dog);
      } catch {
        res.status(400).json('you suck');
      } break;
    } 
    default: res.status(400).json('you still suck');
    break;
  }
}