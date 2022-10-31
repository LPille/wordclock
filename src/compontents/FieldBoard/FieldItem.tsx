import { FC, useEffect } from "react";
import styles from './styles.module.scss';
import {Grid} from "@mui/material";
import { useState } from "react";

 
type FieldType = {
    id: number,
    character: string,
    color: string,
    isOn: boolean,
};

type FieldProps = {
    isOn: boolean,
    field: FieldType  
 }

export const FieldItem: FC<FieldProps> = (props): JSX.Element => {

    const [isOn, setIsOn] = useState(props.field.isOn)
    
    const toggleOn = () =>{
        setIsOn(!isOn)
    }

    useEffect(() => {
        setIsOn(props.isOn)
    }, [props.isOn])

return (
    <Grid item xs={1}>
        <div className={`${styles.fieldItem} ${isOn ? styles.on : styles.off }`} onClick={toggleOn}>
            <p>{props.field.character}</p>
        </div>
    </Grid>

    )
}