export const getEnumerableObject = (object: object) => {
  const descriptors = Object.getOwnPropertyDescriptors(object)

  Object.keys(descriptors).forEach((key) => {
    descriptors[key].enumerable = true
  })

  return Object.create(Object.getPrototypeOf(object), descriptors)
}
