class NestedEntity {
  constructor() {
    this._children = [];
  }

  add(children) {
    this._children.push(children);
  }

  toJSON(childrenProperties = {}) {
    const children = this._children.map(c => c.toJSON());
    return Object.assign(childrenProperties, { children });
  }
}

module.exports = NestedEntity;
