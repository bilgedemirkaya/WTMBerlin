const fs = require('fs')
const Flatted = require('flatted/cjs');

module.exports = class Service {
  constructor(model, dbPath) {
    this.model = model
    this.dbPath = dbPath
  }

  async findAll() {
    return this.model.find()
  }

  async add(item) {
    
    return this.model.create(item)
  }

  async  del(itemId) {
    return this.model.deleteOne({_id: itemId})
  }

  async find(itemId = 1) {
    const allItems = await this.findAll()

    return allItems.find(p => p.id == itemId)
  }

  async saveAll(items) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.dbPath, Flatted.stringify(items), (err, file) => {
        if (err) return reject(err)

        resolve()
      })
    })
  }

  async update(updatedItem) {
    const allItems = await this.findAll();
    const itemIndex = allItems.findIndex(item => item.id === updatedItem.id);

    if (itemIndex < 0) {
      await this.add(updatedItem);
    } else {
      allItems.splice(itemIndex, 1, updatedItem);
      await this.saveAll(allItems);
    }
  }
}
