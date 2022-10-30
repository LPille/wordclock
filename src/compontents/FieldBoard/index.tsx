import React, {} from "react";
import Field from "../../interfaces/Field";
import { FieldItem } from "./FieldItem";
import styles from './styles.module.scss';
import {Container, Grid} from "@mui/material";

interface FieldProps {
    fields: Field[];
}

export const FieldBoard: React.FC<FieldProps> = ({fields}: FieldProps) => {
   

    return (
        <section>
            <div className={styles.dahsboard}>
                <Grid container rowSpacing={2} columnSpacing={1} columns={11} > 
                    {fields.map(item =>(
                        <FieldItem key={item.id} field={item}/>
                        ))}
                </Grid>
            </div>
        </section>
    )
}
