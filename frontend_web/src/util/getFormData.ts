export const getFormData = (object: { [x: string]: string | Blob }) =>
  Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key]);
    return formData;
  }, new FormData());
