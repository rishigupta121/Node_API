import mongoose from 'mongoose';

/**
 * Product Schema
 */
const productSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    price: {
      type: Float64Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Int32Array
    }
  },
  {
    timestamps: true
  }
);

/**
 * Statics
 */
productSchema.statics = {
  /**
   * Get Product
   * @param {ObjectId} id - The objectId of Product.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((product: any) => {
        if (product) {
          return product;
        }
      });
  }
};

export default mongoose.model('Product', productSchema);