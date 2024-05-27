interface IForm {
  [key: string]: any;
}

export const toFormData = <T extends IForm>(data: T): FormData => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => formData.append(key, data[key]));
  return formData;
};
