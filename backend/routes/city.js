// models/city.js

const { MongoClient, ObjectId } = require('mongodb');

class City {
  constructor() {
    this.client = new MongoClient('mongodb://localhost:3000');
    this.dbName = 'dg_data';
    this.collectionName = 'city';
  }

  async connect() {
    await this.client.connect();
    this.db = this.client.db(this.dbName);
    this.collection = this.db.collection(this.collectionName);
  }

  async disconnect() {
    await this.client.close();
  }

  async getCities() {
    return await this.collection.find({}).toArray();
  }

  async getCityByName(cityName) {
    try {
      const city = await this.collection.findOne({ city: cityName });
      if (city) {
        return { success: true, data: city };
      } else {
        return { success: false, message: 'Ville non trouvée' };
      }
    } catch (error) {
      console.error('Erreur lors de la récupération de la ville :', error);
      return { success: false, message: 'Erreur lors de la récupération de la ville' };
    }
  }
}

module.exports = City;
