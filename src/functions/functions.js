export function addObjectToArray(object, array) {
  array = [...array, object];
};

export function updateObjectInArrayByIndex(object, array, index) {
  return [
    ...array.slice(0, index),
    object,
    ...array.slice(index + 1)
  ];
};

export function deleteObjectFromArrayByIndex(array, index) {
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1)
  ];
};
