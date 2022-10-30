declare module 'myTypes' {
    type FieldType = {
        id: number,
        character: string,
        color: string,
        on: boolean
    };
  
    interface FieldProps {
      field: FieldType,
    }
  }
  
  module.exports = {
    FieldType,
    FieldProps,
  };