/**
 * Created by kras on 26.07.16.
 */
'use strict';

class File {
  constructor(id, link, options) {
    this.id = id;

    this.link = link;

    this.options = options;

    this.name = this.options.name || this.id;
  };

  /**
   * @returns {Promise}
   */
  getContents() {
    return this._getContents();
  };

  /**
   * @returns {StoredFile}
   */
  clone() {
    return this._clone();
  };
}

module.exports = File;
