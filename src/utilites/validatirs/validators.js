export const requiredField = (value) => {
   if (value) {
      return undefined
   } else {
      return 'Field is requried';
   }


}

export const maxLengthCreator = (maxLength) => (value) => {
   if (value.length > maxLength) {
      return `Max length is ${maxLength}  symbols`
   } else {
      return undefined;
   }
}

