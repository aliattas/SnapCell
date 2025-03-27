const AddToCartButtons = () => {
  return (
    <form className="mt-4 flex gap-4 ">
    <button
      className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
    >
      Add to Cart
    </button>
    <button
      type="button"
      className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
    >
      Buy Now
    </button>
  </form>
  )
}

export default AddToCartButtons
