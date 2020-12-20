import Dog from '../../../models/Dog';

export default async(req, res) => {


  const { method } = req;
  switch (method) {
    case 'POST': {
      try {
        console.log(req.body, 'HELLOOO');
        const dog = await Dog.create(req.body);
        
        res.status(201).json(dog);
      } catch(err) {
        res.status(400).json(err);
      } break;
    } 
    default: res.status(400).json('you still suck');
    break;
  }
}