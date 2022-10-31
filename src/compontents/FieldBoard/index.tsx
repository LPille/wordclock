import React, { useEffect, useState } from "react";
import { FieldItem } from "./FieldItem";
import styles from './styles.module.scss';
import { Grid } from "@mui/material";
import { dahsboardType, FieldType } from "myTypes";


type FieldBoardType = {
    isOn: boolean
}

export const FieldBoard: React.FC<FieldBoardType> = (props: FieldBoardType) => {
       
    const [fields, setFields] = useState<FieldType[]>([]);
    const [brightness, setBrightness] = useState(80)
    const [sameColor, setSameColor] = useState(true)

    const characters = "ESKISTAFÜNFZEHNZWANZIGDREIVIERTELVORFUNKNACHHALBAELFÜNFEINSXÄMZWEIDREIAUJVIERSECHSNLACHTSIEBENZWÖLFZEHNEUNKUHR";
  
    useEffect(() => {
        createFields()
    }, [])
  
    const createFields = () => {
      const defaults = [];
      for(let i = 0; i < characters.length; i++){
        defaults.push({id: i, character: characters[i], color: "RED", isOn:true})
      }
      setFields(defaults)
    };

    return (
        <div className={styles.dahsboard}>
                <Grid container rowSpacing={2} columnSpacing={1} columns={11} > 
                    {fields.map(field =>(
                        <FieldItem key={field.id} field={field} isOn={props.isOn}/>
                        ))}
                </Grid>
        </div>
    )
}
