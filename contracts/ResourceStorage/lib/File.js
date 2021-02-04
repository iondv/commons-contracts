/**
 * Created by kras on 26.07.16.
 */
'use strict';

function File(id, link, options) {
  this.id = id;

  this.link = link;

  this.options = options;

  this.name = this.options.name || this.id;

  /**
   * @returns {Promise}
   */
  this.getContents = function () {
    return this._getContents();
  };

  /**
   * @returns {StoredFile}
   */
  this.clone = function () {
    return this._clone();
  };
}

module.exports = File;
