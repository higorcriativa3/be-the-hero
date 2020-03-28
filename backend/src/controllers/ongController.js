const crypto = require('crypto');
const conn = require('../database/conn');

module.exports = {
  async index (req,resp) {
    const ongs = await conn('ongs').select('*');
  
    return resp.json(ongs);
  },

  async create(req, resp) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await conn('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return resp.json({  id  });
  }
}