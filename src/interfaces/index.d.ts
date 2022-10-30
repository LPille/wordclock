declare module 'myTypes' {
    type FieldType = {
        id: number,
        character: string,
        color: string,
        on: boolean
    };

    type dahsboardType = {
        fields: FieldType[],
        brightness?: number,
    };

    interface dashboardProps {
        dashboard: dahsboardType
    }
         // brightness: number,

    interface FieldProps {
        field: FieldType  
     }
  }
  
  module.exports = {
    FieldType,
    FieldProps,
    dahsboardType,
    dashboardProps
  };