declare module 'myTypes' {
    type FieldType = {
        id: number,
        character: string,
        color: string,
        isOn: boolean,
    };

    type dahsboardType = {
        fields: FieldType[],
        brightness: number,
        sameColor: boolean,
        isOn: isOn
    };

    interface FieldProps {
        isOn: boolean,
        field: FieldType  
     }
  }
  
  module.exports = {
    FieldType,
    FieldProps,
    dahsboardType,
    dashboardProps
  };