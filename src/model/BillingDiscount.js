/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BillingDiscount = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BillingDiscount model module.
   * @module model/BillingDiscount
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingDiscount</code>.
   * @alias module:model/BillingDiscount
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingDiscount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingDiscount} obj Optional instance to populate.
   * @return {module:model/BillingDiscount} The populated <code>BillingDiscount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('beginQuantity')) {
        obj['beginQuantity'] = ApiClient.convertToType(data['beginQuantity'], 'String');
      }
      if (data.hasOwnProperty('discount')) {
        obj['discount'] = ApiClient.convertToType(data['discount'], 'String');
      }
      if (data.hasOwnProperty('endQuantity')) {
        obj['endQuantity'] = ApiClient.convertToType(data['endQuantity'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {String} beginQuantity
   */
  exports.prototype['beginQuantity'] = undefined;
  /**
   * 
   * @member {String} discount
   */
  exports.prototype['discount'] = undefined;
  /**
   * 
   * @member {String} endQuantity
   */
  exports.prototype['endQuantity'] = undefined;



  return exports;
}));


