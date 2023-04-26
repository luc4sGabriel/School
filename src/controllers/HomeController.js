class HomeController {
  async index(req, res) {
    res.json('Suave na nave');
  }
}

export default new HomeController();
