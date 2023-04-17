import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Lucas',
      sobrenome: 'Gabriel',
      email: 'lucas@123gmail.com',
      idade: 21,
      peso: 80,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
